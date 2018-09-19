import React from 'react';
import { connect } from "react-redux";
import moment from "moment";
import { Link } from "react-router-dom"

export const StoryIcon = (props) => (
  <div>
    <Link to={`/story/${props.id}`} className="story-list--icon">
      <h3 className="story-list--icon__title">{props.story.substring(0,25)}</h3>
      <p className="story-list--icon__feature">{props.description.substring(0,40)}</p>
      <p className="story-list--icon__feature">{moment(props.dueDate).format("LL")}</p>
    </Link>
  </div>
);

export default StoryIcon;