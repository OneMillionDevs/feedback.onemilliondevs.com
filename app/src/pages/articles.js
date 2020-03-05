/* --- Global --- */

/* --- Local --- */
import {SEO} from '@components';
/* --- Component --- */
const PageArticles = props => {
  return (
    <>
      <SEO />
      <Featured />
    </>
  );
};

const Featured = props => {
  return (
    <Atom.Box>
      <Atom.Container
        sx={{
          py: 5,
          p: 4,
          maxWidth: ['100%', '100%', 550, 700],
          zIndex: 1000,
        }}>
        <Atom.Heading
          sx={{
            fontSize: [5, 5, 6],
            my: 4,
            textAlign: 'center',
          }}>
          Coming Soon
        </Atom.Heading>
      </Atom.Container>
    </Atom.Box>
  );
};
export default PageArticles;
