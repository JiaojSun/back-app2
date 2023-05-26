import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'ae5'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '208'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '032'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'cb2'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'e95'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'e6e'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'c5d'),
    exact: true
  },
  {
    path: '/Demo/',
    component: ComponentCreator('/Demo/', 'f13'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '095'),
    routes: [
      {
        path: '/docs/',
        component: ComponentCreator('/docs/', 'a8c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/classes/Customer',
        component: ComponentCreator('/docs/classes/Customer', '7c5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/enums/EnumLikeObject',
        component: ComponentCreator('/docs/enums/EnumLikeObject', 'b75'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/interfaces/AdminUser',
        component: ComponentCreator('/docs/interfaces/AdminUser', '6fe'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/interfaces/CardAProps',
        component: ComponentCreator('/docs/interfaces/CardAProps', '1e5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/interfaces/EasyFormDialogProps',
        component: ComponentCreator('/docs/interfaces/EasyFormDialogProps', '51a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/interfaces/User',
        component: ComponentCreator('/docs/interfaces/User', '9d0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/modules',
        component: ComponentCreator('/docs/modules', 'db3'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '0ce'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
