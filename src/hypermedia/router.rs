use crate::{
    auth::{AuthSession, LoginCredentials},
    schema::{GetExpense, UpdateExpense},
    AppState, ExpensesTemplate, SignInTemplate,
};
use std::sync::Arc;

use askama_axum::IntoResponse;
use axum::{
    extract::{Path, Query, State},
    http::StatusCode,
    routing::get,
    Json, Router,
};

pub fn hypermedia_router() -> Router<Arc<AppState>> {
    Router::new()
        .route("/", get(expenses_index))
        .route("/expenses", get(get_expenses).post(insert_expense))
        .route("/expenses/:id/edit", get(edit_expense))
        .route("/expenses/:id", get(get_expense).put(update_expense))
        .route("/expenses/plots", get(expenses_plots))
}

pub mod auth {
    use super::*;
    pub fn auth_router() -> Router<Arc<AppState>> {
        Router::new()
            .route("/auth", get(auth_index))
            .route("/signin", get(signin_tab).post(signin))
            .route("/signup", get(signup_tab)) //.post(signup))
    }
}

pub async fn auth_index() -> impl IntoResponse {
    SignInTemplate {}
}

pub async fn signin_tab() -> impl IntoResponse {
    super::service::signin_tab().await
}

pub async fn signin(
    auth_session: AuthSession,
    Json(signin_input): Json<LoginCredentials>,
) -> impl IntoResponse {
    super::service::signin(Json(signin_input), auth_session).await
}

pub async fn signup_tab() -> impl IntoResponse {
    super::service::signup_tab().await
}

//pub async fn signup(
//    State(shared_state): State<Arc<AppState>>,
//    Json(signup_input): Json<LoginCredentials>,
//) -> impl IntoResponse {
//    super::service::signup(&shared_state.pool, Json(signup_input)).await
//}

pub async fn expenses_index(auth_session: AuthSession) -> impl IntoResponse {
    match auth_session.user {
        Some(user) => ExpensesTemplate {
            username: &user.username,
            ..Default::default()
        }
        .into_response(),
        None => StatusCode::UNAUTHORIZED.into_response(),
    }
}

pub async fn get_expenses(
    State(shared_state): State<Arc<AppState>>,
    Query(get_expense_input): Query<GetExpense>,
) -> impl IntoResponse {
    super::service::get_expenses(&shared_state.pool, Query(get_expense_input)).await
}

pub async fn edit_expense(
    Path(id): Path<i32>,
    State(shared_state): State<Arc<AppState>>,
) -> impl IntoResponse {
    super::service::edit_expense(&shared_state.pool, Path(id)).await
}

pub async fn get_expense(
    Path(id): Path<i32>,
    State(shared_state): State<Arc<AppState>>,
) -> impl IntoResponse {
    super::service::get_expense(&shared_state.pool, Path(id)).await
}

pub async fn update_expense(
    Path(id): Path<i32>,
    State(shared_state): State<Arc<AppState>>,
    Json(update_expense): Json<UpdateExpense>,
) -> impl IntoResponse {
    super::service::update_expense(&shared_state.pool, Path(id), Json(update_expense)).await
}

pub async fn insert_expense(
    State(shared_state): State<Arc<AppState>>,
    Json(create_expense): Json<UpdateExpense>,
) -> impl IntoResponse {
    super::service::insert_expense(&shared_state.pool, Json(create_expense)).await
}

pub async fn expenses_plots(
    State(shared_state): State<Arc<AppState>>,
    Query(get_expense_input): Query<GetExpense>,
) -> impl IntoResponse {
    super::service::expenses_plots(&shared_state.pool, Query(get_expense_input)).await
}
