/* --- Global --- */
import PerfectScrollbar from 'react-perfect-scrollbar';

/* --- Local --- */
import {SurveyListQuery} from '@queries';
/* --- SurveyListWithScrollbar : Component --- */
const SurveyListWithScrollbar = props => {
  return (
    <Atom.Box card sx={{height: 420}}>
      <PerfectScrollbar>
        <Atom.Flex column sx={{px: 4}}>
          <SurveyListQuery />
        </Atom.Flex>
      </PerfectScrollbar>
    </Atom.Box>
  );
};
export default SurveyListWithScrollbar;
