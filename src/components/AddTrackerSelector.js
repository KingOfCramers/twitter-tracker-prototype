import React from "react";
import AddTwitterForm from "./AddTwitterForm";
import TweetList from "./TweetList";

export class AddTrackerSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'Twitter'
    };
    this.handleChange = this.handleChange.bind(this);
    this.pickForm = this.pickForm.bind(this);
  };

  handleChange(event) {
    this.setState({ type: event.target.value });
  };

  pickForm(){
    switch(this.state.type) {
      case "Twitter" :
        return (
          <div>
            <TweetList story_id={this.props.story_id} />
            <AddTwitterForm story_id={this.props.story_id}/>
          </div>
          )
      default :
        return <p>Nothing!</p>
    };
  };

  render() {
    return (
      <div>
      <form>
        <label>
          <select className="tracker-selector" type={this.state.type} onChange={this.handleChange}>
            <option className="tracker-selector--option" type="Twitter">Twitter</option>
            <option className="tracker-selector--option" type="Legislation">Legislation</option>
            <option className="tracker-selector--option" type="Lobbying">Lobbying</option>
            <option className="tracker-selector--option" type="Court Cases">Court Cases</option>
            <option className="tracker-selector--option" type="Federal Register">Federal Register</option>
            <option className="tracker-selector--option" type="Campaigns">Campaigns</option>
          </select>
        </label>
      </form>
      {this.pickForm()}
      </div>
    );
  }
}

export default AddTrackerSelector;

