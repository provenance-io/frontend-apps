import useRedux from './useRedux';
import { walletActions } from '../actions';

const useWallet = () => useRedux('walletReducer', walletActions);

export default useWallet;
