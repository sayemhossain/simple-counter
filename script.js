// select dom element
const counterEl = document.getElementById("counter");
let incrementEl = document.getElementById("increment");
let decrementEl = document.getElementById("decrement");

//action identifiers
const INCREMENT = "increment";
const DECREMENT = "decrement";

//action creators
const increment = (value) => {
  return {
    type: INCREMENT,
    payload: value,
  };
};
const decrement = (value) => {
  return {
    type: DECREMENT,
    payload: valu,
  };
};

//initial state
const initialState = { value: 0 };

//Create Reducer function
function counterReducer(state = initialState, action) {
  if (action.type === INCREMENT) {
    return {
      ...state,
      value: state.value + action.payload,
    };
  } else if (action.type === DECREMENT) {
    return {
      ...state,
      value: state.value - action.payload,
    };
  } else {
    return state;
  }
}

//create store
const store = Redux.createStore(counterReducer);

const render = () => {
  const state = store.getState();
  counterEl.innerText = state.value.toString();
};
render();
store.subscribe(render);

//button click listen
incrementEl.addEventListener("click", () => {
  store.dispatch(increment(5));
});
decrementEl.addEventListener("click", () => {
  store.dispatch(decrement(2));
});
