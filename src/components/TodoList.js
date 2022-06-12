const ToDoList = ({
  todoItem,
  todoChecked,
  handleClick,
  handleCheck,
  handleArchive,
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
        <button
          className="checkButton"
          style={{
            color: todoChecked ? "#f49446" : "#2a5a97",
            background: todoChecked ? "#2a5a97" : "#f49446",
          }}
          onClick={handleCheck}
        >
          {todoChecked ? "Un-check" : "Check"}
        </button>
        <button
          className="removeButton"
          style={{
            color: todoChecked ? "#f49446" : "#2a5a97",
            background: todoChecked ? "#2a5a97" : "#f49446",
          }}
          onClick={handleClick}
        >
          Remove
        </button>
        <button
          className="archiveButton"
          style={{
            color: todoChecked ? "#f49446" : "#2a5a97",
            background: todoChecked ? "#2a5a97" : "#f49446",
          }}
          onClick={handleArchive}
        >
          Archive
        </button>
      </div>
    );
  }
};

export default ToDoList;
