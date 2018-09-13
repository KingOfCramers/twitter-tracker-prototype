// import moment from "moment";
import database from "../firebase/firebase";


export const setHandles = (twitter) => ({
  type: "SET_HANDLES",
  twitter
});


export const startSetHandles = ({ story_id }) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/stories/${story_id}/twitter`).once("value")
      .then((snapshot) => {
        const twitter = [];
        snapshot.forEach((childSnapshot) => {
          twitter.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          })
        });
        dispatch(setHandles(twitter));
      });
  };
};

export const addHandle = (handle) => ({
  type: "ADD_HANDLE",
  handle
});

export const startAddHandle = ({ handle, story_id }) => {
  return (dispatch, getState) => {
    const twitter = { handle };
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/stories/${story_id}/twitter`).push(twitter)
      .then((ref) => {
        dispatch(addHandle({
        id: ref.key,
        ...twitter
      }));
    });
  };
};