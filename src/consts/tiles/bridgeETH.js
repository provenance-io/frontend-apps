import { FIGURE_DASHBOARD_URL } from '../urls';

export const bridgeETH = {
  active: false,
  icon: 'bridgeEth',
  requires: ['wallet', 'passport'],
  complete: ['isKYC'],
  title: 'Access ETH Bridge',
  content: 'Transfer ETH from your Ethereum wallet to your Provenance wallet.  Then use the resulting Provenance GWEI (ETH) digital currency from your Provenance wallet to buy, sell, or trade on the Provenance ecosystem.',
  url: `${FIGURE_DASHBOARD_URL}`,
};
