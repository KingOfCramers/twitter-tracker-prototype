export default (state = {}, action) => {
  switch (action.type) {
    case "SHOW_MODAL" :
      return {
        visible: true
      }
    case "HIDE_MODAL" :
      return {
        visible: false
      }
    default :
      return {
        visible: false
      }
  }
};