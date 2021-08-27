import React from 'react';
import { FormattedMessage } from '../../util/reactIntl';

import css from './ListingPage.module.css';

const SectionMusicMaybe = props => {
  const { publicData } = props;
  const musicLink = publicData.musicLink;

  return publicData ? (
    <div className={css.sectionMusic}>
      <h2 className={css.descriptionTitle}>
        <FormattedMessage id="Music" />
      </h2>
      <div dangerouslySetInnerHTML={{ __html: publicData }} />
    </div>
  ) : null;
};

export default SectionMusicMaybe;
