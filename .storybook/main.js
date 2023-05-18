const path = require('path')
module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-styling',
      options: {},
    },
  ],
  // webpackFinal: async (config) => {
  //   config.module.rules.push({
  //     test: /\.scss$/,
  //     use: [
  //       'style-loader',
  //       {
  //         loader: 'css-loader',
  //         options: {
  //           modules: {
  //             auto: true,
  //           },
  //         },
  //       },
  //       'sass-loader',
  //     ],
  //     include: path.resolve(__dirname, '../'),
  //   })
  //   config.resolve.roots = [path.resolve(__dirname, '../src'), 'node_modules']
  //   return config
  // },
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  features: {
    buildStoriesJson: true,
  },
  docs: {
    autodocs: true,
  },
}
