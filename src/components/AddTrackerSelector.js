import React from "react";
import AddTrackerForm from "./AddTrackerForm";

export class AddTrackerSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'Twitter'
    };
    this.handleChange = this.handleChange.bind(this);
  };

  handleChange(event) {
    this.setState({ type: event.target.value });
  }

  render() {
    return (
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
          <AddTrackerForm type={this.state.type}/>
        </label>
      </form>
    );
  }
}

export default AddTrackerSelector;