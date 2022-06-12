import "./App.css";
import React from "react";
import { useState } from "react";
import HeaderBanner from "./components/Header";
import FooterBanner from "./components/Footer";
import AddItem from "./components/AddItem";
import ToDoList from "./components/TodoList";

const App = () => {
  const [item, setItem] = useState([
    { item: "example task 1", checked: false },
    { item: "example task 2", checked: true },
    { item: "example task 3", checked: false },
    { item: "example task 4", checked: false },
  ]);
  // handles checked off items
  const handleCheck = (index) => {
    let storeItems = [...item];
    const indexOfItem = storeItems[index];
    const currentCheck = indexOfItem.checked;
    const newCheck = !currentCheck;
    indexOfItem.checked = newCheck;
    setItem(storeItems);
  };
  // Handle click for removing items
  const handleClick = (index) => {
    let storeItems = [...item];
    storeItems.splice(index, 1);
    setItem(storeItems);
  };
  // add item handle submit new items
  const [itemInput, setItemInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setItem([...item, { item: itemInput }]);
    setItemInput("");
  };
  return (
    <div className="main">
      <div className="App">
        {/* Header */}
        <div className="header">
          <HeaderBanner
            name="Katherine Ayers"
            masters="38"
            description="ToDo List Made With ReactJS. Enter Task below"
          />
          {/* add new item */}
          <div>
            <AddItem
              handleSubmit={handleSubmit}
              itemInput={itemInput}
              setItemInput={setItemInput}
            />
          </div>
        </div>

        {/* Body */}
        <div className="content">
          <div className="todoBox">
            {/* map list */}
            {item.map((item, index) => {
              return (
                // runs ToDoList component
                <ToDoList
                  todoItem={item.item}
                  todoChecked={item.checked}
                  key={index}
                  handleClick={() => handleClick(index)}
                  handleCheck={() => handleCheck(index)}
                />
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="footer">
          <FooterBanner name="Katherine Ayers" github="Indykatz" />
        </div>
        {/* End of App div */}
      </div>
    </div>
  );
};

export default App;
