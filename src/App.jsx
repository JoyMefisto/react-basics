import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import todos from './todos';
import Header from './components/Header';
import Todo from './components/Todo';
import Form from './components/Form';

class App extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            todos: []
        };

        this.handleToggle = this.handleToggle.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    componentDidMount() {
        axios.get('/api/todos')
            .then(response => response.data)
            .then(todos => this.setState({ todos: todos }))
            .catch(this.handleError);

    }

    handleToggle(id) {
        axios.patch(`/api/todos/${id}`)
            .then( response => {
                const todos = this.state.todos.map( todo => {
                    if(todo.id === id) {
                        todo = response.data;
                    }

                    return todo;
                });

                this.setState({ todos: todos });
            })
            .catch(this.handleError);

    }

    handleDelete(id) {
        axios.delete(`/api/todos/${id}`)
            .then(() => {
                const todos = this.state.todos.filter(todo => todo.id !== id);

                this.setState({ todos });
            })
            .catch(this.handleError);
    }

    handleAdd(title) {
        axios.post('/api/todos', { title })
            .then(response => response.data)
            .then(todo => {
                let todos = [ ...this.state.todos, todo];
                this.setState({ todos });
            })
            .catch(this.handleError);

    }

    handleError(error) {
        console.error(error);
    }

    handleEdit(id, title) {
        axios.put(`/api/todos/${id}`, { title })
            .then( response => {
                let todos = this.state.todos.map( todo => {
                    if(todo.id === id){
                        todo = response.data;
                    }

                    return todo;
                });

                this.setState({ todos });
            })
            .catch(this.handleError);


    }

    render() {
        return (
            <main>
                <Header title={this.props.title} todos={this.state.todos} />

                <ReactCSSTransitionGroup
                    component="section"
                    className="todo-list"
                    transitionName="slide"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}>

                    {this.state.todos.map( todo =>
                        <Todo key={todo.id}
                              id={todo.id}
                              title={todo.title}
                              completed={todo.completed}
                              onStatusChange={this.handleToggle}
                              onDelete={this.handleDelete}
                              onEdit={this.handleEdit}
                        />
                    )}
                </ReactCSSTransitionGroup>

                <Form onAdd={this.handleAdd} />
            </main>
        );
    }
}

App.propTypes = {
    title: React.PropTypes.string,
    initialDate: React.PropTypes.arrayOf(React.PropTypes.shape({
        id: React.PropTypes.number.isRequired,
        title: React.PropTypes.string.isRequired,
        completed: React.PropTypes.bool.isRequired
    })).isRequired
};
// Дефолтное название при котором можно не указывать обязательность свойства(то что выше)
App.defaultProps = {
    title: 'React Todo'
}

ReactDOM.render(<App initialDate={todos} />, document.getElementById('root'));