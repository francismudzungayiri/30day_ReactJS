import UI from "./components/UI";
import { useState } from "react";

const App = () => {
  const [number, setNumber] = useState(0);
  function handleIncrement() {
    setNumber(number + 1);
  }

  function handleDecrement() {
    if (number === 0) {
      alert("Value cannot be negative");
      return;
    }
    setNumber(number - 1);
  }

  function handleReset() {
    setNumber(0);
  }

  return (
    <div className="bg-[#3C467B] w-screen h-screen overflow-hidden flex justify-center items-center">
      <UI
        number={number}
        increment={handleIncrement}
        decrement={handleDecrement}
        reset={handleReset}
      />
    </div>
  );
};

export default App;
