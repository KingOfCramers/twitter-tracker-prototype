import React from 'react';
import { connect } from "react-redux";
import moment from "moment";
import AddTrackerSelector from "./AddTrackerSelector"
import { startRemoveStory } from "../actions/stories"

export class EditStoryPage extends React.Component {

  onRemove = () => {
    this.props.removeStory({ id: this.props.story.id });
    this.props.history.push("/");
  }

  onBack = () => {
    this.props.history.push("/");
  };

  render(props){
    return (
     <div className="content-container">
      <button onClick={this.onBack}>Back</button>
      <h2>{this.props.story.story}</h2>
      <p>{this.props.story.description}</p>
      <p>{moment(this.props.story.dueDate).format("LL")}</p>
      <button onClick={this.onRemove}>Remove</button>
      <AddTrackerSelector story_id={this.props.story.id}/>
    </div>
    );
  }
}

const mapStateToProps = (state, props) => ({ // we have access to the props as the second argument here.
    story: state.stories.find((story) => story.id === props.match.params.id) // the props.match.params comes from the Router (it's part of the URL)
});

const mapDispatchToProps = (dispatch) => ({
  removeStory: (story) => dispatch(startRemoveStory(story))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditStoryPage);