
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink,
    Redirect,
} from 'react-router-dom'
import RouterLayout from './routerLayout'
import BriefcaseRouter from './briefcaseRouter'

function Page404() {  
  return (
    <div className="container card text-center color-white display-3 bg-primary">
      Error 404
    </div>
  );
}


function Page500() {  
  return (
    <div className="container card text-center color-white display-3 bg-danger">
      Error 500
    </div>
  );
}


function AppRouter() {
  return (
    <Router>
        <Switch>
            <Route exact path="/" name="Home">render={<RouterLayout />}</Route>
            <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />
            <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
            <Route path="*"><Redirect to="/" /></Route>
        </Switch>
    </Router>
  );
}
export default AppRouter