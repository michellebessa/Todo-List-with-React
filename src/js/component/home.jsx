import React, { useState } from "react";

export const TodoList = () => {
  const [list, setList] = useState([]);

  const [inputValue, setInputValue] = useState("");

  const addItemsList = (e) => {
    e.preventDefault();
    setList([...list, inputValue]);
    setInputValue("");
  };

  const removeItem = (index) => {
    let newList = list.filter((idx) => idx !== index);

    setList(newList);
  };

  return (
    <>
      <div className="text-center">
        <h1 className="tittle">Todos</h1>
        <form onSubmit={addItemsList}>
          <input
            type="text"
            placeholder="Add something to do..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </form>

        {list.map((ListItem, index) => {
          return (
            <li className="list-group-item" key={index}>
              {ListItem}{" "}
              <button onClick={() => removeItem(index)}>
                <i className="fas fa-trash"></i>
              </button>
            </li>
          );
        })}
      </div>
    </>
  );
};

export default TodoList;
