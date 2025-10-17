import { useState } from "react";

const App = () => {
  const [toDo_items, setToDoItems] = useState([]);
  const [to_do, setTodDo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!to_do.trim()) return;

    //Create an object with text and completed state
    const newItem = { text: to_do, completed: false };
    const updatedToDoItems = [...toDo_items, newItem];

    setToDoItems(updatedToDoItems);
    setTodDo("");
  }

  const toggleComplete = (index) => {
    const updatedItems = toDo_items.map((item, i) =>
      i === index ? { ...item, completed: !item.completed } : item
    );
    setToDoItems(updatedItems);
  };

  return (
    <>
      <div className="mt-10 h-screen w-screen flex flex-col items-center overflow-hidden">
        <header className="bg-paragraphColor w-1/2 text-bgColor p-3 rounded-xl">
          <h1 className="text-4xl font-bold text-center text-bgColor">
            To Do App
          </h1>
        </header>

        <div className="w-1/2 mt-10">
          <form
            className="mt-7 flex justify-center gap-5"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              value={to_do}
              onChange={(e) => setTodDo(e.target.value)}
              className="w-4/5 border-2 border-bgColor rounded-lg p-2"
              placeholder="Enter a new task..."
            />
            <button
              type="submit"
              className="p-2 px-7 w-1/5 rounded-xl bg-textColor cursor-pointer hover:bg-bgColor hover:text-paragraphColor hover:border-1 hover:border-paragraphColor transition-all duration-300"
            >
              Add
            </button>
          </form>
        </div>

        <div className="w-1/2 mt-5">
          {toDo_items.map((item, index) => (
            <div
              key={index}
              className="text-textColor text-2xl mt-5 flex items-center"
            >
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => toggleComplete(index)}
                className="mr-5 h-5 w-5 border-paragraphColor cursor-pointer"
              />
              <p
                className={`inline ${
                  item.completed ? "line-through text-gray-500" : ""
                }`}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
