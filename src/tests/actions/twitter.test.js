import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import database from "../../firebase/firebase";
import { addHandle, startAddHandle } from "../../actions/twitter.js"
import stories from "../fixtures/stories";
import { startAddStory } from "../../actions/stories";

const uid = "j089puiqWo0837hfuO9";
const defaultAuthState = { auth: { uid } };
const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
    const storyData = {};
    stories.forEach(({ id, story, deadline }) => {
      stories[id] = { story, deadline };
    });
    database.ref(`users/${uid}/stories`).set(storyData).then(() => done());
});

test("Should create twitter action object", () => {
  const action = addHandle("harrisoncramer");
  expect(action).toEqual({
    type: "ADD_HANDLE",
    handle: "harrisoncramer"
  });
});

test("Should post handle to firebase", (done) => {
  const store = createMockStore(defaultAuthState);
  const story_id = stories[1].id;
  // console.log(story_id);
  store.dispatch(startAddHandle({ handle: "harrisoncramer", story_id }))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "ADD_HANDLE",
        handle: {
          handle: "harrisoncramer",
          id: expect.any(String)
        }
      });
    });
    done();
});