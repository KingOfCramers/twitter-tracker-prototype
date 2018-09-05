import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

import StoryList from "./StoryList"; // Dashboard page fetches the data about all the stories someone has in the database and diplays the correct number of stories accordingly.
import Modal from "./Modal";

class DashboardPage extends React.Component {

  render(){
    return (
      <div>
         <StoryList />
         {this.props.visible && <Modal />}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  visible: state.modal.visible
});

export default connect(mapStateToProps)(DashboardPage);