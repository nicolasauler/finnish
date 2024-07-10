use crate::client::pluggy::auth::ApiKey;
use anyhow::bail;
use axum::http::{HeaderMap, HeaderName, HeaderValue};
use chrono::NaiveDate;
use reqwest::StatusCode;
use serde::{Deserialize, Serialize};
use uuid::Uuid;

#[derive(Debug, Deserialize, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct ListAccountsResponse {
    total: i16,
    page: i16,
    total_pages: i16,
    /// List of retrieved accounts
    results: Vec<Account>,
}

#[derive(Debug, Deserialize, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct Account {
    id: Uuid,
    #[serde(rename = "type")]
    #[allow(clippy::struct_field_names)]
    account_type: AccountType,
    subtype: AccountSubType,
    /// External identifier of the account: agencia/conta
    number: String,
    name: String,
    marketing_name: String,
    balance: f32,
    item_id: Uuid,
    /// Tax Id of owner (cpf)
    tax_number: Option<String>,
    owner: Option<String>,
    currency_code: String,
    bank_data: Option<BankData>,
    credit_data: Option<CreditData>,
}

#[derive(Debug, Deserialize, Serialize)]
#[serde(rename_all = "camelCase")]
struct BankData {
    /// Complete number of the bank account (agency code / account number)
    transfer_number: String,
    /// Balance including not posted transactions
    closing_balance: f32,
    /// Balance automatically invested in the account by the FI
    automatically_invested_balance: f32,
}

#[derive(Debug, Deserialize, Serialize)]
#[serde(rename_all = "camelCase")]
struct CreditData {
    level: CreditLevel,
    brand: CreditBrand,
    balance_close_date: NaiveDate,
    balance_due_date: NaiveDate,
    available_credit_limit: i32,
    /// Balance in usd
    balance_foreign_currency: Option<i32>,
    minimum_payment: f32,
    credit_limit: i32,
    status: CreditStatus,
    holder_type: CreditHolderType,
}

#[derive(Debug, Deserialize, Serialize)]
#[serde(rename_all = "SCREAMING_SNAKE_CASE")]
enum CreditHolderType {
    Main,
    Additional,
}

#[derive(Debug, Deserialize, Serialize)]
#[serde(rename_all = "SCREAMING_SNAKE_CASE")]
enum CreditStatus {
    Active,
    Blocked,
    Cancelled,
}

#[derive(Debug, Deserialize, Serialize)]
#[serde(rename_all = "SCREAMING_SNAKE_CASE")]
enum CreditLevel {
    Black,
    Signature,
}

#[derive(Debug, Deserialize, Serialize)]
#[serde(rename_all = "SCREAMING_SNAKE_CASE")]
enum CreditBrand {
    Visa,
    Mastercard,
    Elo,
}

#[derive(Debug, Deserialize, Serialize)]
#[serde(rename_all = "SCREAMING_SNAKE_CASE")]
enum AccountType {
    Bank,
    Credit,
}

#[derive(Debug, Deserialize, Serialize)]
#[serde(rename_all = "SCREAMING_SNAKE_CASE")]
enum AccountSubType {
    SavingsAccount,
    CheckingAccount,
    CreditCard,
}

pub async fn list_accounts(
    api_key: &ApiKey,
    item_id: &str,
) -> anyhow::Result<ListAccountsResponse> {
    let mut headers = HeaderMap::new();
    let api_key_hdr_value = HeaderValue::from_str(&api_key.api_key)?;
    headers.insert(HeaderName::from_static("x-api-key"), api_key_hdr_value);

    let client = reqwest::Client::new();
    let resp = client
        .get("https://api.pluggy.ai/accounts")
        .query(&[("itemId", item_id)])
        .headers(headers)
        .send()
        .await?;

    if let StatusCode::OK = resp.status() {
        Ok(resp.json().await?)
    } else {
        bail!("Could not recover accounts for the item provided")
    }
}

#[cfg(test)]
mod tests {
    use super::ListAccountsResponse;

    #[test]
    fn test_deserialize() {
        let data = r#"
{
  "total": 2,
  "totalPages": 1,
  "page": 1,
  "results": [
    {
      "id": "3a3959f4-a09d-4232-b97c-919782fe0f7e",
      "type": "BANK",
      "subtype": "CHECKING_ACCOUNT",
      "name": "Conta Corrente",
      "balance": 93629601.19,
      "currencyCode": "BRL",
      "itemId": "dc029997-3de2-4aa0-abe4-7c11677d980a",
      "number": "0001/12345-0",
      "createdAt": "2024-07-09T17:06:59.457Z",
      "updatedAt": "2024-07-09T17:06:59.457Z",
      "marketingName": "GOLD Conta Corrente",
      "taxNumber": "416.799.495-00",
      "owner": "John Doe",
      "bankData": {
        "transferNumber": "123/0001/12345-0",
        "closingBalance": 93629601.1851507,
        "automaticallyInvestedBalance": 9362960.11851507,
        "overdraftContractedLimit": null,
        "overdraftUsedLimit": null,
        "unarrangedOverdraftAmount": null
      },
      "creditData": null
    },
    {
      "id": "c10bf4e0-ffa7-4886-a021-c03d571a34e7",
      "type": "CREDIT",
      "subtype": "CREDIT_CARD",
      "name": "Mastercard Black",
      "balance": 3971642.5,
      "currencyCode": "BRL",
      "itemId": "dc029997-3de2-4aa0-abe4-7c11677d980a",
      "number": "9437",
      "createdAt": "2024-07-09T17:06:59.579Z",
      "updatedAt": "2024-07-09T17:06:59.579Z",
      "marketingName": "PLUGGY UNICLASS MASTERCARD BLACK",
      "taxNumber": null,
      "owner": null,
      "bankData": null,
      "creditData": {
        "level": "BLACK",
        "brand": "MASTERCARD",
        "balanceCloseDate": "2024-07-09",
        "balanceDueDate": "2024-07-14",
        "availableCreditLimit": 300000,
        "balanceForeignCurrency": null,
        "minimumPayment": 794328.49903322,
        "creditLimit": 300000,
        "isLimitFlexible": false,
        "holderType": "MAIN",
        "status": "ACTIVE"
      }
    }
  ]
}
        "#;

        let accounts: ListAccountsResponse = serde_json::from_str(data).unwrap();
        assert_eq!(accounts.results.len(), 2);
    }
}
