use crate::{
    auth::AuthSession,
    schema::{GetExpense, UpdateExpense},
    templates::ExpensesTemplate,
    AppState,
};
use std::sync::Arc;

use askama_axum::IntoResponse;
use axum::{
    extract::{Path, Query, State},
    http::StatusCode,
    routing::get,
    Form, Router,
};
use uuid::Uuid;

pub fn router() -> Router<Arc<AppState>> {
    Router::new()
        .route("/", get(expenses_index))
        .route("/expenses", get(get_expenses).post(insert_expense))
        .route("/expenses/:uuid/edit", get(edit_expense))
        .route("/expenses/:uuid/delete-modal", get(remove_expense_modal))
        .route(
            "/expenses/:uuid",
            get(get_expense).put(update_expense).delete(delete_expense),
        )
        .route("/expenses/plots", get(expenses_plots))
        .route("/expenses/pluggy-widget", get(pluggy_widget))
}

async fn expenses_index(auth_session: AuthSession) -> impl IntoResponse {
    match auth_session.user {
        Some(user) => ExpensesTemplate {
            username: user.username,
            ..Default::default()
        }
        .into_response_with_nonce(),
        None => StatusCode::UNAUTHORIZED.into_response(),
    }
}

async fn get_expenses(
    auth_session: AuthSession,
    State(shared_state): State<Arc<AppState>>,
    Query(get_expense_input): Query<GetExpense>,
) -> impl IntoResponse {
    crate::hypermedia::service::expenses::get_expenses(
        auth_session,
        &shared_state.pool,
        get_expense_input,
    )
    .await
}

async fn edit_expense(
    auth_session: AuthSession,
    Path(uuid): Path<Uuid>,
    State(shared_state): State<Arc<AppState>>,
) -> impl IntoResponse {
    crate::hypermedia::service::expenses::edit_expense(auth_session, &shared_state.pool, uuid).await
}

async fn get_expense(
    auth_session: AuthSession,
    Path(uuid): Path<Uuid>,
    State(shared_state): State<Arc<AppState>>,
) -> impl IntoResponse {
    crate::hypermedia::service::expenses::get_expense(auth_session, &shared_state.pool, uuid).await
}

async fn update_expense(
    auth_session: AuthSession,
    Path(uuid): Path<Uuid>,
    State(shared_state): State<Arc<AppState>>,
    Form(update_expense): Form<UpdateExpense>,
) -> impl IntoResponse {
    crate::hypermedia::service::expenses::update_expense(
        auth_session,
        &shared_state.pool,
        uuid,
        update_expense,
    )
    .await
}

async fn delete_expense(
    auth_session: AuthSession,
    Path(uuid): Path<Uuid>,
    State(shared_state): State<Arc<AppState>>,
) -> impl IntoResponse {
    crate::hypermedia::service::expenses::delete_expense(auth_session, &shared_state.pool, uuid)
        .await
}

async fn remove_expense_modal(
    auth_session: AuthSession,
    State(shared_state): State<Arc<AppState>>,
    Path(uuid): Path<Uuid>,
) -> impl IntoResponse {
    crate::hypermedia::service::expenses::remove_expense_modal(
        auth_session,
        &shared_state.pool,
        uuid,
    )
    .await
}

async fn insert_expense(
    auth_session: AuthSession,
    State(shared_state): State<Arc<AppState>>,
    Form(create_expense): Form<UpdateExpense>,
) -> impl IntoResponse {
    crate::hypermedia::service::expenses::insert_expense(
        auth_session,
        &shared_state.pool,
        create_expense,
    )
    .await
}

async fn expenses_plots(
    auth_session: AuthSession,
    State(shared_state): State<Arc<AppState>>,
    Query(get_expense_input): Query<GetExpense>,
) -> impl IntoResponse {
    crate::hypermedia::service::expenses::plot_expenses(
        auth_session,
        &shared_state.pool,
        get_expense_input,
    )
    .await
}

async fn pluggy_widget(
    auth_session: AuthSession,
    State(shared_state): State<Arc<AppState>>,
) -> impl IntoResponse {
    crate::hypermedia::service::pluggy::widget(auth_session, &shared_state.secret_store).await
}
