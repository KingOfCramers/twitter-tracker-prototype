import React from 'react';
import { connect } from "react-redux";
import { startRemoveStory } from "../actions/stories";

export const StoryIcon = (props) => (
  <div>
    <h2>{props.story}</h2>
    <button className="button--secondary" onClick={props.startRemoveStory}>Remove Story</button>
  </div>
);

const mapDispatchToProps = (dispatch, props) => ({
  startRemoveStory: () => dispatch(startRemoveStory({ id: props.id }))
});

export default connect(undefined, mapDispatchToProps)(StoryIcon);