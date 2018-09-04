import React from 'react';
import { Link } from 'react-router-dom';
import StoryIcon from "./StoryIcon";
import AddStoryIcon from "./AddStoryIcon";

// Dashboard page fetches the data about all the stories someone has in the database and diplays the correct number of stories accordingly.
const DashboardPage = () => (
  <div>
    <StoryIcon />
    <AddStoryIcon />
  </div>
);

export default DashboardPage;