use crate::{
    data_structs::{Months, MonthsIter},
    schema::{ExpenseCategory, ExpenseCategoryIter},
    util::{add_csp_to_response, generate_otp_token},
};

use askama_axum::{IntoResponse, Template};
use axum::{body::Body, http::Response};
use chrono::{Datelike, Month, NaiveDate, Utc};
use strum::IntoEnumIterator;
use uuid::Uuid;

#[derive(Template)]
#[template(path = "expenses.html")]
/// The askama template for the expenses page.
pub struct ExpensesTemplate {
    /// The current month to be displayed in English in the dropdown.
    pub current_month: Months,
    /// The expense types to be displayed in the dropdown.
    pub expense_categories: ExpenseCategoryIter,
    /// The months to be displayed in the dropdown.
    pub months: MonthsIter,
    /// The username of the logged in user.
    pub username: String,
    /// CSP nonce
    pub nonce: String,
}

impl Default for ExpensesTemplate {
    fn default() -> Self {
        return Self {
            current_month: {
                Months::from_chrono_month(
                    Month::try_from(u8::try_from(Utc::now().month()).unwrap_or_else(|_| {
                        tracing::error!(
                            "Failed to convert chrono month to u8, defaulting to 1(January)"
                        );
                        return 1;
                    }))
                    .unwrap_or(Month::January),
                )
            },
            expense_categories: ExpenseCategory::iter(),
            months: Months::iter(),
            username: String::new(),
            nonce: String::new(),
        };
    }
}

impl ExpensesTemplate {
    /// Adds CSP nonce to the template
    /// And returns the response with the CSP header set.
    pub fn into_response_with_nonce(self) -> Response<Body> {
        let nonce = generate_otp_token();
        let nonce_str = format!("'nonce-{nonce}'");

        let mut response = Self {
            current_month: self.current_month,
            expense_categories: self.expense_categories,
            months: self.months,
            username: self.username,
            nonce,
        }
        .into_response();

        add_csp_to_response(&mut response, &nonce_str);
        return response;
    }
}

#[derive(Template, Default)]
#[template(path = "change_password.html")]
/// The askama template for the change password page.
pub struct ChangePasswordTemplate {
    /// The url to post to change the user password.
    pub change_password: String,
    /// The url to validate that the `new_password` matches with its confirmation.
    pub passwords_match: String,
    /// The url to validate password strength with zxcvbn.
    pub password_strength: String,
    /// CSP nonce.
    pub nonce: String,
    /// If forgot password or just changing password.
    pub forgot_password: bool,
}

impl ChangePasswordTemplate {
    /// Adds CSP nonce to the template
    /// And returns the response with the CSP header set.
    pub fn into_response_with_nonce(self) -> Response<Body> {
        let nonce = generate_otp_token();
        let nonce_str = format!("'nonce-{nonce}'");

        let mut response = Self {
            change_password: self.change_password,
            passwords_match: self.passwords_match,
            password_strength: self.password_strength,
            forgot_password: self.forgot_password,
            nonce,
        }
        .into_response();

        add_csp_to_response(&mut response, &nonce_str);
        return response;
    }
}

#[derive(Template, Default)]
#[template(path = "signin.html")]
/// The askama template for the signup page.
pub struct SignInTemplate {
    /// Message to be displayed to the user.
    pub message: String,
    /// friendly captcha secret key for getting the captcha problem
    pub frc_sitekey: String,
    /// CSP nonce
    pub nonce: String,
}

impl SignInTemplate {
    /// Adds CSP nonce to the template
    /// And returns the response with the CSP header set.
    pub fn into_response_with_nonce(self) -> Response<Body> {
        let nonce = generate_otp_token();
        let nonce_str = format!("'nonce-{nonce}'");

        let mut response = Self {
            message: self.message,
            frc_sitekey: self.frc_sitekey,
            nonce,
        }
        .into_response();

        add_csp_to_response(&mut response, &nonce_str);
        return response;
    }
}

#[derive(Template, Default)]
#[template(path = "signup.html")]
/// The askama template for the signup page.
pub struct SignUpTemplate {
    /// Friendly captcha secret key for getting the captcha problem
    pub frc_sitekey: String,
    /// CSP nonce
    pub nonce: String,
}

impl SignUpTemplate {
    /// Adds CSP nonce to the template
    /// And returns the response with the CSP header set.
    pub fn into_response_with_nonce(self) -> Response<Body> {
        let nonce = generate_otp_token();
        let nonce_str = format!("'nonce-{nonce}'");

        let mut response = Self {
            frc_sitekey: self.frc_sitekey,
            nonce,
        }
        .into_response();

        add_csp_to_response(&mut response, &nonce_str);
        return response;
    }
}

#[derive(Template, Default)]
#[template(path = "verify.html")]
/// The askama template for the verification page.
pub struct VerificationTemplate {
    /// The url of the login page.
    pub login_url: String,
    /// The message to be displayed to the user.
    /// This is usually the error message, like user already verified, not found or invalid token.
    pub message: String,
    /// The url to GET a new verification token and send it to the user.
    pub resend_url: String,
    /// Whether to print the resend link or not, is only printed when there is an error.
    pub should_print_resend_link: bool,
    /// CSP nonce
    pub nonce: String,
    /// Friendly captcha secret key for getting the captcha problem
    pub frc_sitekey: String,
}

#[derive(Template, Default)]
#[template(path = "mfa.html")]
/// The askama template for the MFA page.
pub struct MfaTemplate {
    /// The url to POST the MFA code to.
    /// If valid, the user will be logged in.
    pub mfa_url: String,
    /// QR code to be displayed to the user.
    /// It's a base64 encoded PNG.
    pub qr_code: String,
    /// The url of the qr code.
    /// So that users in mobile can click it, since scanning is not an option.
    pub otp_auth_url: String,
    /// CSP nonce
    pub nonce: String,
}

impl MfaTemplate {
    /// Adds CSP nonce to the template
    /// And returns the response with the CSP header set.
    pub fn into_response_with_nonce(self) -> Response<Body> {
        let nonce = generate_otp_token();
        let nonce_str = format!("'nonce-{nonce}'");

        let mut response = Self {
            mfa_url: self.mfa_url,
            qr_code: self.qr_code,
            otp_auth_url: self.otp_auth_url,
            nonce,
        }
        .into_response();

        add_csp_to_response(&mut response, &nonce_str);
        return response;
    }
}

#[derive(Template, Default)]
#[template(path = "confirmation.html")]
/// The askama template for the email confirmation page.
pub struct ConfirmationTemplate {
    /// The url to GET a new confirmation code and send it to the user.
    pub resend_url: String,
    /// The url of the login page.
    pub login_url: String,
    /// friendly captcha secret key for getting the captcha problem
    pub frc_sitekey: String,
    /// CSP nonce
    pub nonce: String,
}

impl ConfirmationTemplate {
    /// Adds CSP nonce to the template
    /// And returns the response with the CSP header set.
    pub fn into_response_with_nonce(self) -> Response<Body> {
        let nonce = generate_otp_token();
        let nonce_str = format!("'nonce-{nonce}'");

        let mut response = Self {
            resend_url: self.resend_url,
            login_url: self.login_url,
            frc_sitekey: self.frc_sitekey,
            nonce,
        }
        .into_response();

        add_csp_to_response(&mut response, &nonce_str);
        return response;
    }
}

#[derive(Template, Default)]
#[template(path = "forgot_password.html")]
/// The askama template for the forgot password page.
pub struct ForgotPasswordTemplate {
    /// The url to POST the email to.
    /// If the email is found, a reset token will be sent to the user.
    pub forgot_url: String,
    /// The url of the login page.
    pub login_url: String,
    /// friendly captcha secret key for getting the captcha problem
    pub frc_sitekey: String,
    /// CSP nonce
    pub nonce: String,
}

impl ForgotPasswordTemplate {
    /// Adds CSP nonce to the template
    /// And returns the response with the CSP header set.
    pub fn into_response_with_nonce(self) -> Response<Body> {
        let nonce = generate_otp_token();
        let nonce_str = format!("'nonce-{nonce}'");

        let mut response = Self {
            forgot_url: self.forgot_url,
            login_url: self.login_url,
            frc_sitekey: self.frc_sitekey,
            nonce,
        }
        .into_response();

        add_csp_to_response(&mut response, &nonce_str);
        return response;
    }
}

#[derive(Template)]
#[template(path = "editable_expense_row.html")]
/// The askama template for a row in the expenses table in editable mode.
pub struct EditableExpenseRowTemplate {
    /// Whether the expense is essential or not, if it is, return it checked.
    pub is_essential: &'static str,
    /// The uuid of the expense.
    pub uuid: Uuid,
    /// The current category of the expense.
    pub current_category: ExpenseCategory,
    /// The expense categories to be displayed in the dropdown.
    pub expense_categories: ExpenseCategoryIter,
    /// The price of the expense.
    pub price: f32,
    /// The description of the expense.
    pub description: String,
    /// The date of the expense.
    pub date: NaiveDate,
}

impl Default for EditableExpenseRowTemplate {
    fn default() -> Self {
        return Self {
            is_essential: "false",
            uuid: Uuid::default(),
            current_category: ExpenseCategory::default(),
            expense_categories: ExpenseCategory::iter(),
            price: 0.0,
            description: String::new(),
            date: NaiveDate::default(),
        };
    }
}

#[derive(Template, Default)]
#[template(path = "expense_row.html")]
/// The askama template for a row in the expenses table.
pub struct ExpenseRowTemplate {
    /// The date of the expense.
    pub date: NaiveDate,
    /// The description of the expense.
    pub description: String,
    /// The price of the expense.
    pub price: f32,
    /// The category of the expense.
    pub category: ExpenseCategory,
    /// Whether the expense is essential or not.
    pub is_essential: bool,
    /// The uuid of the expense.
    pub uuid: Uuid,
}

#[derive(Template, Default)]
#[template(path = "pluggy_connect_widget.html")]
pub struct PluggyConnectWidgetTemplate {
    pub access_token: String,
}
