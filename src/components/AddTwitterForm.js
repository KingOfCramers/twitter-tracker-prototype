import React from "react";
import { startAddHandle } from "../actions/twitter";
import { connect } from 'react-redux';

export class AddTwitterForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      handle: "",
      error: ""
    };
  };

  onHandleChange = (e) => {
    const handle = e.target.value;
    this.setState(() => ({ handle }));
  };

  onSubmit = (e) => {
    e.preventDefault();
    if(!this.state.handle){
         this.setState(() => ({ error: "Please add a handle."}))
    } else {
      this.props.startAddHandle({ handle: this.state.handle, story_id: this.props.story_id })
      .then(() => this.setState({ handle: "", error: "" }))
    }
  };

  render(){
    return (
      <div>
        {this.state.error && <p className="form__error">{this.state.error}</p>}
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
          <button onClick={this.onSubmit} className="button">Add Handle</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddHandle: (handle) => dispatch(startAddHandle(handle))
});

export default connect(undefined, mapDispatchToProps)(AddTwitterForm);