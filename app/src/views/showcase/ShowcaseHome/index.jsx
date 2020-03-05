import {FormEarlyRegistration} from '@forms';
import wave from '@assets/images/bump.png';

const ShowcaseHome = props => {
  return (
    <Atom.Flex
      center
      column
      sx={{
        color: 'white',
        minHeight: [0, 0, '90vh'],
        py: 5,
        pb: 7,
        zIndex: 1000,
      }}>
      <Atom.BackgroundGradient gradient="frost" direction={0} />
      <Atom.BackgroundImage
        ratio={0.2}
        src="https://images.unsplash.com/photo-1528605105345-5344ea20e269?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
        sx={{
          opacity: 0.5,
        }}
      />
      <Atom.Absolute sx={{bottom: 0, left: 0, right: 0}}>
        <Atom.Image src={wave} sx={{height: 130, width: '100%'}} />
      </Atom.Absolute>
      <Atom.Container>
        <Atom.Flex
          center
          sx={{
            flexDirection: ['column', 'column', 'row'],
          }}>
          {/* Left : Region */}
          <Atom.Box sx={{flex: 2}}>
            <Atom.Heading
              giga
              sx={{
                fontSize: [3, 3, 5, 42],
              }}>
              <Atom.Span sx={{fontWeight: 300}}>
                Unlocking Ethereum's Potential
              </Atom.Span>
              <br />
              <Atom.Span>Web3 Ecosystem Engineering</Atom.Span>
            </Atom.Heading>
            <Atom.Paragraph>
              <strong>
                The Ethereum blockchain is powering the Web3 revolution.
              </strong>
              <br />
              Join the thriving ecosystem.{' '}
              <em>Power your communities and networks.</em>
              <br />
            </Atom.Paragraph>
            {/* <Atom.Paragraph>
              Hire a Fullstack Javascript/Web3 Engineer to Accelate Your Success
              Metrics
            </Atom.Paragraph> */}
            <Atom.Flex alignCenter sx={{mt: 4}}>
              <Atom.Flex column>
                <Molecule.Link to="/dashboard" sx={{}}>
                  <Atom.Button tag sx={{px: 3}}>
                    <Atom.Flex alignCenter>
                      <Atom.Image
                        sx={{
                          borderRadius: 9999,
                          // boxShadow: 2,
                          width: 32,
                        }}
                        src={
                          'https://image.flaticon.com/icons/svg/139/139932.svg'
                        }
                      />
                      <Atom.Box sx={{ml: 2, textAlign: 'center'}}>
                        {/* <Atom.Span sm>Demo Application</Atom.Span> */}
                        <Atom.Span sx={{mb: 0}}>Horizin Demo App</Atom.Span>
                      </Atom.Box>
                    </Atom.Flex>
                  </Atom.Button>
                </Molecule.Link>
              </Atom.Flex>
              <Atom.Flex sx={{ml: 3}}>
                <Molecule.Link to="/projects">
                  <Atom.Span sx={{ml: 2}}>Projects</Atom.Span>
                </Molecule.Link>
                <Atom.Span sx={{mx: 2}}>|</Atom.Span>
                <Molecule.Link to="/experiments">
                  <Atom.Span>Experiments</Atom.Span>
                </Molecule.Link>
              </Atom.Flex>
            </Atom.Flex>
          </Atom.Box>
          {/* Right : Region */}
          <Atom.Box
            sx={{
              flex: 1,
              mt: 4,
              textAlign: 'center',
              width: ['100%', '100%', 450],
            }}>
            <Atom.Box
              card
              sx={{
                bg: 'rgba(255,255,255,0.6)',
              }}>
              <FormEarlyRegistration />
            </Atom.Box>
            <Atom.Span sm sx={{mt: 3}}>
              Register for early access to the Horizin Platform
            </Atom.Span>
            <br />
            <Atom.Span tag sm sx={{mt: 4}}>
              Learn More
            </Atom.Span>
          </Atom.Box>
        </Atom.Flex>
      </Atom.Container>
    </Atom.Flex>
  );
};

export default ShowcaseHome;
