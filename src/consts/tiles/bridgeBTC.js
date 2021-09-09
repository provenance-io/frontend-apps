import { FIGURE_DASHBOARD_URL } from '../urls';

export const bridgeBTC = {
  id: 'bridgeBtc',
  active: true,
  parent: '',
  icon: 'bridgeBtc',
  requires: 'isKYC',
  complete: {
    title: "View BTC Bridge",
    content: 'Utilize Your Bitcoin Holdings by buying, selling and trading on the Provenance Ecosystem through Provenance Bridge.',
    url: `${FIGURE_DASHBOARD_URL}`,
  },
  incomplete: {
    title: "Access BTC Bridge",
    content: 'To use the BTC Bridge you must have completed your Figure Passport and be approved.  Click here to get detailed step by step directions and complete this process.',
    url: `${FIGURE_DASHBOARD_URL}`,
  }
};
