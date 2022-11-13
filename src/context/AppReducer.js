// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case "ADD_BOOK_TO_MYLIST":
        return{
            ...state, 
            mylist: [action.payload, ...state.mylist],
        }
    default:
      return state;
  }
};
