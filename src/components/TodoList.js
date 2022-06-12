const ToDoList = ({
  todoItem,
  todoChecked,
  handleClick,
  handleCheck,
  handleArchive,
  handleEdit,
  newValue,
  setNewValue,
  index,
}) => {
  if ({ todoChecked }) {
    return (
      <div
        className="eachToDo"
        style={{
          textDecoration: todoChecked ? "line-through" : "",
          color: todoChecked ? "#2a5a97" : "#f49446",
          background: todoChecked ? "#f49446" : "#2a5a97",
        }}
      >
        <p>{todoItem}</p>
        <button className="checkButton" onClick={handleCheck}>
          {todoChecked ? "Un-check" : "Check"}
        </button>
        <button className="removeButton" onClick={handleClick}>
          Remove
        </button>
      </div>
    );
  }
};

export default ToDoList;
