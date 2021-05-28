import userList from "../components/userList";

const showReducer = (state = userList, action) => {
  switch (action.type) {
    case "add":
      state = state.filter((user) => user !== action.payload);
      return [action.payload, ...state];
    case "delete":
      return state.filter((user) => user !== action.payload);
    default:
      return state;
  }
};

export default showReducer;
