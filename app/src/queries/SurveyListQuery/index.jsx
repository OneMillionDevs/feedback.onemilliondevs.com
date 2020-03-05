/* --- Global --- */
import {StaticQuery, graphql} from 'gatsby';

/* --- SurveyListQuery : Component --- */
const SurveyListQuery = props => (
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
                  surveyQuestions
                  surveyTime
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
          <Atom.Box card sx={{}}>
            <Atom.Heading as="h2" sx={{color: 'blue', fontSize: [1, 1, 2]}}>
              {node.childMdx.frontmatter.title}
            </Atom.Heading>
            <Atom.Heading as="h4" sx={{fontSize: [1], fontWeight: 'normal'}}>
              {node.childMdx.frontmatter.subtitle}
            </Atom.Heading>
            {props.isDescriptionEnabled && (
              <Atom.Paragraph sx={{fontSize: [0, 0, 1]}}>
                {node.childMdx.frontmatter.summary}
              </Atom.Paragraph>
            )}
            <Atom.Flex>
              <Atom.Heading as="h5" sx={{fontSize: [0, 0, 1]}}>
                <Atom.Span sx={{fontWeight: 700}}>Questions:</Atom.Span>{' '}
                <Atom.Span sx={{fontWeight: 300}}>
                  {node.childMdx.frontmatter.surveyQuestions}
                </Atom.Span>
              </Atom.Heading>
              <Atom.Heading as="h5" sx={{fontSize: [0, 0, 1], ml: 3}}>
                <Atom.Span sx={{fontWeight: 700}}>Time Estimate:</Atom.Span>{' '}
                <Atom.Span sx={{fontWeight: 300}}>
                  {node.childMdx.frontmatter.surveyTime}
                </Atom.Span>
              </Atom.Heading>
              <Atom.Heading as="h5" sx={{fontSize: [0, 0, 1], ml: 3}}>
                <Atom.Span sx={{fontWeight: 700}}>Reward:</Atom.Span>{' '}
                <Atom.Span sx={{fontWeight: 300}}>
                  {node.childMdx.frontmatter.surveyReward || 'No Reward'}
                </Atom.Span>
              </Atom.Heading>
            </Atom.Flex>
            <Molecule.Link to={`survey/${node.childMdx.frontmatter.alias}`}>
              <Atom.Button green sm>
                View Survey
              </Atom.Button>
            </Molecule.Link>
          </Atom.Box>
        ),
      )
    }
  />
);

export default SurveyListQuery;
