import React from 'react';
import store from './store';
import { Provider, useDispatch, useSelector } from "react-redux";
import {up} from './counterSlice';

function Counter() {
  const dispatch = useDispatch();
  const count = useSelector(state=>{
    return state.counter.value;
  });

  return <div>
    <button onClick={()=>{
      dispatch(up(2));
    }} >+</button>{count}
  </div>
}

function App() {
  return (
    <Provider store={store}>
      <div className="App"> 
        <Counter/>
      </div>
    </Provider>
  );
}

export default App;
