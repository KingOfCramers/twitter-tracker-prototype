import React from 'react';
import { connect } from "react-redux";
import moment from "moment";
import { startRemoveStory } from "../actions/stories"

class EditStoryPage extends React.Component {

  onRemove = () => {
    this.props.removeStory({ id: this.props.story.id });
    this.props.history.push("/");
  }

  render(props){
    return (
     <div>
      <p>{this.props.story.story}</p>
      <p>{this.props.story.description}</p>
      <p>{moment(this.props.story.dueDate).format("LL")}</p>
      <button onClick={this.onRemove}>Remove</button>
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