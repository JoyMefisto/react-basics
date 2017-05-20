import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    return (
        <div>
            <h1>React TODO</h1>
            <p className="subtitle">Это моё первое приложение на React!</p>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));