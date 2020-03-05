/**
 * @name RegionTop
 * @description Default top region for application.
 */
/* --- Global --- */
import {Link} from 'gatsby';

/* --- Local --- */
import {GithubLogin, ColorMode} from '@components';
import logo from '@assets/images/logo.jpg';

/* --- Top : Region --- */
export default props => (
  <Atom.Flex alignCenter between sx={{variant: 'regions.header'}}>
    {/* Left */}
    <Atom.Flex alignCenter sx={{flex: 1, width: '100%'}}>
      <Atom.Flex alignCenter sx={{flex: 1}}>
        <Molecule.Link to="/">
          <Atom.Flex alignCenter>
            <Atom.Span sx={{mr: 3}}>
              <Atom.Image src={logo} sx={{width: 25}} />
            </Atom.Span>
            <Atom.Heading as="h1" normal sx={{fontSize: [0, 0, 1], mb: 0}}>
              feedback.
              <Atom.Span sx={{fontWeight: 700}}>onemilliondevs.com</Atom.Span>
            </Atom.Heading>
          </Atom.Flex>
        </Molecule.Link>
      </Atom.Flex>

      {/* Menu */}
      <Atom.Flex center sx={{flex: 1}}></Atom.Flex>

      {/* Right */}
      <Atom.Flex center sx={{flex: 1, justifyContent: 'flex-end'}}>
        <MenuPrimary />
        <Atom.Box sx={{ml: 3}}>
          <GithubLogin />
        </Atom.Box>
        <Atom.Box sx={{ml: 3}}>
          <ColorMode />
        </Atom.Box>
      </Atom.Flex>
    </Atom.Flex>
  </Atom.Flex>
);

/* --- Style --- */
const styleMenuItem = {
  fontSize: [1],
  my: 1,
  mx: 1,
  py: 2,
  flexDirection: 'column',
};
const styleMenuItemHover = {
  // color: 'white',
  opacity: 1,
  transform: 'scale(1.025)',
};
const styleMenuItemChildren = {
  fontSize: 1,
  my: 1,
  flexDirection: 'column',
};

const MenuPrimary = props => {
  return (
    <Molecule.Menu
      direction="row"
      sx={styleMenuItem}
      hover={styleMenuItemHover}
      sxChildren={styleMenuItemChildren}
      sxChild={{transition: 'all 0.2s'}}
      items={[
        {
          label: 'Surveys',
          to: '/surveys',
        },
        {
          label: 'About',
          to: '/about',
        },
      ]}
    />
  );
};
