import { DEPOSIT_MONEY_URL, DLOB_URL } from '../urls';

export const purchaseHash =   {
  active: true,
  icon: 'token.svg',
  requires: ['wallet'],
  title: 'Purchase Hash',
  content: 'Create a Figure account to fund your wallet with USD then purchase and trade Hash on the decentralized limit order book exchange, dlob.io.',
  url: DLOB_URL,
  help: DEPOSIT_MONEY_URL,
};
