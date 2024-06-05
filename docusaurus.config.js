// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "DISSERTAÇÕES",
  tagline: "Dissertations Made Simple",
  favicon: "img/icons/logo_min.svg",

  //staticDirectories: ['static'],

  // Set the production url of your site here
  url: "https://pi-dsd.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/microsite/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "pi-dsd", // Usually your GitHub org/user name.
  projectName: "microsite", // Usually your repo name.
  trailingSlash: false,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "DISSERTAÇÕES",
        logo: {
          alt: "dsd_logo",
          src: "img/icons/logo_min.svg",
        },
        items: [
          {
            type: "docsVersionDropdown",
          },
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Documentation",
          },
          { to: "/milestones", label: "Milestones", position: "left" },
          {
            href: "https://dissertacoes.av.it.pt/",
            label: "Our Website",
            position: "right",
          },
          {
            href: "https://github.com/detiuaveiro/dsd",
            label: "GitHub",
            position: "right",
          },
          {
            href: "https://github.com/orgs/detiuaveiro/projects/25/views/1",
            label: "Backlog",
            position: "right",
          },
          {
            href: "https://drive.google.com/drive/folders/1vwznbTZrtqVU5NMSli3AQfWFhG4GNvT2?usp=sharing",
            label: "Drive",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        logo: {
          alt: 'Our repo Logo',
          src: '/img/icons/github-mark-white.svg',
          href: 'https://github.com/pi-dsd/microsite',
          width: 24,
          height: 24,
        },
        copyright: `Projeto em Informática <br>
        Dissertações
        <br> Copyright © ${new Date().getFullYear()}`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
