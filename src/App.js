import { useState } from "react";
import "./App.css";
import Filter from "./components/filter";
import Todos from "./components/todos";

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const [data, setData] = useState([
    { name: "공부하기", completed: false },
    { name: "운동하기", completed: true },
    { name: "물마시기", completed: false },
  ]);
  const [renderData, setRenderData] = useState([...data]);

  const handleDarkMode = () => {
    setDarkMode((darkMode) => !darkMode);
  };

  const handleAdd = () => {
    const newData = [...data, { name: newTodo, completed: false }];

    setData(newData);
    setNewTodo("");
  };

  const handleUpdate = (todoName) => {
    setData(
      data.map((prevData) => {
        if (prevData.name === todoName) {
          return { ...prevData, completed: !prevData.completed };
        }
        return prevData;
      })
    );
  };

  /**
   * e.nativeEvent.isComposing: 한글 입력시 두 번 실행 차단!
   *
   * @param {*} e
   */
  const handleEnter = (e) => {
    if (e.nativeEvent.isComposing === false && e.keyCode === 13) {
      handleAdd();
    }
  };

  const handleAll = () => {
    setRenderData(data);
  };

  const handleActived = () => {
    const activedData = data.filter((dataTodo) => dataTodo.completed === false);

    setRenderData(activedData);
  };

  const handleCompleted = () => {
    const completedData = data.filter(
      (dataTodo) => dataTodo.completed === true
    );

    setRenderData(completedData);
  };

  const handleDel = (delTodo) => {
    const delData = data.filter((dataTodo) => dataTodo.name !== delTodo);

    setData(delData);
  };

  return (
    <div className="overflow-hidden rounded">
      <Filter
        handleAll={handleAll}
        handleActived={handleActived}
        handleCompleted={handleCompleted}
        darkMode={darkMode}
        handleDarkMode={handleDarkMode}
      />
      <div
        className={`overflow-auto w-full h-[300px] pt-[20px] ${
          darkMode ? "bg-[#21253A]" : "bg-white"
        }`}
      >
        <Todos
          darkMode={darkMode}
          data={renderData}
          handleDel={handleDel}
          handleUpdate={handleUpdate}
        />
      </div>
      <div className={`flex p-4 ${darkMode ? "bg-[#1A1C33]" : "bg-[#F6F6F6]"}`}>
        <div className="overflow-hidden flex w-full rounded">
          <div className="grow bg-white">
            <input
              type="text"
              onChange={(e) => setNewTodo(e.target.value)}
              onKeyDown={(e) => handleEnter(e)}
              placeholder="Add Todo"
              value={newTodo}
              className="w-full p-2"
            />
          </div>
          <button
            className="flex justify-center items-center w-[100px] bg-[#F0872D] text-white"
            onClick={handleAdd}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
