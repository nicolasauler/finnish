use reqwest::Url;
use svix::api::{ApplicationIn, ApplicationOut, EndpointIn, Svix};

const ENDPOINT_URL_PREFIX: &str = "https://finnish.shuttleapp.rs/webhooks";

pub async fn create_user_app(svix_api_key: String, user_id: i32) -> anyhow::Result<ApplicationOut> {
    let svix = Svix::new(svix_api_key, None);
    let app = svix
        .application()
        .create(
            ApplicationIn {
                name: format!("finnish-{user_id}"),
                ..ApplicationIn::default()
            },
            None,
        )
        .await?;

    Ok(app)
}

pub async fn create_user_endpoint(
    svix_api_key: String,
    svix_user_app_id: String,
) -> anyhow::Result<String> {
    let svix = Svix::new(svix_api_key, None);

    let base = Url::parse(ENDPOINT_URL_PREFIX)?;
    let uuid = uuid::Uuid::new_v4().to_string();
    let joined = base.join(&uuid)?;

    let endpoint = svix
        .endpoint()
        .create(
            svix_user_app_id,
            EndpointIn {
                url: joined.to_string(),
                description: Some("Pluggy connect endpoint".to_string()),
                ..EndpointIn::default()
            },
            None,
        )
        .await?;

    Ok(endpoint.url)
}
