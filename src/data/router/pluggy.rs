use std::sync::Arc;

use crate::client::pluggy::auth::ApiKey;
use axum::{response::Json, routing::post, Router};
use serde::{Deserialize, Serialize};
// use uuid::Uuid;

use crate::{auth::AuthSession, client::pluggy::account::ListAccountsResponse, AppState};

pub fn router() -> Router<Arc<AppState>> {
    Router::new()
        .route("/api/accounts", post(list_accounts))
        .route("/api/transactions", post(list_transactions))
}

#[derive(Deserialize, Serialize)]
struct ListAccountsRequest {
    api_key: ApiKey,
    item_id: String,
}

async fn list_accounts(
    auth_session: AuthSession,
    Json(list_accounts_request): Json<ListAccountsRequest>,
) -> Json<ListAccountsResponse> {
    let Some(_) = auth_session.user else {
        panic!("user not logged in")
    };
    tracing::debug!("User logged in");

    let accounts = crate::client::pluggy::account::list_accounts(
        &list_accounts_request.api_key,
        &list_accounts_request.item_id,
    )
    .await
    .unwrap();

    Json(accounts)
}

async fn list_transactions() {}
