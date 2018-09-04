import database from "../firebase/firebase";

export const addStory = (story) => ({
  type: "ADD_STORY",
  story
});

export const startAddStory = ({ story = "", deadline = 0} = {}) => {
  return (dispatch, getState) => {
    const newStory = { story, deadline };
    const uid = getState().auth.uid;

    return database.ref(`users/${uid}/`).push(newStory).then((ref) => {
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
    return database.ref(`users/${uid}/`).once("value")
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