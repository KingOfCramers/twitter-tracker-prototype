import React from "react";
import AddTwitterForm from "./AddTwitterForm";

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
        return <AddTwitterForm story_id={this.props.story_id}/>
      default :
        return <p>Nothing!</p>
    };
  };

  render() {
    return (
      <div>
      <form>
        <label>
          <select type={this.state.type} onChange={this.handleChange}>
            <option type="Twitter">Twitter</option>
            <option type="Legislation">Legislation</option>
            <option type="Lobbying">Lobbying</option>
            <option type="Court Cases">Court Cases</option>
            <option type="Federal Register">Federal Register</option>
            <option type="Campaigns">Campaigns</option>
          </select>
        </label>
      </form>
      {this.pickForm()}
      </div>
    );
  }
}

export default AddTrackerSelector;