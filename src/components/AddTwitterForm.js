import React from "react";
import { startAddHandle } from "../actions/twitter";
import { connect } from 'react-redux';

export class AddTwitterForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      handle: ""
    };
  };

  onHandleChange = (e) => {
    const handle = e.target.value;
    this.setState(() => ({ handle }));
  };

  onSubmit = (e) => {
    e.preventDefault();
    let handle = this.state.handle;
    this.props.startAddHandle({ handle, story_id: this.props.story_id });
  };

  render(){
    return (
      <div className="content-container">
        <form>
          <input
            type="text"
            placeholder="handle..."
            autoFocus
            value={this.state.handle}
            onChange={this.onHandleChange}
            className="text-input"
            required
          />
          <button onClick={this.onSubmit} disabled={!this.state.handle}>Add Handle</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddHandle: (handle) => dispatch(startAddHandle(handle))
});

export default connect(undefined, mapDispatchToProps)(AddTwitterForm);