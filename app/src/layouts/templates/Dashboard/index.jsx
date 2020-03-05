import {RegionAside, RegionTopDashboard, RegionFooter} from '@regions';
import styles from './styles';
const DashboardTemplate = ({sx, sxMain, styled, children, ...props}) => {
  return (
    <Atom.Flex
      column
      sx={{
        bg: 'paper',
        color: 'text',
        minHeight: '100vh',
        overflow: 'hidden',
        flex: 1,
      }}>
      <Atom.Flex
        sx={{
          flex: 1,
          flexDirection: ['column', 'column', 'row', 'row'],
        }}>
        <RegionAside
          sx={{
            bg: '#27359e',
            boxShadow: 2,
            color: 'white',
            flex: [1, 1, 4, 3],
            zIndex: 1000,
          }}
        />
        <Atom.Flex
          column
          sx={{
            flex: [7, 7, 12, 14],
            overflow: 'auto',
            zIndex: 50,
          }}>
          <RegionTopDashboard />
          <Atom.Flex column sx={{flex: 1, ...sxMain}}>
            {children}
          </Atom.Flex>
          {/* <RegionFooter /> */}
        </Atom.Flex>
      </Atom.Flex>
    </Atom.Flex>
  );
};

export default DashboardTemplate;
