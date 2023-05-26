// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// import lightCodeTheme from 'prism-react-renderer/themes/github';
// import darkCodeTheme from 'prism-react-renderer/themes/dracula';

/** @type {import('@docusaurus/types').Config} */
module.exports = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en']
  },
  // Additional plugins
  plugins: [
    [
      'docusaurus-plugin-typedoc',
      {
        entryPoints: ['./src/typedoc/index.ts'],
        tsconfig: './tsconfig.json',
        out: '.',
        // plugin: ['typedoc-plugin-mdn-links'],
        sidebar: {
          autoConfiguration: true,
          position: 0
        },
        cleanOutputDir: true
      }
    ]
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.ts')
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      })
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'My Site',
        items: [
          {
            to: 'docs/',
            docId: 'modules',
            label: 'API',
            position: 'left'
          }
        ]
      }
      // prism: {
      //   theme: lightCodeTheme,
      //   darkTheme: darkCodeTheme
      // }
    })
};
