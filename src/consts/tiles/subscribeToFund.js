import { DIGITAL_FUND_URL, MARKETPLACE_BUYER_URL } from '../urls';

export const subscribeToFund = {
  active: true,
  icon: 'bubblesLink',
  requires: ['wallet', 'passport'],
  title: 'Subscribe to a Fund',
  content: 'Use the first end-to-end blockchain solution that combines tools for digital fundraising and ongoing fund management with a primary marketplace for raising capital and a secondary marketplace for trading fund interests.',
  url: MARKETPLACE_BUYER_URL,
  help: DIGITAL_FUND_URL,
};
