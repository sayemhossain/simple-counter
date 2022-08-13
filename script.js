// select dom element
const counterEl = document.getElementById("counter");
let incrementEl = document.getElementById("increment");
let decrementEl = document.getElementById("decrement");

//initial state
const initialState = { value: 0 };

//Create Reducer function
function counterReducer(state = initialState, action) {
  if (action.type === "increment") {
    return {
      ...state,
      value: state.value + action.payload,
    };
  } else if (action.type === "decrement") {
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
  store.dispatch({
    type: "increment",
    payload: 5,
  });
});
decrementEl.addEventListener("click", () => {
  store.dispatch({
    type: "decrement",
    payload: 2,
  });
});
