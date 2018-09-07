import React from 'react';
import { Link } from 'react-router-dom';
import StoryIcon from "./StoryIcon";
import AddStoryIcon from "./AddStoryIcon";
import { connect } from "react-redux";

// Dashboard page fetches the data about all the stories someone has in the database and diplays the correct number of stories accordingly.
const StoryList = (props) => (
  <div className="content-container">
    {props.stories.length === 0 ? (
      <p>No stories</p>
    ) : (
      props.stories.map((story) => {
        return <StoryIcon key={story.id} {...story}/>
      })
    )}
    <AddStoryIcon />
  </div>
);

const mapStateToProps = (state, props) => ({
  stories: state.stories
});

export default connect(mapStateToProps)(StoryList);