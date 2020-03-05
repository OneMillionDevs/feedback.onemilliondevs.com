/* --- Global --- */
import {StaticQuery, graphql} from 'gatsby';
/* --- Component --- */
const ExperimentPreview = () => (
  <StaticQuery
    query={graphql`
      {
        contentCore: allFile(
          filter: {sourceInstanceName: {eq: "content-surveys"}}
        ) {
          edges {
            node {
              id
              relativeDirectory
              childMdx {
                excerpt
                body
                frontmatter {
                  alias
                  title
                  subtitle
                  summary
                  image
                  imageCover
                }
              }
            }
          }
        }
      }
    `}
    render={data =>
      data.contentCore.edges.map(({node}) =>
        !node.childMdx ? null : (
          <Atom.Box card sx={{mx: 3, mb: 5}}>
            <Atom.Box
              sx={{
                mt: -3,
                mx: -3,
                mb: 3,
                minHeight: 200,
              }}>
              <Atom.BackgroundImage
                ratio={0.2}
                src={node.childMdx.frontmatter.imageCover}
                sx={{}}
              />
            </Atom.Box>
            <Atom.Box sx={{p: 3}}>
              <Atom.Heading as="h2" xxl>
                {node.childMdx.frontmatter.title}
              </Atom.Heading>
              <Atom.Heading as="h4" lg normal>
                {node.childMdx.frontmatter.subtitle}
              </Atom.Heading>
              <Atom.Paragraph>
                {node.childMdx.frontmatter.summary}
              </Atom.Paragraph>
              <Molecule.Link
                to={`survey/${node.childMdx.frontmatter.alias}`}
                sx={{mt: 5}}>
                <Atom.Button
                  gradient="blue"
                  direction={180}
                  lg
                  sx={{width: '100%'}}>
                  View Survey
                </Atom.Button>
              </Molecule.Link>
            </Atom.Box>
          </Atom.Box>
        ),
      )
    }
  />
);

export default ExperimentPreview;
