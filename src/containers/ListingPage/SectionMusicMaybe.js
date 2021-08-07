import React from 'react';
import { FormattedMessage } from '../../util/reactIntl';

import css from './ListingPage.css';

const MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION = 20;

const SectionMusicMaybe = props => {
  const { publicData } = props;
  const musicLink = publicData.musicLink;

  return publicData ? (
    <div className={css.sectionMusicLink}>
      {/* <h2 className={css.musicLinkTitle}>
        <FormattedMessage id="Soundcloud" />
      </h2> */}

      <div></div>
    </div>
  ) : null;
};

export default SectionMusicMaybe;
