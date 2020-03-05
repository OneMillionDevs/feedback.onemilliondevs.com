/**
 * @name RegionFooter
 * @description Default footer region for application.
 */
/* --- Global --- */
import {Link} from '@reach/router';

/* --- Local --- */
import logo from '@assets/images/logo.jpg';

/* --- Component --- */
export default props => {
  return (
    <Atom.Box>
      <Atom.Flex
        alignCenter
        between
        column
        gradient="blue"
        direction={180}
        sx={{variant: 'regions.footer'}}>
        {/* Left */}
        <Atom.Flex center column sx={{color: 'white'}}>
          <Atom.Image
            sx={{
              bg: 'white',
              borderRadius: 9999,
              border: '1px solid #FFF',
              boxShadow: 2,
              my: 3,
              transition: '0.2s all',
              top: 0,
              width: 55,
              '&:hover': {
                boxShadow: 4,
                top: -1,
              },
            }}
            src={logo}
          />
          <Atom.Box sx={{textAlign: 'center'}}>
            <Link to="/">
              <Atom.Heading xl heavy mb={3}>
                feedback.onemilliondevs.com
              </Atom.Heading>
            </Link>
          </Atom.Box>
        </Atom.Flex>

        {/* Right */}

        {/* <Atom.Span sx={{fontSize: 1}}>
          Give us feedback. Share important insights. Express Your opinion.
        </Atom.Span> */}
        <Atom.Span sx={{fontSize: 1}}>
          Provide your feedback and insights with the 1MillionDevs Stewards.
        </Atom.Span>
        <Molecule.Link to="/about" sx={{mt: 3}}>
          <Atom.Span tag sm>
            About
          </Atom.Span>
        </Molecule.Link>
      </Atom.Flex>
    </Atom.Box>
  );
};
