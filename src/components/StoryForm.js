import React from "react";
import { connect } from "react-redux";
import { startAddStory, startRemoveStory, startEditStory } from "../actions/stories";
import { SingleDatePicker } from "react-dates"; // From airbnb datepicker
import { Link } from "react-router-dom";
import moment from "moment";
import 'react-dates/initialize'

class StoryForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      story: props.story ? props.story.story : "",
      description: props.story ? props.story.description : "",
      dueDate: props.story ? moment(props.story.dueDate) : moment(),
      calendarFocused: false,
      error: ""
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
    if(!this.state.story || !this.state.description){
      this.setState(() => ({ error: "Please set a title and description."}))
    } else {
      let dueDate = this.state.dueDate.valueOf();
      const story = {
        story: this.state.story,
        description: this.state.description,
        dueDate
      };
      if(this.props.match.path === "/story/:id/edit/settings"){ // If we're on an edit page...
        this.props.startEditStory(this.props.story.id, story);
        this.props.history.push(`/story/${this.props.story.id}/edit`);
      } else {
        this.props.startAddStory(story);
        this.props.history.push("/")
      }
    }
  };

  onRemove = () => {
    this.props.startRemoveStory({ id: this.props.story.id });
    this.props.history.push("/");
  };

  onDateChange = (dueDate) => {
    if(dueDate){
      this.setState(() => ({ dueDate }));
    }
  };

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };

  onBack = () => {
    if(this.props.story){
      this.props.history.push(`/story/${this.props.story.id}/edit`);
    } else {
      this.props.history.push('/');
    }
  };

  render(){
    return (
      <div className="content-container">
      <button onClick={this.onBack} className="button--secondary">Cancel</button>
        {this.state.error && <p className="form__error">{this.state.error}</p>}
        <form>
          <input
            type="text"
            autoFocus
            placeholder="Add title..."
            value={this.state.story}
            onChange={this.onStoryChange}
            className="text-input"
            required
          />
          <input
            type="text"
            placeholder="Add description..."
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
          <button onClick={this.onSubmit} className="button">Confirm Changes</button>
        </form>
        { this.props.match.path === "/story/:id/edit/settings" && <button className="button--third" onClick={this.onRemove}>Remove</button> }
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({ // we have access to the props as the second argument here.
    story: state.stories.find((story) => story.id === props.match.params.id) // the props.match.params comes from the Router (it's part of the URL)
});


const mapDispatchToProps = (dispatch) => ({
  startAddStory: (story) => dispatch(startAddStory(story)),
  startRemoveStory: (story) => dispatch(startRemoveStory(story)),
  startEditStory: (id, updates) => dispatch(startEditStory(id, updates))
});

export default connect(mapStateToProps, mapDispatchToProps)(StoryForm);
