import { types as sdkTypes } from './util/sdkLoader';

const { LatLng, LatLngBounds } = sdkTypes;

// An array of locations to show in the LocationAutocompleteInput when
// the input is in focus but the user hasn't typed in any search yet.
//
// Each item in the array should be an object with a unique `id` (String) and a
// `predictionPlace` (util.types.place) properties.
export default [
  {
    id: 'default-new-york',
    predictionPlace: {
      address: 'England , London , UK',
      bounds: new LatLngBounds(
        new LatLng(51.1, 0.12678),
        new LatLng(51.2, 0.12678)
      ),
    },
  },
];
