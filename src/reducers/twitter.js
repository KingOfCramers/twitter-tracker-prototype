export default (state = {}, action) => {
  switch (action.type) {
    case "ADD_HANDLE" :
      return [...state, action.handle]
    case "SET_HANDLES" :
      return action.twitter
    default :
      return []
  }
};