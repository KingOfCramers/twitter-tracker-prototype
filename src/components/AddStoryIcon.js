import React from 'react';
import { connect } from "react-redux";
import { startAddStory, startRemoveStory } from "../actions/stories";

export const AddStoryIcon = (props) => (
  <div>
    <button className="button" onClick={props.addStory}>Add Story</button>
  </div>
);

const mapDispatchToProps = (dispatch, props) => ({
  addStory: () => dispatch(startAddStory({ story: "This is new", deadline: 19039 })),
})

export default connect(undefined, mapDispatchToProps)(AddStoryIcon);