import React from "react";
import { connect } from "react-redux";
import { showModal, hideModal } from "../actions/modal";

export const Modal = (props) => (
  <div>
    <p>Hello!</p>
    <button onClick={() => props.hideModal()}/>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  hideModal: () => dispatch(hideModal())
});


export default connect(undefined, mapDispatchToProps)(Modal);