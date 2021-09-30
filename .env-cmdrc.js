module.exports = {
  default: {
    // App settings
    PUBLIC_URL: "/",
    SKIP_PREFLIGHT_CHECK: "true",
    // Figure/Provenance Configs
    REACT_APP_AUTHORIZATION_PREFIX: "x-",
    REACT_APP_LOCAL_UUID: "8b73804f-f50a-4a27-b842-5c9bca2b3c14",
    // Provenance Bridge
    REACT_APP_PROVENANCE_BRIDGE_URL: "http://test.figure.com/bridge",
    REACT_APP_BRIDGE_API_URL: "https://test.figure.com/btcrelayer/secured/api/v1",
    // Provenance.io
    REACT_APP_PROVENANCE_WEBSITE_URL: "https://test.provenance.io",
    // Figure Dashboard
    REACT_APP_FIGURE_DASHBOARD_URL: "https://test.figure.com/dashboard",
    // Wallet Urls
    REACT_APP_FIGURE_WALLET_URL: "https://test.figure.com/dashboard",
    REACT_APP_PROVENANCE_WALLET_URL: "https://wallet.test.provenance.io",
    REACT_APP_WALLET_PERMISSION_URL: "https://api.test.provenance.io/provenance/attribute/v1/attributes",
    // Tile URLs
    REACT_APP_ASSET_ONBOARDING_URL: "https://test.figure.tech/asset-onboarding",
    REACT_APP_DLOB_URL: "https://dlob.io",
    REACT_APP_DEPOSIT_MONEY_URL: "https://test.provenance.io/deposit-money",
    REACT_APP_HOW_TO_STAKE_URL: "https://docs.provenance.io/faq/delegator-faq#how-to-stake-your-hash",
    REACT_APP_EXPLORER_VALIDATORS_URL: "https://explorer.test.provenance.io/validators",
    REACT_APP_PROVENANCE_WALLET_INFO_URL: "https://test.provenance.io/wallet",
    REACT_APP_PASSPORT_URL: "https://test.figure.com/login/with-provenance",
    REACT_APP_PASSPORT_UPGRADE_URL: "https://test.figure.com/passport/dashboard/manager",
    REACT_APP_DIGITAL_FUND_URL: "https://test.figure.com/digital-fund-services/",
    REACT_APP_MARKETPLACE_BUYER_URL: "https://test.figure.com/marketplace/buyer",
    REACT_APP_SECONDARIES_URL: "https://test.figure.com/equity-solutions/secondaries/",
    REACT_APP_SECONDARIES_DEMO_URL: "https://test.figure.com/equity-solutions/secondaries/demo/",
  },
  staging: {
    // App settings
    REACT_APP_ENV: "staging",
  },
  production: {
    // App settings
    REACT_APP_ENV: "production",
    // Provenance Bridge
    REACT_APP_PROVENANCE_BRIDGE_URL: "http://figure.com/bridge",
    REACT_APP_BRIDGE_API_URL: "https://figure.com/btcrelayer/secured/api/v1",
    // Provenance.io
    REACT_APP_PROVENANCE_WEBSITE_URL: "https://provenance.io",
    // Figure Dashboard
    REACT_APP_FIGURE_DASHBOARD_URL: "https://figure.com/dashboard",
    // Wallet Urls
    REACT_APP_FIGURE_WALLET_URL: "https://figure.com/dashboard",
    REACT_APP_PROVENANCE_WALLET_URL: "https://wallet.provenance.io",
    REACT_APP_WALLET_PERMISSION_URL: "https://api.provenance.io/provenance/attribute/v1/attributes",
    // Tile URLs
    REACT_APP_ASSET_ONBOARDING_URL: "https://www.figure.tech/asset-onboarding",
    REACT_APP_DEPOSIT_MONEY_URL: "https://provenance.io/deposit-money",
    REACT_APP_EXPLORER_VALIDATORS_URL: "https://explorer.provenance.io/validators",
    REACT_APP_PROVENANCE_WALLET_INFO_URL: "https://provenance.io/wallet",
    REACT_APP_PASSPORT_URL: "https://www.figure.com/login/with-provenance",
    REACT_APP_PASSPORT_UPGRADE_URL: "https://www.figure.com/passport/dashboard/manager",
    REACT_APP_DIGITAL_FUND_URL: "https://www.figure.com/digital-fund-services/",
    REACT_APP_MARKETPLACE_BUYER_URL: "https://www.figure.com/marketplace/buyer",
    REACT_APP_SECONDARIES_URL: "https://www.figure.com/equity-solutions/secondaries/",
    REACT_APP_SECONDARIES_DEMO_URL: "https://www.figure.com/equity-solutions/secondaries/demo/",
  },
};
