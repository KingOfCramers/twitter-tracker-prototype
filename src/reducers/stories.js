export default (state = {}, action) => {
  switch (action.type) {
    case "ADD_STORY" :
      return [...state, action.story]
    case "SET_STORIES" :
      return action.stories
    default :
      return state
  }
};