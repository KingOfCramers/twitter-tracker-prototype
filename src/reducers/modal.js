export default (state = {}, action) => {
  switch (action.type) {
    case "SHOW_MODAL" :
      return {
        visible: true,
        title: "Cancel"
      }
    case "HIDE_MODAL" :
      return {
        visible: false,
        title: "Add Story"
      }
    default :
      return {
        visible: false,
        title: "Add Story"
      }
  }
};