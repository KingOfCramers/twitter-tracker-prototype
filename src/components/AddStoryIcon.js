import React from 'react';
import { connect } from "react-redux";
import { showModal, hideModal } from "../actions/modal";

export class AddStoryIcon extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: this.props.title
    }
  }

  onClick = (e) => {
    e.preventDefault();
    if(this.props.title === "Add Story"){
      this.props.showModal();
    } else {
      this.props.hideModal();
    }
  }

  render(){
    return (
      <div>
        <button className="button" onClick={this.onClick}>{this.props.title}</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  showModal: () => dispatch(showModal()),
  hideModal: () => dispatch(hideModal())
})

const mapStateToProps = (state) => ({
  visible: state.modal.visible,
  title: state.modal.title
})

export default connect(mapStateToProps, mapDispatchToProps)(AddStoryIcon);