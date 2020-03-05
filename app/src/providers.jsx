/* --- Global --- */
import {ThemeProvider} from 'theme-ui';
import {FirebaseProvider} from '@horizin/firebase-system';
import 'react-perfect-scrollbar/dist/css/styles.css';

/* --- Local --- */
import './assets/css/reset.css';
import './assets/css/App.css';
import theme from './assets/theme';

export default ({element}) => {
  return (
    <ThemeProvider theme={theme}>
      <FirebaseProvider>{element}</FirebaseProvider>
    </ThemeProvider>
  );
};
