import React from "react";
import { connect } from "react-redux";
import Tweet from "./Tweet";
import { startSetHandles } from "../actions/twitter";
// store.dispatch(startSetStories()).then(() => {
class TweetList extends React.Component {

  componentDidMount(){
    this.props.startSetHandles({ story_id: this.props.story_id });
  }

  render(){
    return (
      <div>
        { this.props.twitter.length === 0 ? (
          <p>No handles.</p>
        ) : (
            this.props.twitter.map((handle) => {
              return <Tweet key={handle.id} handle={handle.handle} />
            })
          )}
        </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  twitter: state.twitter
});

const mapDispatchToProps = (dispatch) => ({
  startSetHandles: ({ story_id }) => dispatch(startSetHandles({ story_id }))
});


export default connect(mapStateToProps, mapDispatchToProps)(TweetList);