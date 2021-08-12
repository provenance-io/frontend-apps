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
  },
};
