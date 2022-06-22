import React from 'react';
import config from '../../config';
import { twitterPageURL } from '../../util/urlHelpers';
import { StaticPage, TopbarContainer } from '../../containers';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  ExternalLink,
} from '../../components';

import css from './AboutPage.module.css';
import image from './about-us-1056.jpg';
import coupleImage from './couple.jpg';
import danceImage from './dance.jpg';
import djImage from './dj.jpg';
import hbdImage from './hbd.jpg';
import trustImage from '../../components/SectionLocations/images/ICON_TRUST.png';
import djChoice from '../../components/SectionLocations/images/ICON_DJCHOICE.png';
import hoursImage from '../../components/SectionLocations/images/ICON_247.png';
import { FormattedMessage } from '../../util/reactIntl';

const AboutPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="About Us"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'AboutPage',
        description: 'About ',
        name: 'About page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1 className={css.pageTitle}>
            We are helping people enhance their most beautiful memories{' '}
          </h1>
          <div className={css.row}>
            <img className={css.coverImage} src={coupleImage} width="387px" height="551px" />

            <div className={css.column}>
              <img className={css.coverImage} src={djImage} width="387px" height="177px" />
              <img className={css.coverImage} src={danceImage} width="387px" height="177px" />
              <img className={css.coverImage} src={image} width="387px" height="177px" />
            </div>
            <img className={css.coverImage} src={hbdImage} width="387px" height="551px" />
          </div>

          <div className={css.pageTitle}>
            <h1> The trusted way to book a DJ </h1>
            <ul className={css.steps}>
              <li className={css.step}>
                <img src={trustImage} className={css.icon} />
                <h2 className={css.stepTitle}>
                  <FormattedMessage id="SectionLocations.part1Title" />
                </h2>
                <p>
                  <FormattedMessage id="SectionLocations.part1Text" />
                </p>
              </li>

              <li className={css.step}>
                <img src={djChoice} className={css.icon} />
                <h2 className={css.stepTitle}>
                  <FormattedMessage id="SectionLocations.part2Title" />
                </h2>
                <p>
                  <FormattedMessage id="SectionLocations.part2Text" />
                </p>
              </li>

              <li className={css.step}>
                <img src={hoursImage} className={css.icon} />
                <h2 className={css.stepTitle}>
                  <FormattedMessage id="SectionLocations.part3Title" />
                </h2>
                <p>
                  <FormattedMessage id="SectionLocations.part3Text" />
                </p>
              </li>
            </ul>
          </div>

          <div className={css.contentWrapper}>
            <div className={css.contentSide}></div>

            <div className={css.pageTitle}>
              <h1> Our Story </h1>
              <p>
                The idea for talentbookr came from our founders’ experience as event promoters. We
                were fortunate enough to holding over 20 events hosted in the South Coast between
                2013 - 2016 featuring UK’s top upcoming DJs and artists. During this time, we
                endured multiple no-shows and stolen deposits which made it extremely difficult and
                stressful to organise successful events. After we realised that we are not the only
                ones with such issues, the “eureka” moment happened. Our experience leads us here
                today to remove any entertainment worries and help you enhance a beautiful memory.
              </p>

              <h1> Our values </h1>

              <p>
                Always stay in control, browse through a list of DJs or select your event type.
              </p>
              <p>
                Book 24/7, Get a glimpse of the big night by hearing Dj mixes and reading real
                client reviews.
              </p>
              <p>
                Choices of top rated DJ's, it takes 60 seconds to make a request. Quick, simple and
                effective.
              </p>
              <div className={css.subtitle}>
                <h2>• Free cancellation </h2>
                <h4>Cancel for free for up to [2] days before your event</h4>
                <h2>• Secure today with a 10% (confirm value) deposit</h2>
                <p>
                  Choose to spread the payment by paying a deposit today and the remainder up to [3]
                  days prior to the event
                </p>
                <h2>• Trusted DJ's</h2>
                <p>
                  Every DJ on this website is subject to has been vetted to uphold quality and
                  safety (see more){' '}
                </p>
                <p>• Money-back guarantee </p>
                <h4>
                  {' '}
                  We hold your booking fee which the DJs do not receive until the event is confirmed
                  finished.
                </h4>
              </div>
            </div>
          </div>
        </LayoutWrapperMain>

        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default AboutPage;
