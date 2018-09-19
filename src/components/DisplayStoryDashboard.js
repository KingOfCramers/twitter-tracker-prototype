import React from 'react';
import { connect } from "react-redux";
import moment from "moment";
import AddTrackerSelector from "./AddTrackerSelector";
import { startRemoveStory } from "../actions/stories";
import { Link } from "react-router-dom";

export class EditStoryDashboard extends React.Component {

  onBack = () => {
    this.props.history.push("/");
  };

  onEdit = () => {
    this.props.history.push(`/story/${this.props.story.id}/edit`);
  };


/// https://codepen.io/danbuda/pen/mAVALa
  render(props){
    return (
    <div className="content-container">
      <nav className="story-nav">
        <button onClick={this.onBack} className="button--secondary">Home</button>
        <button onClick={this.onEdit} className="button">Edit</button>
      </nav>
      <div className='story-info'>
        <h2 className='story-info__title'>{this.props.story.story}</h2>
        <p className='story-info__feature'><span>{moment(this.props.story.dueDate).format("LL")}</span></p>
        <p className='story-info__feature'>{this.props.story.description}</p>
      </div>
    </div>
    );
  }
}

const mapStateToProps = (state, props) => ({ // we have access to the props as the second argument here.
    story: state.stories.find((story) => story.id === props.match.params.id) // the props.match.params comes from the Router (it's part of the URL)
});

export default connect(mapStateToProps)(EditStoryDashboard);