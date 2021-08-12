import { FIGURE_DASHBOARD_URL } from './urls';

export const TILE_DATA = [
  {
    title: "BTC Bridge",
    active: true,
    icon: 'bridgeBtc',
    requires: 'isKYC',
    complete: {
      content: 'Utilize Your Bitcoin Holdings by buying, selling and trading on the Provenance Ecosystem through Provenance Bridge.',
      url: `${FIGURE_DASHBOARD_URL}`,
    },
    incomplete: {
      content: 'To use the BTC Bridge you must have completed your Figure Passport and be approved.  Click here to get detailed step by step directions and complete this process.',
      url: `${FIGURE_DASHBOARD_URL}`,
    }
  },
  {
    title: 'ETH Bridge',
    active: true,
    icon: 'bridgeEth',
    requires: 'isKYC',
    complete: {
      content: 'Utilize Your ETH Holdings by buying, selling and trading on the Provenance Ecosystem through Provenance Bridge.',
      url: `${FIGURE_DASHBOARD_URL}`,
    },
    incomplete: {
      content: 'To use the ETH Bridge you must have completed your Figure Passport and be approved.  Click here to get detailed step by step directions and complete this process.',
      url: `${FIGURE_DASHBOARD_URL}`,
    }
  },
  {
    active: false,
    icon: 'wallet',
    title: 'Create a Wallet',
    complete: {
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet vehicula leo, eget posuere est sagittis a.',
      url: 'https://provenance.io/create-a-wallet',
    },
    incomplete: {
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet vehicula leo, eget posuere est sagittis a.',
      url: 'https://provenance.io/create-a-wallet',
    }
  },
  {
    active: false,
    icon: 'circuit',
    title: 'Add a Passport',
    complete: {
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet vehicula leo, eget posuere est sagittis a.',
      url: 'https://provenance.io/add-a-passport',
    },
    incomplete: {
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet vehicula leo, eget posuere est sagittis a.',
      url: 'https://provenance.io/add-a-passport',
    }
  },
  {
    active: false,
    icon: 'tokenDeposit',
    title: 'Purchase Stablecoin',
    complete: {
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet vehicula leo, eget posuere est sagittis a.',
      url: 'https://provenance.io/purchase-stablecoin',
    },
    incomplete: {
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet vehicula leo, eget posuere est sagittis a.',
      url: 'https://provenance.io/purchase-stablecoin',
    }
  },
  {
    active: false,
    icon: 'tokenSpin',
    title: 'Delegated Token',
    complete: {
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet vehicula leo, eget posuere est sagittis a.',
      url: 'https://provenance.io/delegated-token',
    },
    incomplete: {
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet vehicula leo, eget posuere est sagittis a.',
      url: 'https://provenance.io/delegated-token',
    }
  },
  {
    active: false,
    icon: 'tokenCircuit',
    title: 'Transferred Hash',
    complete: {
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet vehicula leo, eget posuere est sagittis a.',
      url: 'https://provenance.io/transferred-hash',
    },
    incomplete: {
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet vehicula leo, eget posuere est sagittis a.',
      url: 'https://provenance.io/transferred-hash',
    }
  },
  {
    active: false,
    icon: 'boxLines',
    title: 'Place a trade on Dlob',
    complete: {
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet vehicula leo, eget posuere est sagittis a.',
      url: 'https://provenance.io/trade-on-dlob',
    },
    incomplete: {
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet vehicula leo, eget posuere est sagittis a.',
      url: 'https://provenance.io/trade-on-dlob',
    }
  },
  {
    active: false,
    icon: 'castle',
    title: 'Subscribe to a fund',
    complete: {
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet vehicula leo, eget posuere est sagittis a.',
      url: 'https://provenance.io/subscribe-to-fund',
    },
    incomplete: {
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet vehicula leo, eget posuere est sagittis a.',
      url: 'https://provenance.io/subscribe-to-fund',
    }
  },
  {
    active: false,
    icon: 'tokenFloat',
    title: 'Upgrade Passport to accredited',
    complete: {
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet vehicula leo, eget posuere est sagittis a.',
      url: 'https://provenance.io/upgrade-passport',
    },
    incomplete: {
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet vehicula leo, eget posuere est sagittis a.',
      url: 'https://provenance.io/upgrade-passport',
    }
  },
  {
    active: false,
    icon: 'boxChart',
    title: 'Trade on ATS',
    complete: {
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet vehicula leo, eget posuere est sagittis a.',
      url: 'https://provenance.io/trade-on-ats',
    },
    incomplete: {
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet vehicula leo, eget posuere est sagittis a.',
      url: 'https://provenance.io/trade-on-ats',
    }
  },
  {
    active: false,
    icon: 'boxCircuit',
    title: 'Create a NFT',
    complete: {
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet vehicula leo, eget posuere est sagittis a.',
      url: 'https://provenance.io/create-a-nft',
    },
    incomplete: {
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet vehicula leo, eget posuere est sagittis a.',
      url: 'https://provenance.io/create-a-nft',
    }
  },
  {
    active: false,
    icon: 'box',
    title: 'Tokenize a NFT',
    complete: {
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet vehicula leo, eget posuere est sagittis a.',
      url: 'https://provenance.io/tokenize-a-nft',
    },
    incomplete: {
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet vehicula leo, eget posuere est sagittis a.',
      url: 'https://provenance.io/tokenize-a-nft',
    }
  },
  {
    active: false,
    icon: 'tokenSpotlight',
    title: 'Create a coin',
    complete: {
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet vehicula leo, eget posuere est sagittis a.',
      url: 'https://provenance.io/create-a-coin',
    },
    incomplete: {
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet vehicula leo, eget posuere est sagittis a.',
      url: 'https://provenance.io/create-a-coin',
    }
  },
];
