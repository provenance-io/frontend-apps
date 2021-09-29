import { PASSPORT_URL } from '../urls';

export const passport = {
  active: true,
  icon: 'documents',
  requires: ['wallet'],
  complete: ['passport'],
  title: 'View Passport',
  content: 'A Passport is required by certain Provenance marketplaces and exchanges. It collects information from you so that marketplace and exchange providers can verify accreditation and adhere to BSA/KYC/AML requirements.',
  url: PASSPORT_URL,
  incomplete: {
    title: 'Add a Passport',
    content: 'A Passport is required by certain Provenance marketplaces and exchanges. It collects information from you so that marketplace and exchange providers can verify accreditation and adhere to BSA/KYC/AML requirements.',
    url: PASSPORT_URL,
  },
};
