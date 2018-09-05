export default (state = {}, action) => {
  switch (action.type) {
    case "ADD_HANDLE" :
      return [...state, action.handle]
    case "REMOVE_STORY" :
      return state.filter((story) => {
        return story.id !== action.id;
      });
    case "SET_STORIES" :
      return action.stories
    default :
      return state
  }
};