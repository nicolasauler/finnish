use chrono::{DateTime, Utc};
use serde::{Deserialize, Serialize};
use uuid::Uuid;

#[derive(Debug, Serialize, Deserialize)]
pub struct ListTransactionsResponse {
    total: i16,
    page: i16,
    total_pages: i16,
    /// List of retrieved transactions
    results: Vec<Transaction>,
}

#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Transaction {
    id: Uuid,
    description: String,
    description_raw: Option<String>,
    currency_code: String,
    amount: f32,
    /// Transaction amount in Account's Currency.
    /// Only present if the transaction is in a different currency
    /// than the account's currency
    amount_in_account_currency: Option<f32>,
    date: DateTime<Utc>,
    /// Category of the transaction (e.g. Restaurants, Education).
    /// See the Transaction Categorization section in our guides.
    category: String,
    /// Id of the transaction category.
    /// Can be used to identify the category in the Categories endpoint
    category_id: String,
    #[serde(rename = "type")]
    #[allow(clippy::struct_field_names)]
    transaction_type: TransactionType,
    /// Balance after the transaction
    balance: f32,
    /// Institution provided code
    provider_code: String,
    status: TransactionStatus,
    account_id: Uuid,
    created_at: DateTime<Utc>,
    updated_at: DateTime<Utc>,
    payment_data: Option<PaymentData>,
    acquirer_data: Option<AcquirerData>,
    credit_card_metadata: Option<CreditCardMetadata>,
    merchant: Option<Merchant>,
}

#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
struct PaymentData {
    payer: PayerOrReceiver,
    receiver: PayerOrReceiver,
    reason: String,
    reference_number: String,
    receiver_reference_id: String,
    payment_method: PaymentMethod,
}

#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "SCREAMING_SNAKE_CASE")]
enum DocumentType {
    Cpf,
    Cnpj,
}

#[derive(Debug, Serialize, Deserialize)]
struct DocumentNumber {
    #[serde(rename = "type")]
    document_type: DocumentType,
    value: String,
}

#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
struct PayerOrReceiver {
    document_number: DocumentNumber,
    name: String,
    account_number: String,
    branch_number: String,
    routing_number: String,
    routing_number_ispb: String,
}

#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "SCREAMING_SNAKE_CASE")]
enum PaymentMethod {
    Ted,
    Doc,
    Pix,
    Tev,
}

#[derive(Debug, Serialize, Deserialize)]
struct AcquirerData {
    #[serde(rename = "type")]
    acquirer_type: AcquirerType,
}

#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "SCREAMING_SNAKE_CASE")]
enum AcquirerType {
    Sale,
    Receivable,
    Anticipation,
    Chargeback,
}

#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
struct CreditCardMetadata {
    installment_number: i32,
    total_installments: i32,
    total_amount: i32,
    purchase_date: DateTime<Utc>,
    payee_mcc: String,
    card_number: String,
    bill_id: String,
}

#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
struct Merchant {
    name: String,
    business_name: String,
    cnpj: String,
    cnae: String,
    category: String,
}

#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "SCREAMING_SNAKE_CASE")]
enum TransactionStatus {
    Posted,
    Pending,
}

#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "SCREAMING_SNAKE_CASE")]
enum TransactionType {
    Debit,
    Credit,
}

//pub async fn list_transactions(
//    _api_key: &str,
//    _account_id: &str,
//) -> anyhow::Result<ListTransactionsResponse> {
//    todo!()
//}
