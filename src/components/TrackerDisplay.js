import React from "react";
import { connect } from "react-redux";

export const TrackerDisplay = (props) => (
  <div>
    {props.type}
  </div>
);

const mapStateToProps = (state, props) => {
  const story = state.stories.find((story) => story.id === props.story_id);
  return {
    twitter: story.twitter
  }
};

export default connect(mapStateToProps)(TrackerDisplay)