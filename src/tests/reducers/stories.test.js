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

test("Should set starting stories", () => {
  const action = { // example of auth login object...
    type: "SET_STORIES",
    stories: [stories[1], stories[2]]
  };
  const state = storiesReducer({}, action);
  expect(state).toEqual([stories[1], stories[2]]);
});