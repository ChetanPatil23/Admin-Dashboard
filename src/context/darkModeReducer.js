const darkModeReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_DARK_MODE":
      return { ...state, darkMode: !state.darkMode };

    case "SET_DARK_MODE":
      return { ...state, darkMode: action.payload === "dark" ? true : false };
    default:
      return state;
  }
};

export default darkModeReducer;
