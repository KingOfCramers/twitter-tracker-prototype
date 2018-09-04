import storiesReducer from "../../reducers/stories";
import stories from "../fixtures/stories";

test("Should add story to redux state", () => {
  const action = { // example of auth login object...
    type: "ADD_STORY",
    story: stories[1]
  }
  const state = storiesReducer({}, action);
  expect(state[0]).toEqual(stories[1]);
});