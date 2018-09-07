import React from "react";
import { connect } from "react-redux";
import { hideModal } from "../actions/modal";
import { startAddStory } from "../actions/stories";
import { SingleDatePicker } from "react-dates"; // From airbnb datepicker
import moment from "moment";
import 'react-dates/initialize'

export class Modal extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      story: "",
      description: "",
      dueDate: moment(),
      calendarFocused: false
    }
  };

  onStoryChange = (e) => {
    const story = e.target.value;
    this.setState(() => ({ story }));
  };

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };

  onSubmit = (e) => {
    e.preventDefault();
    let dueDate = this.state.dueDate.valueOf();
    const story = {
      story: this.state.story,
      description: this.state.description,
      dueDate
    };
    this.props.startAddStory(story);
    this.props.hideModal();
  };

  onDateChange = (dueDate) => {
    if(dueDate){
      this.setState(() => ({ dueDate }));
    }
  }

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  }

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
          <input
            type="text"
            placeholder="description"
            value={this.state.description}
            onChange={this.onDescriptionChange}
            className="text-input"
          />
          <SingleDatePicker
            date={this.state.dueDate}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={(day) => false}
          />
          <button onClick={this.onSubmit}>Add Story</button>
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