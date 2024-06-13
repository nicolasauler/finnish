{
  description = "Finnish devShell";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    rust-overlay.url = "github:oxalica/rust-overlay";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = {
    nixpkgs,
    rust-overlay,
    flake-utils,
    ...
  }:
    flake-utils.lib.eachDefaultSystem (
      system: let
        # shuttle = pkgs.rustPlatform.buildRustPackage rec {
        #   pname = "shuttle";
        #   version = "v0.45.0";
        #   src = pkgs.fetchFromGitHub {
        #     owner = "shuttle-hq";
        #     repo = pname;
        #     rev = version;
        #     hash = "sha256-bjGyLfeo11Y55WqPwcUxnNkexozlxC61/rSa65gBGZ4=";
        #   };
        #   doCheck = false;
        #   cargoLock = {
        #     lockFile = "${src}/Cargo.lock";
        #     outputHashes = {
        #       "async-posthog-0.2.3" = "sha256-V0f9+UKZkqh80p7UjINEbAW9y8cKBmJTRjAJZV3no1M=";
        #       "hyper-reverse-proxy-0.5.2-dev" = "sha256-R1ZXGgWvwHWRHmKX823QLqM6ZJW+tzWUXigKkAyI5OE=";
        #       "permit-client-rs-2.0.0" = "sha256-MxsgqPbvWDYDOb3oGuD1I6d3cdcGAhfoWsI7cwfhrb4=";
        #       "permit-pdp-client-rs-0.2.0" = "sha256-F9wSvo3WzoRXjZb+We0Bvcwx3rRSG1QxXPsvrmtIN38=";
        #     };
        #   };
        #   # cargoHash = "";
        # };
        rust = pkgs.rust-bin.selectLatestNightlyWith (toolchain: toolchain.default);
        # rust = pkgs.rust-bin.beta.latest.default;
        overlays = [(import rust-overlay)];
        pkgs = import nixpkgs {
          inherit system overlays;
        };
      in
        with pkgs; {
          devShells.default = mkShell {
            buildInputs = [
              bacon
              cargo-nextest
              cargo-shuttle
              jq
              nixpkgs-fmt
              openssl
              pkg-config
              postgresql
              python3
              rust
              sqlx-cli
            ];

            shellHook = ''
              # export DATABASE_URL=postgres://postgres:postgres@localhost:17144/finnish
              # export DATABASE_URL=postgres://postgres:postgres@localhost:21372/finnish
            '';
          };
        }
    );
}
