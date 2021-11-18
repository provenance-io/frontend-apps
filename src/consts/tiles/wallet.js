import { FIGURE_DASHBOARD_URL, PROVENANCE_WALLET_URL } from '../urls';

export const wallet = {
  active: true,
  icon: 'wallet.svg',
  complete: ['wallet'],
  title: 'View Wallet',
  content: 'Visit Figure Dashboard to view your wallet in detail.',
  url: { figure: FIGURE_DASHBOARD_URL, provenance: PROVENANCE_WALLET_URL },
  incomplete: {
    title: 'Create a Wallet',
    content: 'Create a new wallet and get started.',
    url: PROVENANCE_WALLET_URL,
  },
};
