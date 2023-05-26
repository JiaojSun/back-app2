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
    component: ComponentCreator('/docs', 'dec'),
    routes: [
      {
        path: '/docs/api/',
        component: ComponentCreator('/docs/api/', 'aee'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/api/classes/Customer',
        component: ComponentCreator('/docs/api/classes/Customer', '64c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/api/enums/EnumLikeObject',
        component: ComponentCreator('/docs/api/enums/EnumLikeObject', 'd41'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/api/interfaces/AdminUser',
        component: ComponentCreator('/docs/api/interfaces/AdminUser', '750'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/api/interfaces/CardAProps',
        component: ComponentCreator('/docs/api/interfaces/CardAProps', '6b8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/api/interfaces/EasyFormDialogProps',
        component: ComponentCreator('/docs/api/interfaces/EasyFormDialogProps', '4fe'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/api/interfaces/User',
        component: ComponentCreator('/docs/api/interfaces/User', 'aaa'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/api/modules',
        component: ComponentCreator('/docs/api/modules', '98a'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
