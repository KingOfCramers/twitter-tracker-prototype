import twitterReducer from "../../reducers/twitter";

test("Should add handle to redux state", () => {
  const action = { // example of auth login object...
    type: "ADD_HANDLE",
    handle: "harrisoncramer"
  }
  const state = twitterReducer({}, action);
  expect(state[0]).toEqual("harrisoncramer");
});
/*
test("Should set starting stories", () => {
  const action = { // example of auth login object...
    type: "SET_STORIES",
    stories: [stories[1], stories[2]]
  };
  const state = twitterReducer({}, action);
  expect(state).toEqual([stories[1], stories[2]]);
});*/