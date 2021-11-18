import { PASSPORT_UPGRADE_URL, PASSPORT_URL } from '../urls';

export const updatePassport = {
  active: true,
  icon: 'upDocuments.svg',
  requires: ['wallet', 'passport'],
  title: 'Upgrade a Passport',
  content: 'Upgrade an existing Passport to add additional accreditation levels or BSA/KYC/AML material.',
  url: PASSPORT_UPGRADE_URL,
  help: PASSPORT_URL,
};
