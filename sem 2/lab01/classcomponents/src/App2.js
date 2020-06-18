import React from "react";

class App extends React.Component {
  state = {
    value: "",
    todos: [],
  };
  componentDidUpdate(prevProps, prevState, snapshot) {
    const { todos } = this.state;
    const todoLeft = todos.filter((item) => !item.done).length;

    window.document.title = `Todos left: ${todoLeft}`;
  }

  handleAdd = () => {
    const { value } = this.state;

    const todo = {
      title: value,
      done: false,
    };
    this.setState((state) => ({
      todos: [...state.todos, todo],
      value: "",
    }));
  };

  inputOnChange = (event) => {
    this.setState({ value: event.target.value });
  };

  markAsDone = (todo) => {
    const { todos } = this.state;

    const newTodos = todos.map((item) => {
      if (item === todo) {
        return {
          ...item,
          done: true,
        };
      }
      return item;
    });

    const sortedTodos = newTodos.sort((a, b) => a.done - b.done);

    this.setState({ todos: sortedTodos });
  };

  render() {
    const { todos, value } = this.state;

    return (
      <div>
        <h3>TODO App</h3>
        <input type="text" value={value} onChange={this.inputOnChange} />
        <button onClick={this.handleAdd}>Add</button>
        <h4>TODOs: </h4>
        {todos.map((todo, index) => (
          <div key={index}>
            {todo.done ? (
              <del>{todo.title}</del>
            ) : (
              <>
                {todo.title}
                <button onClick={() => this.markAsDone(todo)}>
                  Mark as done
                </button>
              </>
            )}
          </div>
        ))}
      </div>
    );
  }
}

export default App;
