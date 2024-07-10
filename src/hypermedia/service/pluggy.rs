use core::panic;

use crate::{
    auth::AuthSession,
    client::pluggy::auth::{
        create_api_key, create_connect_token, CreateApiKeyOutcome, CreateConnectTokenOutcome,
    },
    templates::PluggyConnectWidgetTemplate,
};

use askama_axum::IntoResponse;
use axum::http::StatusCode;
use shuttle_common::SecretStore;

pub async fn widget(auth_session: AuthSession, secret_store: &SecretStore) -> impl IntoResponse {
    let Some(user) = auth_session.user else {
        return (StatusCode::UNAUTHORIZED, [("HX-Redirect", "/auth/signin")]).into_response();
    };
    tracing::debug!("User logged in");

    let Ok(CreateApiKeyOutcome::Success(api_key)) = create_api_key(secret_store).await else {
        panic!("panik")
    };
    tracing::debug!("API key created: {}", api_key.api_key);
    let Ok(CreateConnectTokenOutcome::Success(connect_token)) =
        create_connect_token(&api_key, &user.email).await
    else {
        panic!("panik")
    };

    return PluggyConnectWidgetTemplate {
        access_token: connect_token.access_token,
    }
    .into_response();
}
