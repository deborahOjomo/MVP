import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from './TermsOfService.module.css';

const TermsOfService = props => {
  const { rootClassName, className } = props;
  const classes = classNames(rootClassName || css.root, className);

  // prettier-ignore
  return (
    <div className={classes}>
      {/* <p className={css.lastUpdated}>Last updated: November 22, 2019</p> */}

      <p>
        These terms and conditions (the "Terms") apply when you use this Site and its content (the "Content") and, if you are a customer or a DJ.
      </p>

      <p>
        To make the Site as useful as possible we may use the services of third parties from time to time or link to third party websites to assist us in the Services, but unless otherwise stated the Services available on this Site are provided to you by us. Please note that where products or services or sites are offered by third parties and you decide to buy or access such products or services or sites, you do so upon the terms and conditions of those third parties.
      </p>

      <p>
        By accessing or using the Site, you accept and agree to these Terms, which include our Privacy Policy (enter link), and you agree that your use of the Site is subject to these Terms.  If you do not agree to all of these Terms you may not use this Site.
      </p>

      <p>
        We may have to make changes to these Terms from time to time, which will take effect when they appear on this Site.  We may not notify you personally of any such changes and so we encourage you to check the Site regularly for any updates. Your continued use of this Site following the posting of changes will mean you accept and agree to those changes.
      </p>

      <h2>
        Site Content
      </h2>
      <p>
        Much of the Content on the Site belongs to DJs, photographers and other creative folks. To protect their interests and livelihood we ask you not to copy, share, transfer or otherwise use any part of the Site or any Content except as permitted on the Site.
      </p>
      <p>
        This Site is intended to help DJs find and play gigs and for customers to find DJs to play at their events, among other things.  If you're here because you're a fan rather than a DJ, the Site and Content are made available for your personal and non-commercial use only - please do not make any commercial use of any of the Content.
      </p>
      <h2>
        Age Requirements
      </h2>

      <p>
        The Site is designed for people aged 13 or older.  If you are aged 13 to 17, please read these Terms with your parent or guardian to make sure that you and your parent or guardian understand and agree to these Terms.
      </p>

      <h2>
        Your Use of Our Site
      </h2>

      <p>
        We have tried to make the Site as easy to use as possible, but please note that its functions may be affected by the performance of your hardware, software and Internet access.
      </p>
      <p>
        We have to ask you not to do certain things so that we can make sure the Site remains working for others to use.  Please do not:
      </p>
      <ul className={css.li}>
        <li className={css.li}> do anything that would damage or disable this Site or the Services;</li>
        <li>impersonate anyone else when you register on the Site; </li>
        <li>try to unpick or copy our software, or try to access protected data on the Site by circumventing our security systems;</li>
        <li> copy the Site or any Content on the Site; or (unless you are a DJ or a customer) use the Site or any information or data on the Site for commercial purposes.</li>
      </ul>

      <h2>Registration and Passwords</h2>

      <p>
        If you are a DJ or a customer, you will need to register on the Site before using our Services. To register on the Site you will need to complete the registration process by providing certain information (including your email address and location) and choosing a username and password.  You agree that you will provide truthful and accurate information when registering or opening an account.  Registration is at our discretion and we may revoke your password at any time.
      </p>
      <p>
        Please remember that you are responsible for keeping your password and account information confidential, and you are responsible for all activities that occur on your  account whether or not authorised by you. Please notify us immediately of any unauthorised use of your password or account or any other breach of security. We cannot be liable for any loss or damage which results from the disclosure of your username and/or password contrary to these Terms.
      </p>
      <p>We are obliged by law to ensure that the information we hold about you is up to date.  Please amend your details as appropriate from time to time or email admin@talentbookr.co.uk to notify us of any changes.</p>
      <p>Please see our Privacy Policy at [enter link] for further explanation as to how we use the information we collect from you and how we use cookies and traffic analysis tools.</p>

      <h3>Pricing</h3>
      <p>DJ - the Site is free to sign up and talentbookr Limited only charges a commission per booking.</p>
      <p>Customers - the Site is free to sign up and talentbookr Limited only charges a commission per booking.</p>
      <p>We reserve the right to take down any listing or information if we think it's misleading, untruthful, unlawful or if it might otherwise expose us to any form of liability. We also reserve the right to cancel your account if you upload /post /list that kind of stuff.</p>
      <p>We hope you'll agree that the value of the Site for customers lies not only in the listings but also in the DJ rankings, recommendations and reviews. The recommendations are ours, and we alone get to decide them! The reviews are what the customers think about you. We'll do our best to monitor reviews to make sure they're reasonable, but otherwise we'll publish it all, good or bad. If there's anything you don't like please let us know, and if we agree with you (our call!) we'll take it down.</p>
      <p>If you accept a booking, you are making a commitment to turn up and play on the day. If you don't turn up (unless it's for reasons beyond your control) the punters, fans and the venue won't be happy and nor will we. We reserve the right to recover any losses and costs incurred by us or the venue as a result of any failure to turn up (except for the reasons stated). If you know you're going to have trouble keeping your commitment PLEASE LET US (at admin@talentbookr.co..uk) AND THE CUSTOMER KNOW IMMEDIATELY.</p>
      <p>To book a DJ through the Site you need to request a booking with the DJ you want and await confirmation through the site and email.</p>
      <p>The availability of DJs are based on information supplied on the site. We rely on that information just as you do, and we do our best to make sure it's correct, but we can't be responsible if it's wrong (unless it's our mistake).  If for some reason a DJ that you have booked is not available on the night, we'll do our best to let you know as soon as we can and try to arrange a replacement.</p>
      <h2>Content Provided by You</h2>
      <p>
        The Site allows you to upload certain types of content ("User Content").  By uploading User Content you are granting us a worldwide, non-exclusive, perpetual, royalty-free licence to host the User Content on our servers and to reproduce, display, distribute and otherwise to communicate the User Content to the public on the Site and in connection with the Services and with other talentbookr ltd products and services now existing or developed in future.
      </p>

      <p>We may incorporate links in and around your User Content and display advertisements within, around or in connection with your User Content.  We will not, however, sell, distribute or communicate to the public your User Content outside of the Services.  As between you and us, you will retain ownership of your User Content at all times. </p>
      <p>We can't promise that we will use all User Content uploaded or otherwise provided to us.  If we do use it we do our best to protect it from abuse, but we cannot be responsible for any unauthorised use of User Content (except by us) or for any loss of User Content, so please keep a copy.</p>
      <p>Please do not upload or submit any User Content if you don't have the right to do so – if it's a piece of music or a photo for example that someone else owns, or has any interest in, and you have not got their consent. You must have all the rights necessary to any User Content you upload, and by uploading you're promising to us that you have all those rights. If you break that promise, you're in breach of these Terms (so see the section headed "Termination" below).</p>
      <p>We want to keep the Site clean and friendly.  Please do not upload User Content that is offensive, racist, harassing, illegal, misleading, abusive, defamatory, obscene or otherwise objectionable. If you do, it will be liable to be taken down and we will regard you as being in breach of these Terms (so see the section headed "Termination" below).  </p>
      <p>We do our best to monitor and moderate most User Content but we cannot monitor it all, and we don't undertake to monitor it all, and you therefore you could be at risk yourself if you post anything objectionable.  If you do upload objectionable content we may be obliged to pass copies to appropriate authorities.</p>
      <p>As you might expect, we reserve the right to take down any User Content that breaches, or that we think may breach, any of the above rules.</p>

      <h2>Blogs, Forums, Message Boards </h2>
      <p>Where the Site provides blogs, forums or message boards, you will need to register with the Site to use these Services.
        All postings are treated as User Content and are subject to the User Content rules above.
        We strongly advise you not to post your contact or other personal details on any forums or message boards.</p>

      <h2>Termination</h2>
      <p>We reserve the right, among other things, to suspend or terminate your access to this Site if you are in breach of these Terms, for example by posting User Content that is unsuitable.
      </p>
      <p>DJs and Customers can delete their account anytime.</p>
      <h2>Artist Understandings</h2>

      <p>
        1. You are a self-employed contractor, you are not an employee of talentbookr ltd. or any of talentbookr ltd’s clients.
        <br /> 2. You are solely responsible for your own liability to HM Revenue and Customs and any payments you receive from talentbookr ltd. on behalf of their clients will be gross of any applicable tax and/or NI contributions that you may be liable for.
        <br /> 3. You will provide a professional service at all times.
        <br /> 4. The DJs assigned agree that talentbookr ltd. acts as an intermediary and cannot be held responsible for non-fulfilment of bookings by the client although every safeguard is assured.
        <br /> 5. You are aware of the Control of Noise at Work Regulations 2005 and implement controls to protect hearing.

      </p>

      <h2>Miscellaneous </h2>
      <p>
        The remaining sections are the really legal clauses which we know you won't like, but which we have been advised we need to have here.</p>
        <p>We shall not be liable for any losses that you suffer as a result of using the Site or the Services which we cannot reasonably be expected to have foreseen (such as loss of income, or data, or anticipated savings).</p>
        <p> The clause above does not in any way limit or exclude our liability for any matter for which it would be illegal for us to exclude, or attempt to exclude, our liability.</p>
        <p>  We may license, transfer, assign or sub-contract any of our rights or obligations under these Terms at any time provided that we remain primarily liable for our obligations to you.</p>
        <p>  The internet is a worldwide network of computers and its operation is outside our control.  We can't therefore promise to be able to deliver you the Site or the Services without interruptions.</p>
        <p>  These Terms shall be governed by and construed in accordance with English law and you and we hereby irrevocably submit to the non-exclusive jurisdiction of the English Courts as regards any claim or matter arising in relation to these Terms.
      </p>


    </div>
  );
};

TermsOfService.defaultProps = {
  rootClassName: null,
  className: null,
};

const { string } = PropTypes;

TermsOfService.propTypes = {
  rootClassName: string,
  className: string,
};

export default TermsOfService;
