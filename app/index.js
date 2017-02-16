import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import styles from './styles/Root.css'

class App extends Component {
    render() {
        return (
            <div className="wrapper">
                <Root/>
            </div>
        );
    }
}

ReactDOM.render(<App />,document.getElementById('root'))

export default App;