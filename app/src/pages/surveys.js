/* --- Global --- */

/* --- Local --- */
import {SEO} from '@components';
import {SurveyListQuery} from '@queries';
import {SurveyFullListQuery} from '@queries';
/* --- Component --- */
const PageHome = props => {
  return (
    <>
      <SEO />
      <Main />
    </>
  );
};

const Main = props => {
  return (
    <Atom.Box>
      <Atom.Container
        sx={{
          py: 5,
          p: 4,
          maxWidth: ['100%', '100%', 550, 700],
          zIndex: 1000,
        }}>
        {/* <Atom.Heading as="h4">1MillionDevs Survey</Atom.Heading> */}
        <SurveyFullListQuery />
      </Atom.Container>
    </Atom.Box>
  );
};

export default PageHome;
