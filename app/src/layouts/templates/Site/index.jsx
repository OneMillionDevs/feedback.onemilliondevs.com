/* --- Local --- */
import {RegionTop, RegionFooter} from '@regions';
import styled, {injectGlobal} from 'react-emotion';

/* --- Global Style --- */
injectGlobal`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    font-family: -apple-system,
      BlinkMacSystemFont,
      "Segoe UI",
      "Roboto",
      "Roboto Light",
      "Oxygen",
      "Ubuntu",
      "Cantarell",
      "Fira Sans",
      "Droid Sans",
      "Helvetica Neue",
      sans-serif,
      "Apple Color Emoji",
      "Segoe UI Emoji",
      "Segoe UI Symbol";

    font-size: 16px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .bp3-overlay.bp3-overlay-open {
    position: relative;
    z-index: 1000;
  }

`;

/* --- Components --- */
const Layout = ({children}) => (
  <>
    <RegionTop />
    <main>{children}</main>
    <RegionFooter />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
