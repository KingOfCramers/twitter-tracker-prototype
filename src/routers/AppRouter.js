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
import EditStoryDashboard from "../components/EditStoryDashboard";
import DisplayStoryDashboard from "../components/DisplayStoryDashboard";
import StoryForm from "../components/StoryForm";

const AppRouter = () => (
  <Router history={history} >
    <div>
      <Switch>
        <PublicRoute path="/" component={Login} exact={true} />
        <PrivateRoute path="/dashboard" component={DashboardPage} />
        <PrivateRoute path="/story/create" component={StoryForm} />
        <PrivateRoute path="/story/:id" exact={true} component={DisplayStoryDashboard} />
        <PrivateRoute path="/story/:id/edit" exact={true} component={EditStoryDashboard} />
        <PrivateRoute path="/story/:id/edit/settings" component={StoryForm} />
        <Route component={FourOhFour}/>
      </Switch>
    </div>
  </Router>
);

export default AppRouter;