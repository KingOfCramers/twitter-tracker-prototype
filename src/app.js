// React
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";

// Redux + History
import configureStore from "./store/configureStore";
import { login, logout } from "./actions/auth";
import AppRouter, { history } from "./routers/AppRouter";
import { startSetStories } from "./actions/stories";

// Loading Page
import Loading from "./components/Loading";

let hasRendered = false;
const renderApp = () => {
  if(!hasRendered){
    ReactDOM.render(jsx, document.getElementById('app'));
  }
  hasRendered = true;
}

// Styles
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import "react-dates/lib/css/_datepicker.css"; // From airbnb datepicker

// Firebase
import "./firebase/firebase";
import { firebase } from "./firebase/firebase";
const store = configureStore();

// Routes
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(<Loading />, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
  if(user){
    store.dispatch(login(user.uid)); // Store uid prop inside Redux state.
    store.dispatch(startSetStories()).then(() => {
      renderApp(); // If logged in, render app w/ user data.
      if (history.location.pathname === "/") { // On login page, to to dashboard.
        history.push("/dashboard")
      }
    });
  } else {
    store.dispatch(logout()); // Remove uid.
    renderApp(); // Dont fetch data, rereoute to main login.
    history.push("/");
  };
});