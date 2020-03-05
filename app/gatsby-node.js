/* --- Global --- */
const path = require('path');

/* --- Local --- */
const {surveysMDXContent, articleMDXContent} = require(`./gatsby-query`);
const webpack = require('./config/webpack/webpack.gatsby.config');
const {babelConfig, webpackConfig} = webpack;

/* --- Configuration --- */
exports.onCreateBabelConfig = babelConfig;
exports.onCreateWebpackConfig = webpackConfig;

/* --- Constants --- */
const ARTICLES_BUILD = false;
const SURVEY_BUILD = true;

/* ------------------------------- */
/* --------- Gatsby Build -------- */
/* ------------------------------- */
exports.onCreatePage = ({page, actions}) => {
  const {createPage, deletePage} = actions;
};

exports.createPages = async ({graphql, actions}) => {
  const {createPage} = actions;
  const SurveyTemplate = path.resolve(
    './src/layouts/templates/Survey/index.jsx',
  );
  const ArticleTemplate = path.resolve(
    './src/layouts/templates/Article/index.jsx',
  );

  /* --- Experiment : Generate --- */
  if (SURVEY_BUILD) {
    const surveys = await surveysMDXContent(graphql);
    if (surveys.errors) {
      console.error(surveys.errors);
      return;
    }

    surveys.data.contentCore.edges.forEach(({node}) => {
      createPage({
        path: `survey/${node.childMdx.frontmatter.alias}`,
        component: SurveyTemplate,
        context: {
          id: node.id,
          body: node.childMdx.body,
          title: node.childMdx.frontmatter.title,
          subtitle: node.childMdx.frontmatter.subtitle,
          image: node.childMdx.frontmatter.image,
          imageCover: node.childMdx.frontmatter.imageCover,
          formName: node.childMdx.frontmatter.formName,
        },
      });
    });
  }

  /* --- Articles : Generate --- */
  if (ARTICLES_BUILD) {
    const articles = await articleMDXContent(graphql);
    if (articles.errors) {
      console.error(result.errors);
      return;
    }

    articles.data.contentCore.edges.forEach(({node}) => {
      createPage({
        path: `article/${node.childMdx.frontmatter.alias}`,
        component: ArticleTemplate,
        context: {
          id: node.id,
          body: node.childMdx.body,
          title: node.childMdx.frontmatter.title,
          subtitle: node.childMdx.frontmatter.subtitle,
        },
      });
    });
  }
};

exports.onCreateNode = ({node, getNode, actions}) => {
  const {createNodeField} = actions;

  if (node.internal.type === `Mdx`) {
    const frontmatter = node.frontmatter;

    createNodeField({
      name: 'id',
      node,
      value: node.id,
    });

    createNodeField({
      name: `alias`,
      node,
      value: frontmatter.alias,
    });
    createNodeField({
      name: 'language',
      node,
      value: node.frontmatter.language || 'en',
    });
    createNodeField({
      name: 'title',
      node,
      value: node.frontmatter.title,
    });
    createNodeField({
      name: 'subtitle',
      node,
      value: node.frontmatter.subtitle,
    });
    createNodeField({
      name: 'formName',
      node,
      value: node.frontmatter.formName,
    });
  }
};
