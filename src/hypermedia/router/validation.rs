use crate::{
    hypermedia::service::validation::{EmailInput, PasswordInput, PasswordsInput, UsernameInput},
    AppState,
};
use std::sync::Arc;

use askama_axum::IntoResponse;
use axum::{
    extract::{Query, State},
    routing::get,
    Router,
};

// VALIDATION
pub fn router() -> Router<Arc<AppState>> {
    Router::new()
        .route("/validate/email", get(validate_email))
        .route("/validate/username", get(validate_username))
        .route("/validate/passwords", get(validate_passwords))
        .route("/validate/new-passwords", get(validate_new_passwords))
        .route("/validate/password-strength", get(validate_password))
}

async fn validate_email(
    Query(input_email): Query<EmailInput>,
    State(shared_state): State<Arc<AppState>>,
) -> impl IntoResponse {
    crate::hypermedia::service::validation::validate_email(&shared_state.pool, input_email).await
}

async fn validate_username(
    Query(input_username): Query<UsernameInput>,
    State(shared_state): State<Arc<AppState>>,
) -> impl IntoResponse {
    crate::hypermedia::service::validation::validate_username(&shared_state.pool, input_username)
        .await
}

async fn validate_passwords(Query(input_passwords): Query<PasswordsInput>) -> impl IntoResponse {
    crate::hypermedia::service::validation::validate_passwords(input_passwords).await
}

async fn validate_new_passwords(
    Query(input_passwords): Query<PasswordsInput>,
) -> impl IntoResponse {
    crate::hypermedia::service::validation::validate_new_passwords(input_passwords).await
}

async fn validate_password(Query(input_password): Query<PasswordInput>) -> impl IntoResponse {
    crate::hypermedia::service::validation::validate_password(input_password).await
}

async fn validate_new_password(Query(input_password): Query<PasswordInput>) -> impl IntoResponse {
    crate::hypermedia::service::validation::validate_new_password(input_password).await
}
