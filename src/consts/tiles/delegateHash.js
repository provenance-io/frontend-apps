import { EXPLORER_VALIDATORS_URL, HOW_TO_STAKE_URL } from '../urls';

export const delegateHash = {
  active: true,
  icon: 'tokenMulti',
  requires: ['wallet'],
  title: 'Delegate Hash',
  content: 'Earn revenue on your Hash. Participate in the Provenance Hash staking process by delegating Hash to a validator.',
  help: HOW_TO_STAKE_URL,
  url: EXPLORER_VALIDATORS_URL,
};
