import React from 'react';
import { connect } from "react-redux";
import moment from "moment";

class EditStoryPage extends React.Component {
  render(props){
    return (
     <div>
      <p>{this.props.story.story}</p>
      <p>{this.props.story.description}</p>
      <p>{moment(this.props.story.dueDate).format("LL")}</p>
    </div>
    );
  }
}

const mapStateToProps = (state, props) => { // we have access to the props as the second argument here.
  console.log("State is", state, "Props are", props)
  return {
    story: state.stories.find((story) => story.id === props.match.params.id) // the props.match.params comes from the Router (it's part of the URL)
  }
};

export default connect(mapStateToProps)(EditStoryPage);