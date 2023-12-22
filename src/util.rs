use chrono::{Datelike, NaiveDate, Utc};

use crate::data::Months;

pub fn get_first_day_from_month(month: u32) -> NaiveDate {
    Utc::now()
        .with_day(1)
        .unwrap()
        .naive_utc()
        .date()
        .with_month(month)
        .unwrap()
}

pub fn get_first_day_from_month_or_none(month: Option<Months>) -> Option<NaiveDate> {
    match month {
        Some(month) => {
            let day = Some(get_first_day_from_month(month as u32 + 1));
            tracing::info!("first day: {:?}", day);
            day
        }
        None => None,
    }
}

pub fn get_last_day_from_month(month: u32) -> NaiveDate {
    let first_day_of_month = get_first_day_from_month(month);

    if first_day_of_month.month() == 12 {
        return first_day_of_month.with_day(31).unwrap();
    }
    first_day_of_month.with_month(month + 1).unwrap() - chrono::Duration::days(1)
}

pub fn get_last_day_from_month_or_none(month: Option<Months>) -> Option<NaiveDate> {
    match month {
        Some(month) => {
            let day = Some(get_last_day_from_month(month as u32 + 1));
            tracing::info!("last day: {:?}", day);
            day
        }
        None => None,
    }
}
