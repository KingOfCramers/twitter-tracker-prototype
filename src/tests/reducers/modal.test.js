import modalReducer from "../../reducers/modal";

test("Should set modal state to visible", () => {
  const action = { // example of auth login object...
    type: "SHOW_STORY_MODAL"
  }
  const state = modalReducer({}, action);
  expect(state.visible).toBe(true);

});

test("Should set redux state to invisible", () => {
  const action = { // example of auth login object...
    type: "HIDE_STORY_MODAL"
  }
  const state = modalReducer({}, action);
  expect(state.visible).toBe(false);

});