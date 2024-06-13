<h1 align="center">
    Finnish
</h1>

<p align="center">
    Your Financial Manager of the future
</p>

<div align="center">
    <a href="https://dl.circleci.com/status-badge/redirect/gh/nicolasauler/finnish/tree/main">
        <img src="https://dl.circleci.com/status-badge/img/gh/nicolasauler/finnish/tree/main.svg?style=shield" />
    </a>
</div>

## 🏞️ Overview

Finnish is your finn-man (financial manager) for the 21st century.
Gone are the days of using insecure, laggy and undeveloped pieces of software.

The purpose of Finnish is to use the banking institution's public API's, as well as the Brazilian open finance API
to securely and automatically retrieve your expenses, savings, and income information from all of your banks, centralizing
your financial information and helping you better organize your life.

This way, you're on top of your financials and can make better decisions of how to manage your hard-earned money.

Sign up in: [finnish](https://finnish.shuttleapp.rs)

:warning: Finnish is still in beta and will have a 0.2 launch soon:

## 🦺 Security and 💻 Software

Finnish is written in Rust, with Axum + HTMX,
and uses `#![forbid(unsafe_code)]` to ensure everything is implemented in 100% safe Rust.

Current security status:

- [x] Basic stuff: redacted password in inputs, completion from browser
- [x] Password strength validation and enforcement, encryption with Argon2
- [x] Expiring sessions
- [x] Email confirmation
- [x] Secure Multi-Factor Authentication (no SMS or email)
- [x] Captcha and Rate limiting
- [x] HTTP sec headers
- [x] CSP
- [ ] MFA sessions and management

Current financial features status:

- [x] Basic expenses managing (manual insert, editing, and removal)
- [x] Plotting of expenses in period
- [ ] Automatic retrieval of expenses from banking institutions
- [ ] Basic income managing
- [ ] Basic savings managing
- [ ] Automatic retrieval of income and savings from banking institutions

Disclosure:
Finnish was born as a software product and will continue to prioritize the experience of using a good software,
before the features of a financial product. This means that the Finnish Team will always put security and functional
updates, before adding idk, a new plot in the expenses or income page.

## ⚗️ Contributing

### Install pre-commit

```shell
curl -LO https://github.com/pre-commit/pre-commit/releases/download/v3.7.1/pre-commit-3.7.1.pyz
python pre-commit-3.7.1.pyz install
```

<!--
    "rust-analyzer.cargo.extraEnv": {
        "CARGO_PROFILE_RUST_ANALYZER_INHERITS": "dev"
    },
    "rust-analyzer.cargo.extraArgs": [
        "--profile",
        "rust-analyzer"
    ],
-->
