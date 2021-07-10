import PropertyGroup from './PropertyGroup';

const exampleOptions = [
  { key: 'afrobeats', label: 'Afrobeats' },
  { key: 'dancehall', label: 'Dancehall' },
  { key: 'hiphop', label: 'Hip-Hop' },
  { key: 'pop', label: 'Pop' },
  { key: 'amapiano', label: 'Amapiano' },
  { key: 'dubstep', label: 'Dubstep' },
];

export const WithSomeSelected = {
  component: PropertyGroup,
  props: {
    id: 'musicGenres',
    options: exampleOptions,
    selectedOptions: ['hiphop', 'dancehall', 'rnb'],
    twoColumns: true,
  },
  group: 'misc',
};
