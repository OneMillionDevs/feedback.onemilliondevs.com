/* --- Global --- */
import {Helmet} from 'react-helmet';

const SearchEngineOptimization = props => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>Feedback - One Million Devs</title>
      <meta property="og:url" content="http://feedback.onemilliondevs.com" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Feedback - One Million Devs" />
      <meta
        property="og:description"
        content="Provide feedback on the latest One Million Devs experiments."
      />
    </Helmet>
  );
};

export default SearchEngineOptimization;
