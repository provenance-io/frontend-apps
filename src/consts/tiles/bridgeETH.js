import { FIGURE_DASHBOARD_URL } from '../urls';

export const bridgeETH = {
  active: true,
  color: 'PURPLE',
  icon: 'bridgeEth',
  requires: ['wallet', 'passport'],
  complete: ['isKYC'],
  title: 'View ETH Bridge',
  content: 'Utilize Your ETH Holdings by buying, selling and trading on the Provenance Ecosystem through Provenance Bridge.',
  url: `${FIGURE_DASHBOARD_URL}`,
  incomplete: {
    title: 'Access ETH Bridge',
    content: 'To use the ETH Bridge you must have completed your Figure Passport and be approved.  Click here to get detailed step by step directions and complete this process.',
    url: `/passport`,
  }
};
