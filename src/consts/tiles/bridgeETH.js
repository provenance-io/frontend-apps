import { FIGURE_DASHBOARD_URL } from '../urls';

export const bridgeETH = {
  id: 'bridgeEth',
  active: true,
  parent: '',
  icon: 'bridgeEth',
  requires: 'isKYC',
  complete: {
    title: 'View ETH Bridge',
    content: 'Utilize Your ETH Holdings by buying, selling and trading on the Provenance Ecosystem through Provenance Bridge.',
    url: `${FIGURE_DASHBOARD_URL}`,
  },
  incomplete: {
    title: 'Access ETH Bridge',
    content: 'To use the ETH Bridge you must have completed your Figure Passport and be approved.  Click here to get detailed step by step directions and complete this process.',
    url: `${FIGURE_DASHBOARD_URL}`,
  }
};
