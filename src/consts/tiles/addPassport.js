export const addPassport = {
  active: true,
  icon: 'circuit',
  requires: ['wallet'],
  complete: ['passport'],
  title: 'View Passport',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet vehicula leo, eget posuere est sagittis a.',
  url: 'https://provenance.io/view-passport',
  incomplete: {
    title: 'Add a Passport',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet vehicula leo, eget posuere est sagittis a.',
    url: 'https://provenance.io/add-a-passport',
  },
};
