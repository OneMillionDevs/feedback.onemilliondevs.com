/* --- Global --- */

/* --- Local --- */
import {SEO} from '@components';

/* --- Component --- */
const PageHome = props => {
  return (
    <>
      <SEO />
      <Showcase />
      <Main />
    </>
  );
};

const Showcase = props => {
  return (
    <Atom.Flex
      center
      column
      sx={{
        bg: 'smoke',
        py: 5,
      }}>
      <Atom.Heading as="h4" sx={{fontSize: [3, 3, 4, 6], textAlign: 'center'}}>
        Help Improve The <br />
        1MillionDevs Movement
      </Atom.Heading>
      <Atom.Heading as="h6" md sx={{color: 'blue', fontWeight: 500}}>
        Provide feedback. Share insights. Give your opinions.
      </Atom.Heading>
    </Atom.Flex>
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
        <Atom.Heading as="h4" xxl>
          Everything Is An Experiment
        </Atom.Heading>
        <Atom.Paragraph>
          <strong>
            The 1MillionDev stewards are committed to growing the Ethereum
            ecosystem.
          </strong>{' '}
          We acknowledge that we don't have all the answers. Sometimes we'll get
          things right, but more often then not we'll probably get a few things
          wrong. <strong>That's where we need you.</strong> We think the
          community is our biggest asset... hence why we are helping grow the
          Ethereum ecosystem.
        </Atom.Paragraph>
        <Atom.Paragraph>
          To reach our lofty goal of 1,000,000 Ethereum developers we
          approaching each task we do as an experiment.
        </Atom.Paragraph>
        <Atom.Heading as="h4" xl>
          Everything Is An Experiment
        </Atom.Heading>
        <Atom.Paragraph>
          The 1MillionDevs are not selling a product. We are not here to shill
          an ICO. There is no focus on creating a revenue generating stream. We
          are building a movement around a community of unique people and
          individuals. Our focus is to empower each and everyone in our
          community.
        </Atom.Paragraph>
        <Atom.Paragraph>
          The #1MillionDevs stewards will use the{' '}
          <strong>scientific method approach</strong> in everything we do.
        </Atom.Paragraph>
        <Atom.Paragraph>
          We are going to regularily publish new experiments (
          <em>tools, resources, mini-applications, etc...</em>) that will test
          our different hypothesis for how we best grow the Ethereum ecosystem.
        </Atom.Paragraph>
        <Atom.Paragraph>
          To validate our different hypothesis, we will need You, a member of
          thethe Ethereum community, to help us figure out if we are moving in
          the right or wrong direction.
        </Atom.Paragraph>
      </Atom.Container>
    </Atom.Box>
  );
};

export default PageHome;
