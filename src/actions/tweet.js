import database from "../firebase/firebase";

export const addHandle = ({ handle }) => ({
  type: "ADD_HANDLE",
  handle
});

export const startAddHandle = ({ handle, storyId }) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/stories/${id}`).once("value")
      .then((snapshot) => {
        console.log(snapshot);
      });
  };
};