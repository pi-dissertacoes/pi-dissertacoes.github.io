import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/microsite/blog',
    component: ComponentCreator('/microsite/blog', 'c7c'),
    exact: true
  },
  {
    path: '/microsite/blog/archive',
    component: ComponentCreator('/microsite/blog/archive', '5a5'),
    exact: true
  },
  {
    path: '/microsite/blog/first-blog-post',
    component: ComponentCreator('/microsite/blog/first-blog-post', '5ee'),
    exact: true
  },
  {
    path: '/microsite/blog/long-blog-post',
    component: ComponentCreator('/microsite/blog/long-blog-post', '468'),
    exact: true
  },
  {
    path: '/microsite/blog/mdx-blog-post',
    component: ComponentCreator('/microsite/blog/mdx-blog-post', '77d'),
    exact: true
  },
  {
    path: '/microsite/blog/tags',
    component: ComponentCreator('/microsite/blog/tags', '2f4'),
    exact: true
  },
  {
    path: '/microsite/blog/tags/docusaurus',
    component: ComponentCreator('/microsite/blog/tags/docusaurus', '9da'),
    exact: true
  },
  {
    path: '/microsite/blog/tags/facebook',
    component: ComponentCreator('/microsite/blog/tags/facebook', '48c'),
    exact: true
  },
  {
    path: '/microsite/blog/tags/hello',
    component: ComponentCreator('/microsite/blog/tags/hello', 'a70'),
    exact: true
  },
  {
    path: '/microsite/blog/tags/hola',
    component: ComponentCreator('/microsite/blog/tags/hola', 'c70'),
    exact: true
  },
  {
    path: '/microsite/blog/welcome',
    component: ComponentCreator('/microsite/blog/welcome', '6af'),
    exact: true
  },
  {
    path: '/microsite/markdown-page',
    component: ComponentCreator('/microsite/markdown-page', 'd42'),
    exact: true
  },
  {
    path: '/microsite/docs',
    component: ComponentCreator('/microsite/docs', '72e'),
    routes: [
      {
        path: '/microsite/docs',
        component: ComponentCreator('/microsite/docs', 'c92'),
        routes: [
          {
            path: '/microsite/docs',
            component: ComponentCreator('/microsite/docs', '85b'),
            routes: [
              {
                path: '/microsite/docs/category/tutorial---basics',
                component: ComponentCreator('/microsite/docs/category/tutorial---basics', '254'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/microsite/docs/category/tutorial---extras',
                component: ComponentCreator('/microsite/docs/category/tutorial---extras', '952'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/microsite/docs/intro',
                component: ComponentCreator('/microsite/docs/intro', '609'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/microsite/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/microsite/docs/tutorial-basics/congratulations', 'dcc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/microsite/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/microsite/docs/tutorial-basics/create-a-blog-post', '085'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/microsite/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/microsite/docs/tutorial-basics/create-a-document', '0f2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/microsite/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/microsite/docs/tutorial-basics/create-a-page', '8e3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/microsite/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/microsite/docs/tutorial-basics/deploy-your-site', '0f3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/microsite/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/microsite/docs/tutorial-basics/markdown-features', '541'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/microsite/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/microsite/docs/tutorial-extras/manage-docs-versions', 'a26'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/microsite/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/microsite/docs/tutorial-extras/translate-your-site', '9eb'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/microsite/',
    component: ComponentCreator('/microsite/', '372'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
