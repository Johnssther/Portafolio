import React, { Suspense } from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink,
    Redirect
} from 'react-router-dom'
import Briefcase from '../views/briefcase'
import BriefcaseDetails from '../views/briefcaseDetails'

function Content() {

  return (
    <Router>
          <NavLink to="/briefcases" className="color-dark">
      <div className="card container cursor-pointer">
      Ver Portafolio
      </div>
          </NavLink>
      <Suspense fallback={<h1>Cargando...</h1>}>
        <Switch>
            <Route exact path="/briefcases" name="Briefcases" render={props => <Briefcase {...props}/>} />
            <Route path="/briefcases/:id" name="Briefcases details" render={props => <BriefcaseDetails {...props}/>} />
        </Switch>
        </Suspense>
    </Router>
  );
}

export default Content;

