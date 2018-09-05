import { showModal, hideModal } from "../../actions/modal";

test("Should return show action object", () => {
  const action = showModal();
  expect(action).toEqual({
    type: "SHOW_MODAL"
  });
});

test("Should return hide action object", () => {
  const action = hideModal();
  expect(action).toEqual({
    type: "HIDE_MODAL"
  });
});