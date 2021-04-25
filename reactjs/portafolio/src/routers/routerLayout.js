import React, { Suspense } from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom'
import Layout from '../contains/layout'
import BriefcaseRouter from './briefcaseRouter'

function RouterLayout() {
  return (
    <Router>
      <Suspense fallback={<h1>Cargando...</h1>}>
        <Switch>
            <Route path="/" name="Layout" render={props => <Layout {...props}/>} />
            <Route exact path="/briefcases" name="Briefcases" render={props => <BriefcaseRouter {...props}/>} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default RouterLayout;

