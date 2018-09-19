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

  render(props){
    return (
    <div className="content-container">
      <button onClick={this.onBack} className="button--secondary">Home</button>
      <button onClick={this.onEdit} className="button">Edit</button>
      <div className='story-info'>
      <h2>{this.props.story.story}</h2>
        <p>{moment(this.props.story.dueDate).format("LL")}</p>
        <p>{this.props.story.description}</p>
      </div>
    </div>
    );
  }
}

const mapStateToProps = (state, props) => ({ // we have access to the props as the second argument here.
    story: state.stories.find((story) => story.id === props.match.params.id) // the props.match.params comes from the Router (it's part of the URL)
});

export default connect(mapStateToProps)(EditStoryDashboard);