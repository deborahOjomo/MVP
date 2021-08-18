import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionSummary from '@material-ui/core/AccordionSummary';

import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
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

import css from './FaqPage.css';

const FaqPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  const Accordion = withStyles({
    root: {
      borderRadius: '40px 40px 40px 40px',
      border: 'solid rgba(0, 0, 0, .125)',
      marginTop: 20,
      marginBottom: 10,

      boxShadow: 'none',
      '&:not(:last-child)': {
        borderBottom: 0,
      },
      '&:before': {
        display: 'none',
      },
      '&$expanded': {
        margin: 'auto',
      },
    },
    expanded: {},
  })(MuiAccordion);

  const AccordionSummary = withStyles({
    root: {
      backgroundColor: 'rgba(0, 0, 0, .03)',
      borderBottom: ' 1px solid rgba(0, 0, 0, .125)',
      borderRadius: '40px 40px 40px 40px',
      marginBottom: 2,
      minHeight: 56,
      '&$expanded': {
        minHeight: 56,
      },
    },
    content: {
      '&$expanded': {
        margin: '12px 0',
      },
    },
    expanded: {},
  })(MuiAccordionSummary);

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <LayoutSingleColumn>
      <LayoutWrapperTopbar>
        <TopbarContainer />
      </LayoutWrapperTopbar>

      <LayoutWrapperMain className={css.staticPageWrapper}>
        <h2 className={css.pageTitle}>Frequently asked questions </h2>
        <div className={css.root}>
          <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={css.heading}>What is Talentbookr?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Talentbookr is a platform where users can access, browse and securely book DJs for
                their events. 
                <br />
                Talentbookr allows DJ (Talents) to manage their bookings free of charge.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={css.heading}>Who can use talentbookr?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                If you are a DJ and pass our onboarding process. If you are looking to hire a DJ for
                your personal, or commercial event. 
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={css.heading}>
                How do you guarantee that my money is safe?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Your payment is not received by the DJ until the performance has been completed, so
                in the unlikely event of a non-performance you will receive a full refund. We
                process our payments using Stripe, a regulated payment processing company to ensure
                your transaction is as smooth as possible. 
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={css.heading}>
                How do I know that the talent I book is real? 
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Every DJ on talentbookr has been vetted in person and in line with our internal
                minimum DJ requirements. 
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={css.heading}>How do you make your money?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                We charge a booking fee for each transaction and split it between the DJ and the
                paying customer.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={css.heading}>
                I just completed a performance, when should I receive my payment?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Your payment will reach your bank account within 48 hours which allows for your
                performance to be confirmed and for Stripe to process the transaction. 
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion square expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={css.heading}>
                How do I speak with someone at talentbookr? 
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                For any comments, questions or feedback, you can reach us at
                <a href="mailto:admin@talentbookr.co.uk"> admin@talentbookr.co.uk</a>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </LayoutWrapperMain>

      <LayoutWrapperFooter>
        <Footer />
      </LayoutWrapperFooter>
    </LayoutSingleColumn>
  );
};

export default FaqPage;
