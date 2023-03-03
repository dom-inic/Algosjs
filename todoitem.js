import cx from "classnames";
import { Component } from "react";

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoItems: [],
      inputValue: "",
    };

    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleItemToggle = this.handleItemToggle.bind(this);
  }

  handleAddTodo() {
    const { todoItems, inputValue } = this.state;
    this.setState({
      todoItems: [...todoItems, { text: inputValue, isDone: false }],
      inputValue: "",
    });
  }

  handleInputChange(event) {
    this.setState({ inputValue: event.target.value });
  }

  handleItemToggle(index) {
    const { todoItems } = this.state;
    const newTodoItems = [...todoItems];
    newTodoItems[index].isDone = !newTodoItems[index].isDone;
    this.setState({ todoItems: newTodoItems });
  }

  render() {
    const { todoItems, inputValue } = this.state;
    const remainingCount = todoItems.filter((item) => !item.isDone).length;
    const totalCount = todoItems.length;

    return (
      <div>
        <h2>Todo List</h2>
        <input
          type="text"
          value={inputValue}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleAddTodo}>Add Item</button>
        <div className="task-counter">
          {remainingCount} remaining out of {totalCount} tasks
        </div>
        <ul>
          {todoItems.map((item, index) => (
            <li
              key={index}
              className={item.isDone ? "is-done" : ""}
              onClick={() => this.handleItemToggle(index)}
            >
              {item.text}
            </li>
          ))}
        </ul>
        <style>{`
          .is-done {
            text-decoration: line-through;
          }
          .task-counter {
            margin-top: 10px;
            font-weight: bold;
          }
        `}</style>
      </div>
    );
  }
}

export default TodoList;


