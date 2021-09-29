import { FIGURE_DASHBOARD_URL } from '../urls';

export const bridgeBTC = {
  active: true,
  icon: 'bridgeBtc',
  requires: ['wallet', 'passport'],
  complete: ['isKYC'],
  title: "Access BTC Bridge",
  content: 'Transfer BTC from your Bitcoin wallet to your Provenance wallet.  Then use the resulting Provenance SATBTC (BTC) digital currency from your Provenance wallet to buy, sell, or trade on the Provenance ecosystem.',
  url: `${FIGURE_DASHBOARD_URL}`,
};
