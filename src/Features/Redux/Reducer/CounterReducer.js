const intialState = {
  value: 0,
};

const CounterReducer = (state = intialState.value, action) => {
  const { type, payload } = action;
  switch (type) {
    case "INCREMENT": {
      console.log(state.value);
      return {
        ...state,
        value: 0 + 1,
        value: state.value + 1,
      };
    }
    case "DECREMENT": {
      return {
        ...state,
        value: state.value - 1,
      };
    }
    case "RESET": {
      return {
        ...state,
        value: state.value = 0,
      };
    }
    default: {
      return {
        value: state,
      };
    }
  }
};
export { CounterReducer };
