import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import DevTools from 'mobx-react-devtools';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

@observer class Counter extends React.Component {

    @observable count = 0;
    
    handleCount = () => {}

    render() {
        return (
            <div className="app">
                <DevTools />
                <h1>Mobx счетчик</h1>
                <h2>{ this.count }</h2>
                <button>-1</button>
                <button>+1</button>
            </div>
        )
    }
}

ReactDOM.render(<Counter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
