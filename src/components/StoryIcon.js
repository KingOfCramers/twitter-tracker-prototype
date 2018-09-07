import React from 'react';
import { connect } from "react-redux";
import { startRemoveStory } from "../actions/stories";
import moment from "moment";

export const StoryIcon = (props) => (
  <div>
    <h2>{props.story}</h2>
    <p>{props.description}</p>
    <p>{moment(props.dueDate).format("LL")}</p>
    <button className="button--secondary" onClick={props.startRemoveStory}>Remove Story</button>
  </div>
);

const mapDispatchToProps = (dispatch, props) => ({
  startRemoveStory: () => dispatch(startRemoveStory({ id: props.id }))
});

export default connect(undefined, mapDispatchToProps)(StoryIcon);