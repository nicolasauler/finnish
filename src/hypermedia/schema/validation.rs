use lazy_static::lazy_static;
use regex::Regex;
use serde::Deserialize;
use validator::{Validate, ValidationError};
use zxcvbn::zxcvbn;

lazy_static! {
    static ref RE_USERNAME: Regex = Regex::new(r"^[a-z0-9]{3,20}$").unwrap();
}

#[derive(Deserialize, Validate, Debug)]
pub struct EmailInput {
    #[validate(email)]
    pub email: String,
}

#[derive(Deserialize, Validate)]
pub struct UsernameInput {
    #[validate(regex = "RE_USERNAME")]
    pub username: String,
}

#[derive(Deserialize, Validate)]
pub struct PasswordInput {
    #[validate(custom = "validate_password_strength")]
    pub password: String,
}

fn validate_password_strength(password: &str) -> Result<(), ValidationError> {
    if zxcvbn(password, &[]).unwrap().score() < 3 {
        return Err(ValidationError::new("Password is too weak"));
    }
    Ok(())
}

#[derive(Deserialize, Validate)]
pub struct PasswordsInput {
    pub password: String,
    #[validate(must_match = "password")]
    pub confirm_password: String,
}

#[derive(Deserialize, Validate)]
pub struct SignUpInput {
    #[validate(regex = "RE_USERNAME")]
    pub username: String,
    #[validate(email)]
    pub email: String,
    #[validate(custom = "validate_password_strength")]
    pub password: String,
    #[validate(must_match = "password")]
    pub confirm_password: String,
    #[serde(rename = "frc-captcha-solution")]
    pub frc_captcha_solution: String,
}

#[derive(Deserialize, Validate)]
pub struct ChangePasswordInput {
    pub old_password: String,
    #[validate(custom = "validate_password_strength")]
    pub password: String,
    #[validate(must_match = "password")]
    pub confirm_password: String,
}

#[derive(Deserialize, Validate)]
pub struct ForgotPasswordInput {
    #[validate(custom = "validate_password_strength")]
    pub password: String,
    #[validate(must_match = "password")]
    pub confirm_password: String,
}

#[derive(sqlx::FromRow)]
pub struct Exists {
    pub exists: Option<bool>,
}

#[derive(Deserialize, Validate)]
pub struct ResendEmail {
    #[validate(email)]
    pub email: String,
    #[serde(rename = "frc-captcha-solution")]
    pub frc_captcha_solution: String,
}
