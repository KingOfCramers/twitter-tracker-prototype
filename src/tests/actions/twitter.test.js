import configureMockStore from "redux-mock-store"
import thunk from "redux-thunk";
import handles from "../fixtures/twitter";
import database from "../../firebase/firebase";
import { setTwitter, startSetTwitter } from "../../actions/twitter";

const uid = "oisfdhw89enaosfa";
const defaultAuthState = { auth: { uid } };
const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
  const twitterData = {};
  handles.forEach(({ handle, id }) => {
    twitterData[id] = { handle };
  });
  database.ref(`users/${uid}/twitter`).set(twitterData).then(() => done());
});

xtest("Should fetch twitter data from firebase", () => {
  const store = createMockStore(defaultAuthState);
  store.dispatch(startSetTwitter()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: "SET_TWITTER",
      handles
    })
  })
});