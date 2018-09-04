export default (state = {}, action) => {
  switch (action.type) {
    case "SET_TWITTER" :
      return action.twitter
    default :
      return state
  }
};