exports.allMDXContent = graphql =>
  graphql(
    `
      {
        allMdx {
          edges {
            node {
              fields {
                id
              }
              tableOfContents
              fields {
                title
                language
                alias
              }
            }
          }
        }
      }
    `,
  );

exports.coreMDXContent = graphql =>
  graphql(
    `
      {
        contentCore: allFile(
          filter: {sourceInstanceName: {eq: "content-core"}}
        ) {
          edges {
            node {
              relativeDirectory
              childMdx {
                frontmatter {
                  alias
                  title
                  subtitle
                }
              }
            }
          }
        }
      }
    `,
  );

exports.surveysMDXContent = graphql =>
  graphql(
    `
      {
        contentCore: allFile(
          filter: {sourceInstanceName: {eq: "content-surveys"}}
        ) {
          edges {
            node {
              id
              relativeDirectory
              childMdx {
                frontmatter {
                  alias
                  title
                  subtitle
                  image
                  imageCover
                  formName
                }
                body
                rawBody
              }
            }
          }
        }
      }
    `,
  );

exports.articleMDXContent = graphql =>
  graphql(
    `
      {
        contentCore: allFile(
          filter: {sourceInstanceName: {eq: "content-articles"}}
        ) {
          edges {
            node {
              id
              relativeDirectory
              childMdx {
                frontmatter {
                  alias
                  title
                  subtitle
                }
                body
                rawBody
              }
            }
          }
        }
      }
    `,
  );
