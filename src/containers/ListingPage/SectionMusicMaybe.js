import React from 'react';
import { FormattedMessage } from '../../util/reactIntl';

import css from './ListingPage.module.css';

const SectionMusicMaybe = props => {
  const { publicData } = props;

  return publicData ? (
    <div className={css.sectionMusic}>
      <h2 className={css.musicTitle}>
        <FormattedMessage id="ListingPage.musicTitle" />
      </h2>
      <div dangerouslySetInnerHTML={{ __html: publicData }} />
    </div>
  ) : null;
};

export default SectionMusicMaybe;
