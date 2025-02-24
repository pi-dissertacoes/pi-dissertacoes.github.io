import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/milestones',
    component: ComponentCreator('/milestones', '74e'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '7d8'),
    routes: [
      {
        path: '/docs/1.0',
        component: ComponentCreator('/docs/1.0', 'beb'),
        routes: [
          {
            path: '/docs/1.0',
            component: ComponentCreator('/docs/1.0', '2e3'),
            routes: [
              {
                path: '/docs/1.0/intro',
                component: ComponentCreator('/docs/1.0/intro', '31e'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      },
      {
        path: '/docs/1.1',
        component: ComponentCreator('/docs/1.1', 'ab0'),
        routes: [
          {
            path: '/docs/1.1',
            component: ComponentCreator('/docs/1.1', '517'),
            routes: [
              {
                path: '/docs/1.1/category/about-the-platform',
                component: ComponentCreator('/docs/1.1/category/about-the-platform', '4ac'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1.1/category/about-the-project',
                component: ComponentCreator('/docs/1.1/category/about-the-project', '43d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1.1/intro',
                component: ComponentCreator('/docs/1.1/intro', '170'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1.1/The Platform/architecture',
                component: ComponentCreator('/docs/1.1/The Platform/architecture', '5be'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1.1/The Platform/Prototype',
                component: ComponentCreator('/docs/1.1/The Platform/Prototype', 'd4a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1.1/The Platform/Requirements',
                component: ComponentCreator('/docs/1.1/The Platform/Requirements', 'c39'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1.1/The Platform/tecnologies',
                component: ComponentCreator('/docs/1.1/The Platform/tecnologies', '8e9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1.1/The Problem',
                component: ComponentCreator('/docs/1.1/The Problem', 'dd4'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      },
      {
        path: '/docs/1.2',
        component: ComponentCreator('/docs/1.2', '9bf'),
        routes: [
          {
            path: '/docs/1.2',
            component: ComponentCreator('/docs/1.2', 'fe8'),
            routes: [
              {
                path: '/docs/1.2/category/about-the-platform',
                component: ComponentCreator('/docs/1.2/category/about-the-platform', '65c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1.2/category/about-the-project',
                component: ComponentCreator('/docs/1.2/category/about-the-project', '5f4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1.2/intro',
                component: ComponentCreator('/docs/1.2/intro', '18c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1.2/The Backend Implementation/action_flow',
                component: ComponentCreator('/docs/1.2/The Backend Implementation/action_flow', '905'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1.2/The Backend Implementation/api_Instances',
                component: ComponentCreator('/docs/1.2/The Backend Implementation/api_Instances', 'a3e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1.2/The Backend Implementation/databases',
                component: ComponentCreator('/docs/1.2/The Backend Implementation/databases', '9a4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1.2/The Backend Implementation/docker_kubernetes',
                component: ComponentCreator('/docs/1.2/The Backend Implementation/docker_kubernetes', '301'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1.2/The Backend Implementation/load_balancer',
                component: ComponentCreator('/docs/1.2/The Backend Implementation/load_balancer', '67c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1.2/The Platform/architecture',
                component: ComponentCreator('/docs/1.2/The Platform/architecture', '1c2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1.2/The Platform/Deployment',
                component: ComponentCreator('/docs/1.2/The Platform/Deployment', '0e8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1.2/The Platform/Prototype',
                component: ComponentCreator('/docs/1.2/The Platform/Prototype', '423'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1.2/The Platform/Requirements',
                component: ComponentCreator('/docs/1.2/The Platform/Requirements', '747'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1.2/The Platform/tecnologies',
                component: ComponentCreator('/docs/1.2/The Platform/tecnologies', 'f4d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1.2/The Platform/Usability Tests',
                component: ComponentCreator('/docs/1.2/The Platform/Usability Tests', 'b64'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1.2/The Platform/UseCases',
                component: ComponentCreator('/docs/1.2/The Platform/UseCases', '80c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1.2/The Problem',
                component: ComponentCreator('/docs/1.2/The Problem', '91f'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      },
      {
        path: '/docs/next',
        component: ComponentCreator('/docs/next', 'c0d'),
        routes: [
          {
            path: '/docs/next',
            component: ComponentCreator('/docs/next', '5d5'),
            routes: [
              {
                path: '/docs/next/category/about-the-platform',
                component: ComponentCreator('/docs/next/category/about-the-platform', 'd21'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/next/category/about-the-project',
                component: ComponentCreator('/docs/next/category/about-the-project', '8db'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/next/intro',
                component: ComponentCreator('/docs/next/intro', 'ad0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/next/The Backend Implementation/action_flow',
                component: ComponentCreator('/docs/next/The Backend Implementation/action_flow', '0e7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/next/The Backend Implementation/api_Instances',
                component: ComponentCreator('/docs/next/The Backend Implementation/api_Instances', '67b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/next/The Backend Implementation/databases',
                component: ComponentCreator('/docs/next/The Backend Implementation/databases', '9fc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/next/The Backend Implementation/docker_kubernetes',
                component: ComponentCreator('/docs/next/The Backend Implementation/docker_kubernetes', '37b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/next/The Backend Implementation/load_balancer',
                component: ComponentCreator('/docs/next/The Backend Implementation/load_balancer', '36e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/next/The Platform/architecture',
                component: ComponentCreator('/docs/next/The Platform/architecture', '5a8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/next/The Platform/Deployment',
                component: ComponentCreator('/docs/next/The Platform/Deployment', 'd09'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/next/The Platform/Heuristic_Evaluation',
                component: ComponentCreator('/docs/next/The Platform/Heuristic_Evaluation', '548'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/next/The Platform/Prototype',
                component: ComponentCreator('/docs/next/The Platform/Prototype', 'a67'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/next/The Platform/Requirements',
                component: ComponentCreator('/docs/next/The Platform/Requirements', 'e1a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/next/The Platform/tecnologies',
                component: ComponentCreator('/docs/next/The Platform/tecnologies', '71a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/next/The Platform/Usability Tests',
                component: ComponentCreator('/docs/next/The Platform/Usability Tests', '57b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/next/The Platform/UseCases',
                component: ComponentCreator('/docs/next/The Platform/UseCases', 'e0a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/next/The Problem/demo',
                component: ComponentCreator('/docs/next/The Problem/demo', '8d1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/next/The Problem/index',
                component: ComponentCreator('/docs/next/The Problem/index', '89a'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      },
      {
        path: '/docs',
        component: ComponentCreator('/docs', '100'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'f9e'),
            routes: [
              {
                path: '/docs/category/about-the-platform',
                component: ComponentCreator('/docs/category/about-the-platform', '5ae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/about-the-project',
                component: ComponentCreator('/docs/category/about-the-project', '71e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '1ee'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/The Backend Implementation/action_flow',
                component: ComponentCreator('/docs/The Backend Implementation/action_flow', 'ac8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/The Backend Implementation/api_Instances',
                component: ComponentCreator('/docs/The Backend Implementation/api_Instances', 'adf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/The Backend Implementation/databases',
                component: ComponentCreator('/docs/The Backend Implementation/databases', '76d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/The Backend Implementation/docker_kubernetes',
                component: ComponentCreator('/docs/The Backend Implementation/docker_kubernetes', 'f38'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/The Backend Implementation/load_balancer',
                component: ComponentCreator('/docs/The Backend Implementation/load_balancer', 'c43'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/The Platform/architecture',
                component: ComponentCreator('/docs/The Platform/architecture', 'c5e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/The Platform/Deployment',
                component: ComponentCreator('/docs/The Platform/Deployment', '7d5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/The Platform/Heuristic_Evaluation',
                component: ComponentCreator('/docs/The Platform/Heuristic_Evaluation', '323'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/The Platform/Prototype',
                component: ComponentCreator('/docs/The Platform/Prototype', '27d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/The Platform/Requirements',
                component: ComponentCreator('/docs/The Platform/Requirements', '01b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/The Platform/tecnologies',
                component: ComponentCreator('/docs/The Platform/tecnologies', '5b3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/The Platform/Usability Tests',
                component: ComponentCreator('/docs/The Platform/Usability Tests', '2c7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/The Platform/UseCases',
                component: ComponentCreator('/docs/The Platform/UseCases', '631'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/The Problem/demo',
                component: ComponentCreator('/docs/The Problem/demo', 'e11'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/The Problem/index',
                component: ComponentCreator('/docs/The Problem/index', '5d3'),
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
    path: '/',
    component: ComponentCreator('/', '417'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
