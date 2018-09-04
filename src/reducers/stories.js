export default (state = {}, action) => {
  switch (action.type) {
    case "ADD_STORY" :
      return [...state, action.story]
    default :
      return state
  }
};