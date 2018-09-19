import React from 'react';
import { connect } from "react-redux";
import moment from "moment";
import AddTrackerSelector from "./AddTrackerSelector";
import { startRemoveStory } from "../actions/stories";
import { Link } from "react-router-dom";

export class EditStoryDashboard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      display: "twitter"
    }
  };

  onView = () => {
    this.props.history.push(`/story/${this.props.story.id}`);
  };

  onSettings = () => {
    this.props.history.push(`/story/${this.props.story.id}/edit/settings`);
  };

  render(props){
    return (
     <div className="content-container">
     <div className='story-info'>
       <h2>{this.props.story.story}</h2>
       <p>{this.props.story.description}</p>
       <p>{moment(this.props.story.dueDate).format("LL")}</p>
     </div>
      <button className="button--secondary" onClick={this.onView}>Back</button>
      <button className="button" onClick={this.onSettings}>Settings</button>
      <div>
        <AddTrackerSelector story_id={this.props.story.id}/>
      </div>
    </div>
    );
  }
}

const mapStateToProps = (state, props) => ({ // we have access to the props as the second argument here.
    story: state.stories.find((story) => story.id === props.match.params.id) // the props.match.params comes from the Router (it's part of the URL)
});

export default connect(mapStateToProps)(EditStoryDashboard);