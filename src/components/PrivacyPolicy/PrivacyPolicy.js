import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from './PrivacyPolicy.css';

const PrivacyPolicy = props => {
  const { rootClassName, className } = props;
  const classes = classNames(rootClassName || css.root, className);

  // prettier-ignore
  return (
    <div className={classes}>
      {/* <p className={css.lastUpdated}>Last updated: November 22, 2019</p> */}

      <p>
        At Talentbookr (“Talentbookr”, “we” or “us”), we take pride in protecting your privacy. This privacy policy is to describe how we collect, use, and disclose information that we obtain about visitors to our website www.talentbookr.co.uk (the “Site”), and the services available through our Site.
      </p>

      <p>
        By visiting our Site, or using any of our Services, you agree to have your personal information handled in conjunction with this Policy. Your use of our Site or Services, and any dispute over privacy, is subject to this Policy and our Terms of Service, including its applicable limitations on damages and the resolution of disputes. Our Terms of Service are incorporated by reference into this Policy.
      </p>

      <h2>INFORMATION WE COLLECT ABOUT YOU</h2>
      <p>
        We may collect information about you directly from you and from third parties, as well as automatically through your use of our Site or Services.
      </p>
      <p>
        Information We Collect Directly From You. The information that we collect from you depends on whether you are a DJ, or a customer. Your interaction with our Services may include the following:
      </p>

      <h2>DJ</h2>
      <p>Upon your registration as a DJ supplier, we will collect: </p>

      <ul className={css.li}>
        <li>your personal (legal) name, </li>
        <li>picture, </li>
        <li> email address, </li>
        <li>phone number, </li>
        <li>business address, </li>
        <li>Stage name or alias, and </li>
        <li>Bank account number and sort code</li>
      </ul>
     
      <p>We will also collect other information necessary to complete your registration as a talent supplier, such as:</p>
      <ul className={css.li}>
        <li>audio and video files, </li>
        <li>a biography, and</li>
        <li>an hourly rate. </li>
      </ul>

      <p>We use a third party to store your financial information, and do not maintain it in our systems.</p>

      <h2>Customer </h2>
      <p>A customer will not be able to book a DJ prior to registration.
        Upon registration as a consumer, we will collect: </p>
      <ul className={css.li}>
        <li>Name and email address</li>
      </ul>

      <h2> Information We Collect Automatically.  </h2>
      <p>We may automatically collect information, about your use of our Services and our Site through cookies and other technologies. These will include your domain name; your browser type; your precise location (geolocation), operating system type; device name and model; pages or screens you view; links you click; your IP address; the length of time you visit or use our Services; and the referring URL, or the webpage that led you to our Site.
        <br />We may combine information collected automatically with other information that we have collected about you.</p>

      <h2>HOW WE USE YOUR INFORMATION</h2>
      <p>Our primary goals in collecting your Personal information or Usage information are to enhance your experience using the Services and to help support the Talented.
        We use your information, including your personal information, for the following purposes:</p>

      <ul className={css.li}>
        <li>
          To provide our Services to you (e.g., for our DJs, to display information about your act, and, for consumers, to tell you about DJs; to communicate with you about your use of our Services; to respond to your inquiries; and for other customer service purposes.
        </li>
        <li>To better understand how users access and use our Service, both on an aggregated and individualized basis; to respond to user desires and preferences; and for other research and analytical purposes.</li>
        <li>To better understand how users access and use our Service, both on an aggregated and individualized basis; to respond to user desires and preferences; and for other research and analytical purposes.</li>
        <li>To provide you with news and newsletters, special offers, and promotions; to contact you (including via email) about products or information we think may interest you; and for other marketing, advertising and promotional purposes.</li>
        <li>To send push notifications to you. For example, we may notify you of talents you may like that is playing nearby, or of promotions that may be of interest to you.</li>
      </ul>
    
      <h2>HOW WE SHARE YOUR INFORMATION</h2>
      <p>We may share your information (which includes information about DJs, consumers, and other visitors of our Site, unless specifically limited below), including personal information, as follows:</p>
    
      <h2>DJs</h2>
      <p>If you are a talent, any information that you submit about your act (with the exception of payment information) will be available on our Site to other users of our Services, including other DJs. Interested persons will be able to view your profile, listen to mixes, and review any other information that you choose to submit to us. We may disclose your information to vendors, service providers, contractors, agents, or other entities who perform functions on our behalf, including entities that process payment information on our behalf as well as assist us with IT, marketing, and other functions.</p>
     
      <h2>Customers </h2>
      <p>If a customer submits information about a DJ, such as a review or a comment, that information will be available to all other users of our Site and our App. When you submit a comment, your user name will be posted along with your comment.</p>
      
      <h2>General</h2>
      <p>We may disclose your information to our affiliates, non-affiliates or subsidiaries for research, marketing and other purposes consistent with this Policy. However, we will never disclose any information for the above purposes without your explicit consent.
        We also may share your information in the following circumstances:</p>
     
      <ul className={css.li}>
        <li>Business Transfers. If we are acquired by or merged with another company, if substantially all of our assets are transferred to another company or as part of a bankruptcy proceeding, we may transfer your information to another entity.
        </li>
        <li>In Response to Legal Process. We may disclose your information in order to comply with the law, a judicial proceeding, court order or other legal process, such as in response to a court order or a subpoena.</li>
        <li>To Protect Us and Others. We also may disclose your information where we believe it is necessary to investigate, prevent or take action regarding illegal activities, suspected fraud, situations involving potential threats to the safety of any person, violations of our Terms of Service or this Policy or as evidence in litigation in which we are involved.</li>
        <li>Aggregate and De-Identified Information. We may share aggregate or de-identified information about users with third parties for marketing, advertising, research, or similar purposes.</li>

      </ul>
      
      <h2>COOKIES AND OTHER TRACKING MECHANISMS</h2>
      <p>We and our service providers use cookies and other tracking mechanisms to track information about your use of our Site or Services. We or our service providers may combine this information with other personal information we collect from you.</p>
      <p>Cookies. We or our service providers may use cookies to track visitor activity on our Site. A cookie is a text file that a website transfers to your computer’s hard drive for record-keeping purposes. We or our service providers may use cookies to track user activities on our Site, such as the pages visited and time spent on our Site. Most browsers allow users to refuse cookies. The Help portion of the toolbar on most browsers will tell you how to prevent your computer from accepting new cookies, how to have the browser notify you when you receive a new cookie, or how to disable cookies altogether. Visitors to our Site who disable cookies may not be able to browse certain areas of the Site. Our use of cookies is subject to consent upon a visit of our website.</p>
      <p>Third-Party Analytics. We or our service providers use automated devices and applications to evaluate use of our Site. We also may use other analytic means to evaluate our Services. We or our service providers use these tools to help us improve our Site, Services, performance, and user experiences. These entities may use cookies and other tracking technologies to perform their services.</p>
      
      <h2>USER-GENERATED CONTENT</h2>
      <p>We invite you to post content to our Service, including your comments, mixes, pictures, and any other information that you would like to be available on our Services. If you post content to our Services, all of the information that you post will be available to all visitors to our Services. If you post your own content on our Site, App or Services, your posting may become public and we cannot prevent such information from being used in a manner that may violate this Policy, the law or your personal privacy.</p>
     
      <h2>THIRD-PARTY LINKS</h2>
      <p>Our Services may contain links to third-party websites. Any access to and use of such linked websites is not governed by this Policy, but instead is governed by the privacy policies of those third-party websites. We are not responsible for the information practices of such third-party websites.</p>
      
      <h2>SECURITY OF MY PERSONAL INFORMATION</h2>
      <p>We have implemented security measures designed to protect the personal information we collect. Please be aware that despite our best efforts, no data security measures can guarantee 100% security. You should take reasonable steps to protect against unauthorised access to your username and password. We are not responsible for any lost, stolen or compromised passwords or for any activity on your account via unauthorized password activity.</p>
      
      <h2>ACCESS TO MY PERSONAL INFORMATION</h2>
      <p>You may modify personal information that you have submitted by logging into your account and updating your profile information in your account settings on our Site. Please note that copies of information that you have updated, modified or deleted may remain viewable in cached and archived pages of the Site or App for a period of time.</p>
      
      <h2>MARKETING COMMUNICATIONS</h2>
      <p>We may send periodic promotional or informational emails to you. You may opt out of such communications by following the opt-out instructions contained in the email or by emailing us at admin@talentbookr.co.uk. Please note that it may take up to 10 business days for us to process opt-out requests. If you opt out of receiving emails about recommendations or other information we think may interest you, we may still send you emails about your account or any services you have requested or received from us.</p>
      
      <h2> CHILDREN AND MINORS</h2>
      <p>Our Services are not designed for children under the school-leaving age of 16, and we do not knowingly collect information from children under 16. </p>
      
      <h2>CONTACT US</h2>
      <p>If you have questions about the privacy aspects of our Services or would like to make a complaint, please contact us at admin@talentbookr.co.uk. </p>
      
      <h2>CHANGES TO THIS POLICY</h2>
      <p>This Policy is current as of the Effective Date set forth above. We may update this Policy from time to time, so please be sure to check back periodically. We will post any changes to this Policy on our Site and notify our user base. If we make any changes to this Policy that materially affect our practices with regard to the personal information we have previously collected from you, we will endeavor to provide you with notice in advance of such change by highlighting the change on our Site.</p>
    </div>
  );
};

PrivacyPolicy.defaultProps = {
  rootClassName: null,
  className: null,
};

const { string } = PropTypes;

PrivacyPolicy.propTypes = {
  rootClassName: string,
  className: string,
};

export default PrivacyPolicy;
