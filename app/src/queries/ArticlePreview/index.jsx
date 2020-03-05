/* --- Global --- */
import {StaticQuery, graphql} from 'gatsby';

/* --- Component --- */
const ArticlePreview = () => (
  <StaticQuery
    query={graphql`
      {
        contentCore: allFile(
          filter: {sourceInstanceName: {eq: "content-articles"}}
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
                }
              }
            }
          }
        }
      }
    `}
    render={data =>
      data.contentCore.edges.map(({node}) => (
        <Atom.Box card sx={{mx: 3}}>
          <Atom.Heading as="h2" xxl>
            {node.childMdx.frontmatter.title}
          </Atom.Heading>
          <Atom.Heading as="h4" lg normal>
            {node.childMdx.frontmatter.subtitle}
          </Atom.Heading>
          <Atom.Paragraph>{node.childMdx.frontmatter.summary}</Atom.Paragraph>
          <Molecule.Link to={`article/${node.childMdx.frontmatter.alias}`}>
            <Atom.Button white sm>
              Read Article
            </Atom.Button>
          </Molecule.Link>
        </Atom.Box>
      ))
    }
  />
);

export default ArticlePreview;
