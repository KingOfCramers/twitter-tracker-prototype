import React from 'react';
import { connect } from "react-redux";
import { showModal } from "../actions/modal";

export const AddStoryIcon = (props) => (
  <div>
    <button className="button" onClick={props.showModal}>Add Story</button>
  </div>
);

const mapDispatchToProps = (dispatch, props) => ({
  showModal: () => dispatch(showModal())
})

export default connect(undefined, mapDispatchToProps)(AddStoryIcon);