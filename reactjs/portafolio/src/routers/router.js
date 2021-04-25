import React from 'react';

const BriefcaseDetails = React.lazy(() => import('./contains/pages/briefcaseDetails'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/briefcases/:id', exact: true, name: 'Briefcase Details', component: BriefcaseDetails },
];

export default routes;