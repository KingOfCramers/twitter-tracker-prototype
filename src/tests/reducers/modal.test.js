import modalReducer from "../../reducers/modal";

test("Should set modal state to visible", () => {
  const action = {
    type: "SHOW_MODAL"
  }
  const state = modalReducer({}, action);
  expect(state.visible).toBe(true);

});

test("Should set redux state to invisible", () => {
  const action1 = {
    type: "HIDE_MODAL"
  }
  const action2 = {
    type: "HIDE_MODAL"
  }
  modalReducer({}, action1);
  const state = modalReducer({}, action2);
  expect(state.visible).toBe(false);

});