import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

import StoryList from "./StoryList";

// Dashboard page fetches the data about all the stories someone has in the database and diplays the correct number of stories accordingly.
const DashboardPage = () => (
  <div>
    <StoryList />
  </div>
);

export default DashboardPage;