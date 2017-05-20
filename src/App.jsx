import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import Todo from './components/Todo';

function App(props) {
    return (
        <main>
            <Header title={props.title} />

            <section className="todo-list">
                <Todo title={"Изучить JavaScript"} completed={true} />
                <Todo title={"Изучить React"} completed={false} />
            </section>
        </main>
    );
}

App.propTypes = {
    title: React.PropTypes.string.isRequired // обязательное свойство с типом string
};
// Дефолтное название при котором можно не указывать обязательность свойства(то что выше)
App.defaultProps = {
    title: 'React Todo'
}

ReactDOM.render(<App title="React Todo" />, document.getElementById('root'));