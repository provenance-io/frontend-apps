import { FIGURE_DASHBOARD_URL, PROVENANCE_WALLET_INFO_URL } from '../urls';

export const transferHash = {
  active: true,
  icon: 'tokenAcross.svg',
  requires: ['wallet'],
  title: 'Transfer Hash',
  content: 'Use your Figure account and your connected Provenance or Figure wallet to transfer Hash to a wallet address of your choosing.',
  url: FIGURE_DASHBOARD_URL,
  help: PROVENANCE_WALLET_INFO_URL,
};
