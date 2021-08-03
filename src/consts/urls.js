// Use the override if it exists, if it doesn't get the value from the build
const reactAppEnv = process.env.REACT_APP_ENV;
// Determine current environment
const isProd = reactAppEnv === 'production';

// -- Provenance.io Website
export const PROVENANCE_WEBSITE_URL =
  isProd ? process.env.REACT_APP_PROD_PROVENANCE_WEBSITE_URL : process.env.REACT_APP_TEST_PROVENANCE_WEBSITE_URL;

// -- Wallet
export const FIGURE_WALLET_URL = isProd ? process.env.REACT_APP_PROD_FIGURE_WALLET_URL : process.env.REACT_APP_TEST_FIGURE_WALLET_URL;
export const PROVENANCE_WALLET_URL = isProd
  ? process.env.REACT_APP_PROD_PROVENANCE_WALLET_URL
  : process.env.REACT_APP_TEST_PROVENANCE_WALLET_URL;

// -- Provenance Bridge
export const PROVENANCE_BRIDGE_URL = `https://apps${isProd ? '' : '.test'}.provenance.io/bridge`;
;
// -------- Base Bridge URL
const BRIDGE_API_URL =
  isProd ? process.env.REACT_APP_PROD_BRIDGE_HOSTNAME : process.env.REACT_APP_TEST_BRIDGE_HOSTNAME;
;
// -------- Base Bridge URL
export const BRIDGE_WALLET_KYC_URL = `${BRIDGE_API_URL}/pb/name/attribute/passport/pb`;
