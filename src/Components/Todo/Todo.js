import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {

    addTodo(event){
        event.preventDefault();
        //console.log(this.refs);
        let name = this.refs.name.value;
        let completed = this.refs.completed.value;

        let todo = {
            name,
            completed
        };

        let todos = this.state.todos;

        todos.push(todo);

        this.setState({
            todos: todos
        });

        this.refs.todoForm.reset();

    }

    constructor(){
        super();
        this.addTodo = this.addTodo.bind(this);
        this.state = {
            todos: [],
            title: 'Simple React Todo Application'
        }
    }

    render() {
        let title = this.state.title;
        let todos = this.state.todos;
        return (
            <div className="container">
                <div className="jumbotron">
                    <h3>{title}</h3>
                    <form ref="todoForm">
                        <input type="text" ref="name" />
                        <input type="text" ref="completed" />
                        <button onClick={this.addTodo}>add todo</button>
                    </form>
                    {/*<pre>{JSON.stringify(todos)}</pre>*/}
                    <ol>
                        {todos.map(( todo => <li>{todo.name} , {todo.completed}</li> ))}
                    </ol>
                </div>
            </div>
        );
    }

}

export default Todo;
