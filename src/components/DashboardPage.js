import React from 'react';
import { Link } from 'react-router-dom';

import StoryList from "./StoryList"; // Dashboard page fetches the data about all the stories someone has in the database and diplays the correct number of stories accordingly.

export class DashboardPage extends React.Component {

  onButtonClick = () => {
    this.props.history.push("/create");
  }

  render(){
    return (
      <div className="content-container">
         <StoryList />
         <button className="button" onClick={this.onButtonClick}>Add Story</button>
      </div>
    );
  }
}


export default DashboardPage;