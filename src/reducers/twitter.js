export default (state = {}, action) => {
  switch (action.type) {
    case "ADD_HANDLE" :
      return [...state, action.handle]
    default :
      return {}
  }
};