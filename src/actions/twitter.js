// import moment from "moment";
import database from "../firebase/firebase";

export const addHandle = ({ handle }) => ({
  type: "ADD_HANDLE",
  handle
});

export const startAddHandle = ({ handle, story_id }) => {
  return (dispatch, getState) => {
    /// Get other data from state here... to create handle.
    const twitter = { handle };
    // console.log(story_id);
    const uid = getState().auth.uid;

    return database.ref(`users/${uid}/stories/${story_id}/twitter`).push(twitter)
      .then((ref) => {
        dispatch(addHandle({ handle }))
      });
  };
};