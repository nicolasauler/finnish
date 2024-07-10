use std::{collections::HashMap, fmt::Display};

use shuttle_runtime::SecretStore;

#[derive(serde::Deserialize)]
pub enum FrcVerificationError {
    /// You forgot to add the secret (=API key) parameter: 400
    SecretMissing,
    /// The API key you provided was invalid: 401
    SecretInvalid,
    /// You forgot to add the solution parameter: 400
    SolutionMissing,
    /// Something else is wrong with your request, e.g. your request body is empty: 400
    BadRequest,
    /// The solution you provided was invalid (perhaps the user tried to tamper with the puzzle): 200
    SolutionInvalid,
    /// The puzzle that the solution was for has expired or has already been used.
    SolutionTimeoutOrDuplicate,
    /// Other errors
    OtherError,
}

impl Display for FrcVerificationError {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        match self {
            Self::SecretMissing => write!(f, "SecretMissing"),
            Self::SecretInvalid => write!(f, "SecretInvalid"),
            Self::SolutionMissing => write!(f, "SolutionMissing"),
            Self::BadRequest => write!(f, "BadRequest"),
            Self::SolutionInvalid => write!(f, "SolutionInvalid"),
            Self::SolutionTimeoutOrDuplicate => {
                write!(f, "SolutionTimeoutOrDuplicate")
            }
            Self::OtherError => write!(f, "OtherError"),
        }
    }
}

#[derive(serde::Deserialize)]
pub struct FrcVerificationResponse {
    pub success: bool,
    pub errors: Option<Vec<FrcVerificationError>>,
}

impl Display for FrcVerificationResponse {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        let mut errors = String::new();
        if let Some(errs) = &self.errors {
            for err in errs {
                errors.push_str(&format!("{err}, "));
            }
        }
        write!(
            f,
            "FrcVerificationResponse {{ success: {}, errors: {} }}",
            self.success, errors
        )
    }
}

pub struct FrcVerificationErrorList {
    pub errors: Vec<FrcVerificationError>,
}

impl Display for FrcVerificationErrorList {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        let mut errors = String::new();
        for err in &self.errors {
            errors.push_str(&format!("{err}, "));
        }
        write!(f, "FrcVerificationErrorList {{ errors: {errors} }}")
    }
}

impl From<Vec<FrcVerificationError>> for FrcVerificationErrorList {
    fn from(errors: Vec<FrcVerificationError>) -> Self {
        Self { errors }
    }
}

pub fn validate_frc(frc_captcha_solution: &str) -> bool {
    if frc_captcha_solution == ".UNFINISHED"
        || frc_captcha_solution == ".ERROR"
        || frc_captcha_solution == ".UNSTARTED"
        || frc_captcha_solution == ".FETCHING"
    {
        return false;
    }
    return true;
}

/// POST request to <https://api.friendlycaptcha.com/api/v1/siteverify>
/// with the following parameters in the body:
/// - solution: the ``frc_captcha_solution``
/// - sitekey: the sitekey
/// - secret: the secret (api key)
pub async fn verify_frc_solution(
    frc_captcha_solution: &str,
    secret_store: &SecretStore,
) -> Result<(), FrcVerificationErrorList> {
    let frc_sitekey = secret_store.get("FRC_SITEKEY").unwrap_or_else(|| {
        tracing::error!("Error getting FRC_SITEKEY from secret store");
        String::new()
    });
    let frc_apikey = secret_store.get("FRC_APIKEY").unwrap_or_else(|| {
        tracing::error!("Error getting FRC_APIKEY from secret store");
        String::new()
    });

    let client = reqwest::Client::new();
    let mut map = HashMap::new();
    map.insert("solution", frc_captcha_solution);
    map.insert("sitekey", &frc_sitekey);
    map.insert("secret", &frc_apikey);

    // resp is a json of type FrcVerificationResponse
    let resp = client
        .post("https://api.friendlycaptcha.com/api/v1/siteverify")
        .json(&map)
        .send()
        .await
        .map_err(|_| vec![FrcVerificationError::OtherError])?;

    let status_code = resp.status();
    let resp: FrcVerificationResponse = resp
        .json()
        .await
        .map_err(|_| vec![FrcVerificationError::OtherError])?;

    if status_code != 200 {
        tracing::warn!(
            "FRC verification failed with status code {}, but request was allowed to proceed",
            status_code
        );
        return Ok(());
    } else if status_code == 200 && resp.success {
        return Ok(());
    }
    return Err(resp
        .errors
        .unwrap_or_else(|| {
            tracing::error!("FRC verification failed with status code {}", status_code);
            vec![FrcVerificationError::OtherError]
        })
        .into());
}
