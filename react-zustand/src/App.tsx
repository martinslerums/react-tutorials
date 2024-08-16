import { useEffect } from "react";
import { useCounterStore } from "./store";

//store does not always have to be a customer hook
//meaning we can access its values even outside of RFC
// for example in a simple function
const logCount = () => {
  // We can access values
  const count = useCounterStore.getState().count;
  console.log("logCount: ", count);

};
// We can also update store state
const setCount = () => {
  useCounterStore.setState({count: 20})
}

const App = () => {
  //Best pracctice 1. Always access specific part of store.

  // const {count} = useCounterStore((state) => state); 
  // If we were to have some other state than count variablei n our store then
  // this component would be rerendered everytime some part of the state changes
  const count = useCounterStore((state) => state.count);

  return <OtherComponent count={count} />;
};

const OtherComponent = ({ count }: { count: number }) => {
  const incrementAsync = useCounterStore((state) => state.incrementAsync);
  const decrement = useCounterStore((state) => state.decrement);

  useEffect(() => {
    setCount();
  }, []);

  useEffect(() => {
    logCount();
  }, [count]);

  return (
    <div>
      {count}
      <div>
        <button onClick={incrementAsync}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
};

export default App;
