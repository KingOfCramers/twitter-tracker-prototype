import React from 'react';
import { Link } from 'react-router-dom';
import StoryIcon from "./StoryIcon";
import AddStoryIcon from "./AddStoryIcon";
import { connect } from "react-redux";

// Dashboard page fetches the data about all the stories someone has in the database and diplays the correct number of stories accordingly.
const DashboardPage = (props) => (
  <div>
    <StoryIcon />
    <AddStoryIcon />
  </div>
);

const mapStateToProps = (state, props) => {

};
export default DashboardPage;