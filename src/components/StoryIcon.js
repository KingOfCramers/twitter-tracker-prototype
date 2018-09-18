import React from 'react';
import { connect } from "react-redux";
import moment from "moment";
import { Link } from "react-router-dom"

export const StoryIcon = (props) => (
  <div>
    <Link to={`/story/${props.id}`} className="story-icon">
      <h2>{props.story}</h2>
      <p>{props.description}</p>
      <p>{moment(props.dueDate).format("LL")}</p>
    </Link>
  </div>
);

export default StoryIcon;