import React from "react";
import { connect } from "react-redux";
import { hideModal } from "../actions/modal";
import { startAddStory } from "../actions/stories";

export class Modal extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      story: props.story ? props.story : "",
    }
  };

  onStoryChange = (e) => {
    const story = e.target.value;
    this.setState(() => ({ story }));
  };

  onSubmit = (e) => {
    e.preventDefault();
    const story = e.target.value;
    this.props.startAddStory({ story });
    this.props.hideModal();
  };

  render(){
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="story name..."
            autoFocus
            value={this.state.story}
            onChange={this.onStoryChange}
            className="text-input"
          />
          <button onClick={this.onSubmit}/>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  hideModal: () => dispatch(hideModal()),
  startAddStory: (story) => dispatch(startAddStory(story))
});


export default connect(undefined, mapDispatchToProps)(Modal);