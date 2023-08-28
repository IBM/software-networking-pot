import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/software-networking-pot/markdown-page',
    component: ComponentCreator('/software-networking-pot/markdown-page', 'bcc'),
    exact: true
  },
  {
    path: '/software-networking-pot/docs',
    component: ComponentCreator('/software-networking-pot/docs', '65a'),
    routes: [
      {
        path: '/software-networking-pot/docs/category/demo-scripts',
        component: ComponentCreator('/software-networking-pot/docs/category/demo-scripts', '2d9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/software-networking-pot/docs/category/sano-pot',
        component: ComponentCreator('/software-networking-pot/docs/category/sano-pot', '42f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/software-networking-pot/docs/category/setup-techzone-lab',
        component: ComponentCreator('/software-networking-pot/docs/category/setup-techzone-lab', 'ed1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/software-networking-pot/docs/Demos/actions',
        component: ComponentCreator('/software-networking-pot/docs/Demos/actions', 'ab3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/software-networking-pot/docs/Demos/add-targets',
        component: ComponentCreator('/software-networking-pot/docs/Demos/add-targets', '45e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/software-networking-pot/docs/Demos/administration',
        component: ComponentCreator('/software-networking-pot/docs/Demos/administration', 'd33'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/software-networking-pot/docs/Demos/explore-turbonomic',
        component: ComponentCreator('/software-networking-pot/docs/Demos/explore-turbonomic', '19a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/software-networking-pot/docs/Demos/hybridcloud',
        component: ComponentCreator('/software-networking-pot/docs/Demos/hybridcloud', '135'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/software-networking-pot/docs/Demos/lab-env',
        component: ComponentCreator('/software-networking-pot/docs/Demos/lab-env', 'cc0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/software-networking-pot/docs/Demos/overview',
        component: ComponentCreator('/software-networking-pot/docs/Demos/overview', '325'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/software-networking-pot/docs/Demos/planning',
        component: ComponentCreator('/software-networking-pot/docs/Demos/planning', '1d0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/software-networking-pot/docs/Demos/policies',
        component: ComponentCreator('/software-networking-pot/docs/Demos/policies', 'aa1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/software-networking-pot/docs/IBM SevOne Automated Network Observability/add-targets',
        component: ComponentCreator('/software-networking-pot/docs/IBM SevOne Automated Network Observability/add-targets', 'd10'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/software-networking-pot/docs/IBM SevOne Automated Network Observability/administration',
        component: ComponentCreator('/software-networking-pot/docs/IBM SevOne Automated Network Observability/administration', '1b9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/software-networking-pot/docs/IBM SevOne Automated Network Observability/alert',
        component: ComponentCreator('/software-networking-pot/docs/IBM SevOne Automated Network Observability/alert', 'c31'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/software-networking-pot/docs/IBM SevOne Automated Network Observability/api',
        component: ComponentCreator('/software-networking-pot/docs/IBM SevOne Automated Network Observability/api', 'a89'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/software-networking-pot/docs/IBM SevOne Automated Network Observability/Custom Monitoring',
        component: ComponentCreator('/software-networking-pot/docs/IBM SevOne Automated Network Observability/Custom Monitoring', 'aec'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/software-networking-pot/docs/IBM SevOne Automated Network Observability/groupingmeta',
        component: ComponentCreator('/software-networking-pot/docs/IBM SevOne Automated Network Observability/groupingmeta', '7e8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/software-networking-pot/docs/IBM SevOne Automated Network Observability/hfpoller',
        component: ComponentCreator('/software-networking-pot/docs/IBM SevOne Automated Network Observability/hfpoller', 'af8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/software-networking-pot/docs/IBM SevOne Automated Network Observability/lab-env',
        component: ComponentCreator('/software-networking-pot/docs/IBM SevOne Automated Network Observability/lab-env', '478'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/software-networking-pot/docs/IBM SevOne Automated Network Observability/overview',
        component: ComponentCreator('/software-networking-pot/docs/IBM SevOne Automated Network Observability/overview', 'dba'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/software-networking-pot/docs/IBM SevOne Automated Network Observability/pliant',
        component: ComponentCreator('/software-networking-pot/docs/IBM SevOne Automated Network Observability/pliant', '66f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/software-networking-pot/docs/IBM SevOne Automated Network Observability/reporting',
        component: ComponentCreator('/software-networking-pot/docs/IBM SevOne Automated Network Observability/reporting', 'd3c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/software-networking-pot/docs/intro',
        component: ComponentCreator('/software-networking-pot/docs/intro', '69d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/software-networking-pot/docs/Setup TechZone Lab/lab-env',
        component: ComponentCreator('/software-networking-pot/docs/Setup TechZone Lab/lab-env', 'd7a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/software-networking-pot/docs/Setup TechZone Lab/reserve',
        component: ComponentCreator('/software-networking-pot/docs/Setup TechZone Lab/reserve', '9d5'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/software-networking-pot/',
    component: ComponentCreator('/software-networking-pot/', '3bd'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
