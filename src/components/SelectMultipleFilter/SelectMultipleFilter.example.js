import React from 'react';
import { withRouter } from 'react-router-dom';
import SelectMultipleFilter from './SelectMultipleFilter';
import { stringify, parse } from '../../util/urlHelpers';

const URL_PARAM = 'pub_musicGenres';

const options = [
  { key: 'afrobeats', label: 'Afrobeats' },
  { key: 'dancehall', label: 'Dancehall' },
  { key: 'hiphop', label: 'Hip-Hop' },
  { key: 'pop', label: 'Pop' },
  { key: 'amapiano', label: 'Amapiano' },
  { key: 'dubstep', label: 'Dubstep' },
];

const handleSubmit = (values, history) => {
  console.log('Submitting values', values);
  const queryParams = values ? `?${stringify(values)}` : '';
  history.push(`${window.location.pathname}${queryParams}`);
};

const musicGenresFilterPopup = withRouter(props => {
  const { history, location } = props;

  const params = parse(location.search);
  const musicGenres = params[URL_PARAM];
  const initialValues = { [URL_PARAM]: !!musicGenres ? musicGenres : null };

  return (
    <SelectMultipleFilter
      id="SelectMultipleFilterPopupExample"
      name="musicGenres"
      queryParamNames={[URL_PARAM]}
      label="musicGenres"
      onSubmit={values => handleSubmit(values, history)}
      showAsPopup={true}
      liveEdit={false}
      options={options}
      initialValues={initialValues}
      contentPlacementOffset={-14}
    />
  );
});

export const musicGenresFilterPopupExample = {
  component: musicGenresFilterPopup,
  props: {},
  group: 'filters',
};

const musicGenresFilterPlain = withRouter(props => {
  const { history, location } = props;

  const params = parse(location.search);
  const musicGenres = params[URL_PARAM];
  const initialValues = { [URL_PARAM]: !!musicGenres ? musicGenres : null };

  return (
    <SelectMultipleFilter
      id="SelectMultipleFilterPlainExample"
      name="musicGenres"
      queryParamNames={[URL_PARAM]}
      label="musicGenres"
      onSubmit={values => {
        handleSubmit(values, history);
      }}
      showAsPopup={false}
      liveEdit={true}
      options={options}
      initialValues={initialValues}
    />
  );
});

export const musicGenresFilterPlainExample = {
  component: musicGenresFilterPlain,
  props: {},
  group: 'filters',
};
