import database from "../firebase/firebase";

export const setTwitter = (twitter) => {
  type: "SET_TWITTER",
  twitter
}

export const startSetTwitter = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/twitter`).once("value")
      .then((snapshot) => {
        const twitter = [];
        snapshot.forEach((childsnapshot) => {
          twitter.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });
        dispatch(setTwitter(twitter));
      });
  };
};