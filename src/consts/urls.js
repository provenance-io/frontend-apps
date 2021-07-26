// Use the override if it exists, if it doesn't get the value from the build
const reactAppEnv = process.env.REACT_APP_ENV;
// Determine current environment
const isProd = reactAppEnv === 'production';

// -- Wallet
export const FIGURE_WALLET_URL = isProd ? process.env.REACT_APP_PROD_FIGURE_WALLET_URL : process.env.REACT_APP_TEST_FIGURE_WALLET_URL;
export const PROVENANCE_WALLET_URL = isProd
  ? process.env.REACT_APP_PROD_PROVENANCE_WALLET_URL
  : process.env.REACT_APP_TEST_PROVENANCE_WALLET_URL;