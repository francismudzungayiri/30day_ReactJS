import Button from "./Button";

const UI = ({ number, increment, decrement, reset }) => {
  return (
    <section className="w-[40%] h-[50vh]  bg-[#50589C] shadow-2xl rounded-lg text-center">
      <div className="w-full">
        <h1 className="text-7xl text-amber-50 font-bold my-7">{number}</h1>
      </div>
      <div className="w-full flex justify-around items-center mt-20">
        <Button text={"Increment"} onclick={increment} />
        <Button text={"Decrement"} onclick={decrement} />
        <Button text={"Reset"} onclick={reset} />
      </div>
    </section>
  );
};

export default UI;
