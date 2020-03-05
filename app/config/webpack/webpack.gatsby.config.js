const path = require('path');

const defineWebpackPlugins = (actions, plugins) => {
  actions.setWebpackConfig({
    plugins: [
      plugins.provide({
        React: 'react',
      }),
      plugins.provide({
        PropTypes: 'prop-types',
      }),
    ],
  });
};

const babelConfig = ({actions}) => {
  actions.setBabelPlugin({
    name: '@babel/plugin-proposal-export-default-from',
  });
};

const webpackConfig = ({actions, plugins, stage, loaders, getConfig}) => {
  if (stage === 'build-html' || stage === 'develop-html') {
    actions.setWebpackConfig({
      externals: getConfig().externals.concat(function(
        context,
        request,
        callback,
      ) {
        const regex = /^@?firebase(\/(.+))?/;
        // exclude firebase products from being bundled, so they will be loaded using require() at runtime.
        if (regex.test(request)) {
          return callback(null, 'umd ' + request);
        }
        callback();
      }),
    });
  }
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      alias: {
        global: path.resolve(__dirname, '../../src/assets/global'),
        '@root': path.resolve(__dirname, ''),
        '@content': path.resolve(__dirname, '../../content'),
        '@config': path.resolve(__dirname, '../../config'),
        '@src': path.resolve(__dirname, '../../src'),
        '@assets': path.resolve(__dirname, '../../src/assets'),
        '@data': path.resolve(__dirname, '../../src/assets/data'),
        '@images': path.resolve(__dirname, '../../src/assets/images'),
        '@languages': path.resolve(__dirname, '../../src/assets/languages'),
        '@theme': path.resolve(__dirname, '../../src/assets/theme'),
        '@pages': path.resolve(__dirname, '../../src/pages'),
        '@datastore': path.resolve(__dirname, '../../src/graphql'),
        '@queries': path.resolve(__dirname, '../../src/queries'),
        '@components': path.resolve(__dirname, '../../src/components'),
        '@settings': path.resolve(__dirname, '../../src/settings'),
        '@forms': path.resolve(__dirname, '../../src/components/forms'),
        '@views': path.resolve(__dirname, '../../src/views'),
        '@layout': path.resolve(__dirname, '../../src/layouts/'),
        '@regions': path.resolve(__dirname, '../../src/layouts/regions'),
        '@templates': path.resolve(__dirname, '../../src/layouts/templates'),
      },
    },
    plugins: [
      plugins.provide({
        React: 'react',
      }),
      plugins.provide({
        PropTypes: 'prop-types',
      }),
      plugins.provide({
        GLOBAL: 'global',
      }),
      plugins.provide({
        Atom: '@horizin/atoms',
      }),
      plugins.provide({
        Molecule: '@horizin/molecules',
      }),
    ],
  });

  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-hooks-portal/,
            use: loaders.null(),
          },
          {
            test: /aws-amplify/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};

module.exports.babelConfig = babelConfig;
module.exports.webpackConfig = webpackConfig;
