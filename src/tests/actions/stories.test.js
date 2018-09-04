import configureMockStore from "redux-mock-store"
import thunk from "redux-thunk";
import database from "../../firebase/firebase";
import { addStory, startAddStory } from "../../actions/stories";
import stories from "../fixtures/stories";

const uid = "oisfdhw89enaosfa";
const defaultAuthState = { auth: { uid } };
const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
  const storyData = {};
  stories.forEach(({ story, deadline, id }) => {
    storyData[id] = { story, deadline };
  });
  database.ref(`users/${uid}/`).set(storyData).then(() => done());
});

test("Should create addStory action object", () => {
  const action = addStory(stories[1]);
  expect(action).toEqual({
    type: "ADD_STORY",
    story: stories[1]
  });
});

test("Should add story to firebase and store in Redux", (done) => {
  const store = createMockStore(defaultAuthState);
  const newStory = {
    story: "Breaking investigative piece",
    deadline: 28930131
  };

  store.dispatch(startAddStory(newStory)).then(() => { // startAdd...
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_STORY',
      story: {
        id: expect.any(String),
        ...newStory
      }
    });
    return database.ref(`users/${uid}/${actions[0].story.id}`).once("value");
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(newStory);
    done();
  });
});