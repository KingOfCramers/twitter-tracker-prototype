import React from 'react';
import { connect } from "react-redux";
import moment from "moment";
import AddTrackerSelector from "./AddTrackerSelector";
import { startRemoveStory } from "../actions/stories";
import { Link } from "react-router-dom";

export class EditStoryPage extends React.Component {

  onBack = () => {
    this.props.history.push("/");
  };

  render(props){
    return (
     <div className="content-container">
      <button className="button--secondary" onClick={this.onBack}>Back</button>
      <div className='story-info'>
        <Link to={`/story/${this.props.story.id}/edit`}>
          <h2>{this.props.story.story}</h2>
          <p>{this.props.story.description}</p>
          <p>{moment(this.props.story.dueDate).format("LL")}</p>
        </Link>
      </div>
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

export default connect(mapStateToProps)(EditStoryPage);