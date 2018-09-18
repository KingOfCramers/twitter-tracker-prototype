import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from "react-redux";
import { startLogout } from "../actions/auth"; // A function...

export const Header = ({ startLogout }) => ( // Props need to be imported in a stateless functional here!
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link to="/dashboard" className="header__title">
          <h1>Storyful</h1>
        </Link>
        <button className="button--secondary" onClick={startLogout}>Log out</button>
      </div>
    </div>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);