/* --- Global --- */

/* --- Local --- */
import {SEO} from '@components';
import survey from '@assets/images/survey.png';
import {FormFeedbackBasic} from '@forms';
import {SurveyFullListQuery} from '@queries';

/* --- Home : Page --- */
const PageHome = props => {
  return (
    <>
      <SEO />
      <SurveyList />
      <Main />
    </>
  );
};

/* --- SurveyList : Section --- */
const SurveyList = props => {
  return (
    <Atom.Flex>
      <Atom.Flex
        center
        column
        sx={{
          color: 'white',
          p: 6,
          minHeight: '70vh',
          width: ['100%', '100%', '50%'],
          zIndex: 1000,
        }}>
        <Atom.BackgroundGradient gradient="blue" direction={0} />
        <Atom.BackgroundImage
          src="https://images.unsplash.com/photo-1496902526517-c0f2cb8fdb6a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
          sx={{
            opacity: 0.45,
          }}
        />
        <SurveyIntroductionAndList />
      </Atom.Flex>
      <Atom.Box
        sx={{
          bg: 'paper',
          color: 'text',
          px: [1, 1, 5],
          py: [3, 3, 6],
          width: ['100%', '100%', '50%'],
        }}>
        <Atom.Heading>1MillionDevs General Feeback</Atom.Heading>
        <Atom.Paragraph>
          Tell us where we can improve and do better.
        </Atom.Paragraph>
        <Atom.HorizontalRule sx={{my: 3, width: 50}} />
        <FormFeedbackBasic />
      </Atom.Box>
    </Atom.Flex>
  );
};

const SurveyIntroductionAndList = props => {
  return (
    <Atom.Box>
      <Atom.Heading as="h4" sx={{fontSize: [3, 3, 5]}}>
        <Atom.Span sx={{fontWeight: 300}}>Share Your Feedback</Atom.Span>
        <br />
        <Atom.Span sx={{fontWeight: 700}}>Improve Ethereum</Atom.Span>
      </Atom.Heading>
      <Atom.Paragraph sx={{mt: 4}}>
        The 1MillionDevs Stewards value <strong>openness</strong> and{' '}
        <strong>transparency</strong>.
      </Atom.Paragraph>
      <Atom.Paragraph>
        We are committed to constantly improving, learning from mistakes and
        getting better each day. Let us know where we can improve and do better.
      </Atom.Paragraph>
      <Atom.HorizontalRule sx={{my: 3, width: 50}} />
      <Molecule.Link to="/surveys" sx={{}}>
        <Atom.Button white curve>
          <Atom.Flex alignCenter>
            <Atom.Image src={survey} sx={{width: 25}} />
            <Atom.Span sx={{fontSize: [1], fontWeight: 700, ml: 2}}>
              1MillionDevs Surveys
            </Atom.Span>
          </Atom.Flex>
        </Atom.Button>
      </Molecule.Link>
    </Atom.Box>
  );
};

const Main = props => {
  return (
    <Atom.Box
      sx={{
        bg: 'neutral',
        color: 'text',
      }}>
      <Atom.Container
        sx={{
          py: 5,
          p: 4,
          maxWidth: ['100%', '100%', 550, 1020],
          zIndex: 1000,
        }}>
        <Atom.Flex center column sx={{textAlign: 'center'}}>
          <Atom.Heading as="h5" sx={{fontSize: [3, 3, 4, 7]}}>
            Honest Feedback
          </Atom.Heading>
          <Atom.Paragraph sx={{color: 'text'}}>
            We want to the 1MillionDevs movement to be the best possible
            movement it can be. <br />
            <strong>What are we dong right? What are we doing wrong?</strong>
          </Atom.Paragraph>
        </Atom.Flex>
        <Atom.Container
          sx={{
            py: 5,
            p: 4,
            maxWidth: ['100%', '100%', 650, 780],
            zIndex: 1000,
          }}>
          <SurveyFullListQuery />
        </Atom.Container>
      </Atom.Container>
    </Atom.Box>
  );
};

export default PageHome;
