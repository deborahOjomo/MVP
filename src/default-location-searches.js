import { types as sdkTypes } from './util/sdkLoader';

const { LatLng, LatLngBounds } = sdkTypes;

// An array of locations to show in the LocationAutocompleteInput when
// the input is in focus but the user hasn't typed in any search yet.
//
// Each item in the array should be an object with a unique `id` (String) and a
// `predictionPlace` (util.types.place) properties.
const defaultLocations = [
  {
    id: 'default-london',
    predictionPlace: {
      address: 'London, Greater London, England, United Kingdom',
      bounds: new LatLngBounds(
        new LatLng(51.72939118, 0.14348224),
        new LatLng(51.29405981, -0.36082876)
      ),
    },
  },
  {
    id: 'default-los-angeles',
    predictionPlace: {
      address: 'Birmingham, West Midlands, England, United Kingdom',
      bounds: new LatLngBounds(new LatLng(52.570615, -1.597742), new LatLng(52.327674, -2.045202)),
    },
  },
  {
    id: 'default-manchester',
    predictionPlace: {
      address: 'Manchester, Greater Manchester, England, United Kingdom',
      bounds: new LatLngBounds(new LatLng(53.586199, -2.087698), new LatLng(53.348612, -2.52355)),
    },
  },
  {
    id: 'default-bristol',
    predictionPlace: {
      address: 'Bristol, England, United Kingdom',
      bounds: new LatLngBounds(new LatLng(51.66977, -2.293634), new LatLng(51.27028, -2.872346)),
    },
  },
];
export default defaultLocations;
