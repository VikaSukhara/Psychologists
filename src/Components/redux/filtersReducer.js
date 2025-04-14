const initialState = {
  selectedfilter: "A to Z",
};

export const filteredReducer = (state = initialState, action) => {
  switch (action.type) {
    case "filtered/list":
      return { ...state, selectedfilter: action.payload };
    default:
      return state;
  }
};


export const filterAction = (filteredValue) => ({
  type: "filtered/list",
  payload: filteredValue,
});
