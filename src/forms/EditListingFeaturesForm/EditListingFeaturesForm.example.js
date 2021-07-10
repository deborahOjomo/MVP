import EditListingFeaturesForm from './EditListingFeaturesForm';

const NAME = 'musicGenres';

const initialValueArray = ['hiphop', 'dancehall', 'rnb'];
const initialValues = { [NAME]: initialValueArray };

const filterConfig = [
  {
    id: 'musicGenres',
    label: 'Music Genre',
    type: 'SelectMultipleFilter',
    group: 'secondary',
    queryParamNames: ['pub_musicGenres'],
    config: {
      mode: 'has_all',
      options: [
        { key: 'afrobeats', label: 'Afrobeats' },
        { key: 'dancehall', label: 'Dancehall' },
        { key: 'hiphop', label: 'Hip-Hop' },
        { key: 'pop', label: 'Pop' },
        { key: 'amapiano', label: 'Amapiano' },
        { key: 'rnb', label: 'R&B' },
        { key: 'dubstep', label: 'Dubstep' },
      ],
    },
  },
];

export const musicGenres = {
  component: EditListingFeaturesForm,
  props: {
    name: NAME,
    onSubmit: values => console.log('EditListingFeaturesForm submit:', values),
    initialValues: initialValues,
    saveActionMsg: 'Save dj genre',
    updated: false,
    updateInProgress: false,
    disabled: false,
    ready: false,
    filterConfig,
  },
  group: 'forms',
};
