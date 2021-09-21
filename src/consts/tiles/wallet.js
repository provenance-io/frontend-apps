import { FIGURE_DASHBOARD_URL, PROVENANCE_CREATE_WALLET_URL } from '../urls';

export const wallet = {
  active: true,
  color: 'BLUE',
  icon: 'wallet',
  complete: ['wallet'],
  title: 'View Wallet',
  content: 'Visit Figure Dashboard to view your wallet in detail.',
  url: FIGURE_DASHBOARD_URL,
  incomplete: {
    title: 'Create a Wallet',
    content: 'Create a new wallet and get started.',
    url: PROVENANCE_CREATE_WALLET_URL,
  },
};
