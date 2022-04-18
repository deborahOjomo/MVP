import React from 'react';
import { FormattedMessage } from '../../util/reactIntl';
import { PropertyGroup } from '../../components';

import css from './ListingPage.module.css';

const SectionAmenitiesMaybe = props => {
  const { options, publicData } = props;
  if (!publicData) {
    return null;
  }

  const selectedOptions = publicData && publicData.amenities ? publicData.amenities : [];
  const selectedConfigOptions = options.filter(o => selectedOptions.find(s => s === o.key));

  return (
    <div className={css.sectionAmenities}>
      <h2 className={css.amenitiesTitle}>
        <FormattedMessage id="ListingPage.amenitiesTitle" />
      </h2>
      <PropertyGroup
        id="ListingPage.amenities"
        options={selectedConfigOptions}
        selectedOptions={selectedOptions}
        twoColumns={selectedConfigOptions.length > 5}
      />
    </div>
  );
};

export default SectionAmenitiesMaybe;
