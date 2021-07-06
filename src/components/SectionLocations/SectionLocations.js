import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { lazyLoadWithDimensions } from '../../util/contextHelpers';

import { NamedLink } from '../../components';

import css from './SectionLocations.css';

import nyImage from './images/ny-yogi.jpg';

class LocationImage extends Component {
  render() {
    const { alt, ...rest } = this.props;
    return <img alt={alt} {...rest} />;
  }
}
const LazyImage = lazyLoadWithDimensions(LocationImage);

const locationLink = (name, image, searchQuery) => {
  const nameText = <span className={css.locationName}>{name}</span>;
  return (
    <NamedLink name="SearchPage" to={{ search: searchQuery }} className={css.location}>
      <div className={css.imageWrapper}>
        <div className={css.aspectWrapper}>
          <LazyImage src={image} alt={name} className={css.locationImage} />
        </div>
      </div>
      <div className={css.linkText}>
        <FormattedMessage
          id="SectionLocations.listingsInLocation"
          values={{ location: nameText }}
        />
      </div>
    </NamedLink>
  );
};

const SectionLocations = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <div className={css.title}>
        <FormattedMessage id="SectionLocations.title" />
      </div>
   
      <ul className={css.steps}>

        <li className={css.step}>
          <h2 className={css.stepTitle}>
            <FormattedMessage id="SectionLocations.part1Title" />
          </h2>
          <p>
            <FormattedMessage id="SectionLocations.part1Text" />
          </p>
        </li>

        <li className={css.step}>
          <h2 className={css.stepTitle}>
            <FormattedMessage id="SectionLocations.part2Title" />
          </h2>
          <p>
            <FormattedMessage id="SectionLocations.part2Text" />
          </p>
        </li>

        <li className={css.step}>
          <h2 className={css.stepTitle}>
            <FormattedMessage id="SectionLocations.part3Title" />
          </h2>
          <p>
            <FormattedMessage id="SectionLocations.part3Text" />
          </p>
        </li>

        <li className={css.step}>
          <h2 className={css.stepTitle}>
            <FormattedMessage id="SectionLocations.part4Title" />
          </h2>
          <p>
            <FormattedMessage id="SectionLocations.part4Text" />
          </p>
        </li>


      </ul>
    </div>
  );
};

SectionLocations.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionLocations.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionLocations;
