// React
import React from 'react';
import { Router, Route, Switch } from 'react-router-dom'; // Only use Route for public routes...
import PrivateRoute from "./PrivateRoute"; // HOC of Route.
import PublicRoute from "./PublicRoute"; // HOC of Route.

// History
import createHistory from "history/createBrowserHistory";
export const history = createHistory();

// Components
import DashboardPage from "../components/DashboardPage";
import FourOhFour from "../components/FourOhFour";
import Login from "../components/Login";
import EditStoryPage from "../components/EditStoryPage";
import StoryForm from "../components/StoryForm";

const AppRouter = () => (
  <Router history={history} >
    <div>
      <Switch>
        <PublicRoute path="/" component={Login} exact={true} />
        <PrivateRoute path="/dashboard" component={DashboardPage} />
        <PrivateRoute path="/create" component={StoryForm} />
        <PrivateRoute path="/story/:id" exact={true} component={EditStoryPage} />
        <PrivateRoute path="/story/:id/edit" component={StoryForm} />
        <Route component={FourOhFour}/>
      </Switch>
    </div>
  </Router>
);

export default AppRouter;