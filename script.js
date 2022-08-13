// select dom element
const counterEl = document.getElementById("counter");
let incrementEl = document.getElementById("increment");
let decrementEl = document.getElementById("decrement");

//action identifiers
const INCREMENT = "increment";
const DECREMENT = "decrement";

//action creators
const increment = () => {
  return {
    type: INCREMENT,
    payload: 5,
  };
};
const decrement = () => {
  return {
    type: DECREMENT,
    payload: 2,
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
  store.dispatch(increment());
});
decrementEl.addEventListener("click", () => {
  store.dispatch(decrement());
});
