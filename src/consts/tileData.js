import { PROVENANCE_BRIDGE_URL, PROVENANCE_WEBSITE_URL } from './urls';

export const TILE_DATA = [
  {
    icon: 'wallet',
    title: 'Create a Wallet',
    complete: {
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet vehicula leo, eget posuere est sagittis a.',
      url: 'https://provenance.io/bridge',
    },
    incomplete: {
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet vehicula leo, eget posuere est sagittis a.',
      url: 'https://provenance.io/bridge',
    }
  },
  {
    icon: 'circuit',
    title: 'Add a Passport',
    complete: {
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet vehicula leo, eget posuere est sagittis a.',
      url: 'https://provenance.io/bridge',
    },
    incomplete: {
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet vehicula leo, eget posuere est sagittis a.',
      url: 'https://provenance.io/bridge',
    }
  },
  {
    icon: 'tokenDeposit',
    title: 'Purchase Stablecoin',
    complete: {
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet vehicula leo, eget posuere est sagittis a.',
      url: 'https://provenance.io/bridge',
    },
    incomplete: {
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet vehicula leo, eget posuere est sagittis a.',
      url: 'https://provenance.io/bridge',
    }
  },
  {
    icon: 'tokenSpin',
    title: 'Delegated Token',
    complete: {
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet vehicula leo, eget posuere est sagittis a.',
      url: 'https://provenance.io/bridge',
    },
    incomplete: {
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet vehicula leo, eget posuere est sagittis a.',
      url: 'https://provenance.io/bridge',
    }
  },
  {
    icon: 'tokenCircuit',
    title: 'Transferred Hash',
    complete: {
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet vehicula leo, eget posuere est sagittis a.',
      url: 'https://provenance.io/bridge',
    },
    incomplete: {
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet vehicula leo, eget posuere est sagittis a.',
      url: 'https://provenance.io/bridge',
    }
  },
  {
    icon: 'boxLines',
    title: 'Place a trade on Dlob',
    complete: {
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet vehicula leo, eget posuere est sagittis a.',
      url: 'https://provenance.io/bridge',
    },
    incomplete: {
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet vehicula leo, eget posuere est sagittis a.',
      url: 'https://provenance.io/bridge',
    }
  },
  {
    icon: 'castle',
    title: 'Subscribe to a fund',
    complete: {
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet vehicula leo, eget posuere est sagittis a.',
      url: 'https://provenance.io/bridge',
    },
    incomplete: {
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet vehicula leo, eget posuere est sagittis a.',
      url: 'https://provenance.io/bridge',
    }
  },
  {
    icon: 'tokenFloat',
    title: 'Upgrade Passport to accredited',
    complete: {
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet vehicula leo, eget posuere est sagittis a.',
      url: 'https://provenance.io/bridge',
    },
    incomplete: {
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet vehicula leo, eget posuere est sagittis a.',
      url: 'https://provenance.io/bridge',
    }
  },
  {
    icon: 'boxChart',
    title: 'Trade on ATS',
    complete: {
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet vehicula leo, eget posuere est sagittis a.',
      url: 'https://provenance.io/bridge',
    },
    incomplete: {
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet vehicula leo, eget posuere est sagittis a.',
      url: 'https://provenance.io/bridge',
    }
  },
  {
    icon: 'boxCircuit',
    title: 'Create a NFT',
    complete: {
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet vehicula leo, eget posuere est sagittis a.',
      url: 'https://provenance.io/bridge',
    },
    incomplete: {
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet vehicula leo, eget posuere est sagittis a.',
      url: 'https://provenance.io/bridge',
    }
  },
  {
    icon: 'box',
    title: 'Tokenize a NFT',
    complete: {
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet vehicula leo, eget posuere est sagittis a.',
      url: 'https://provenance.io/bridge',
    },
    incomplete: {
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet vehicula leo, eget posuere est sagittis a.',
      url: 'https://provenance.io/bridge',
    }
  },
  {
    icon: 'tokenSpotlight',
    title: 'Create a coin',
    complete: {
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet vehicula leo, eget posuere est sagittis a.',
      url: 'https://provenance.io/bridge',
    },
    incomplete: {
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet vehicula leo, eget posuere est sagittis a.',
      url: 'https://provenance.io/bridge',
    }
  },
  {
    title: "BTC Bridge",
    icon: 'bridgeBtc',
    requires: 'isKYC',
    complete: {
      content: 'Utilize Your Bitcoin Holdings by buying, selling and trading on the Provenance Ecosystem through Provenance Bridge.',
      url: `${PROVENANCE_BRIDGE_URL}`,
    },
    incomplete: {
      content: 'To use the BTC Bridge you must have completed your Figure Passport and be approved.  Click here to get detailed step by step directions and complete this process.',
      url: `${PROVENANCE_WEBSITE_URL}/deposit-money`,
    }
  },
  {
    title: 'ETH Bridge',
    icon: 'bridgeEth',
    requires: 'isKYC',
    complete: {
      content: 'Utilize Your ETH Holdings by buying, selling and trading on the Provenance Ecosystem through Provenance Bridge.',
      url: `${PROVENANCE_BRIDGE_URL}`,
    },
    incomplete: {
      content: 'To use the ETH Bridge you must have completed your Figure Passport and be approved.  Click here to get detailed step by step directions and complete this process.',
      url: `${PROVENANCE_WEBSITE_URL}/deposit-money`,
    }
  },
];
