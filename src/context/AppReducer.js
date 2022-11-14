// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case "ADD_BOOK_TO_MYLIST":
      return {
        ...state,
        mylist: [action.payload, ...state.mylist],
      };
    case "REMOVE_BOOK_FROM_MYLIST":
      return {
        ...state,
        mylist: state.mylist.filter((book) => book.id !== action.payload),
      };
    case "ADD_BOOK_TO_COMPLATED":
      return {
        ...state,
        mylist: state.mylist.filter((book) => book.id !== action.payload.id),
        complated: [action.payload, ...state.complated],
      };
    default:
      return state;
  }
};
