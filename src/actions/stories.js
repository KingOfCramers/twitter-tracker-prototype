import database from "../firebase/firebase";

export const removeStory = ({ id } = {}) => ({
  type: "REMOVE_STORY",
  id
});

export const startRemoveStory = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/stories/${id}`).remove()
      .then(() => {
        dispatch(removeStory({ id }));
      });
  };
};

export const addStory = (story) => ({
  type: "ADD_STORY",
  story,
});

export const startAddStory = ({ story, dueDate, description }) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const newStory = { story, dueDate, description }

    return database.ref(`users/${uid}/stories`).push(newStory).then((ref) => {
      dispatch(addStory({
        id: ref.key,
        ...newStory
      }));
    });
  };
};

export const setStories = (stories) => ({
  type: "SET_STORIES",
  stories
});


export const startSetStories = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/stories`).once("value")
      .then((snapshot) => {
        const stories = [];
        snapshot.forEach((childSnapshot) => {
          stories.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          })
        });
        dispatch(setStories(stories));
      });
  };
};