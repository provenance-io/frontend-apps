// Get info on a tile based on the name
export const getTileInfo = (name) => {
  switch (name) {
    case 'addPassport': return {icon: 'circuit', title: 'Passport'};
    case 'bridgeBTC': return {icon: 'bridgeBtc', title: 'Bitcoin Bridge'};
    case 'bridgeETH': return {icon: 'bridgeEth', title: 'Etherium Bridge'};
    case 'createNFT': return {icon: 'boxCircuit', title: 'Create an NFT'};
    case 'createWallet': return {icon: 'wallet', title: 'Create a Wallet'};
    case 'delegateHash': return {icon: 'tokenSpin', title: 'DelegateHash'};
    case 'purchaseHash': return {icon: 'boxLines', title: 'Purchase Hash'};
    case 'purchaseStablecoin': return {icon: 'tokenDeposit', title: 'Purchase Stablecoin'};
    case 'subscribeToFund': return {icon: 'castle', title: 'Subscribe to a Fund'};
    case 'tokenizeNFT': return {icon: 'box', title: 'Tokenize NFT'};
    case 'tradeATS': return {icon: 'boxChart', title: 'Trade on ATS'};
    case 'transferHash': return {icon: 'tokenCircuit', title: 'Transfer Hash'};
    case 'updatePassport': return {icon: 'tokenFloat', title: 'Update Passport'};
    default: return '';
  }
};