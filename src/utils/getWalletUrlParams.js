export const getWalletUrlParams = () => {
  // Get URL Query Parameters
  const params = window.location.search;
  const query = new URLSearchParams(params);
  const existingKeychainAccountName = query.get('keychainAccountName');
  const existingAddress = query.get('address');
  const existingWalletType = query.get('type');
  const existingWallet = existingAddress && existingKeychainAccountName && existingWalletType;

  return existingWallet ? { existingAddress, existingKeychainAccountName, existingWalletType } : null;
};