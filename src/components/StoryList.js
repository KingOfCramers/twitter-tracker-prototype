import React from 'react';
import { Link } from 'react-router-dom';
import StoryIcon from "./StoryIcon";
import { connect } from "react-redux";

// Dashboard page fetches the data about all the stories someone has in the database and diplays the correct number of stories accordingly.
const StoryList = (props) => (
  <div>
    <div className="story-list">
      <h3>Title</h3>
      <h3>Description</h3>
      <h3>Due Date</h3>
    </div>
    {props.stories.length === 0 ? (
      <p>No stories</p>
    ) : (
      props.stories.map((story) => {
        return <StoryIcon key={story.id} {...story}/>
      })
    )}
  </div>
);

const mapStateToProps = (state, props) => ({
  stories: state.stories
});

export default connect(mapStateToProps)(StoryList);