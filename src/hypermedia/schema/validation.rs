use std::sync::OnceLock;

use regex::Regex;
use serde::Deserialize;
use validator::{Validate, ValidationError};
use zxcvbn::{zxcvbn, Score};

pub fn username_regex() -> &'static Regex {
    static RE_USERNAME: OnceLock<Regex> = OnceLock::new();
    RE_USERNAME
        .get_or_init(|| Regex::new(r"^[a-z0-9]{3,20}$").expect("Could not compile username regex"))
}

#[derive(Deserialize, Validate, Debug)]
pub struct EmailInput {
    #[validate(email)]
    pub email: String,
}

#[derive(Deserialize, Validate)]
pub struct UsernameInput {
    #[validate(regex(path = *username_regex()))]
    pub username: String,
}

#[derive(Deserialize, Validate)]
pub struct PasswordInput {
    #[validate(custom(function = "validate_password_strength"))]
    pub password: String,
}

fn validate_password_strength(password: &str) -> Result<(), ValidationError> {
    match zxcvbn(password, &[]).score() {
        Score::Zero | Score::One | Score::Two => Err(ValidationError::new("Password is too weak")),
        Score::Three | Score::Four => Ok(()),
        _ => unreachable!(),
    }
}

#[derive(Deserialize, Validate)]
pub struct PasswordsInput {
    pub password: String,
    #[validate(must_match(other = "password"))]
    pub confirm_password: String,
}

#[derive(Deserialize, Validate)]
pub struct SignUpInput {
    #[validate(regex(path = *username_regex()))]
    pub username: String,
    #[validate(email)]
    pub email: String,
    #[validate(custom(function = "validate_password_strength"))]
    pub password: String,
    #[validate(must_match(other = "password"))]
    pub confirm_password: String,
    #[serde(rename = "frc-captcha-solution")]
    pub frc_captcha_solution: String,
}

#[derive(Deserialize, Validate)]
pub struct ChangePasswordInput {
    pub old_password: String,
    #[validate(custom(function = "validate_password_strength"))]
    pub password: String,
    #[validate(must_match(other = "password"))]
    pub confirm_password: String,
}

#[derive(Deserialize, Validate)]
pub struct ForgotPasswordInput {
    #[validate(custom(function = "validate_password_strength"))]
    pub password: String,
    #[validate(must_match(other = "password"))]
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
