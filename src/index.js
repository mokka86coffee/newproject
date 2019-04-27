import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import Button from '@material-ui/core/Button';
import DevTools from 'mobx-react-devtools';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

@observer class Counter extends React.Component {

    @observable count = 0;
    
    handleCount = (e) => {
        this.count = e.target.innerText.includes('-')
            ? this.count - 1
            : this.count + 1
    }

    render() {
        return (
            <div className="app">
                <DevTools position="topRight" />
                <h1>Mobx счетчик</h1>
                <h2>{ this.count }</h2>
                <Button onClick={ this.handleCount }>-1</Button>
                <Button onClick={ this.handleCount }>+1</Button>
            </div>
        )
    }
}

ReactDOM.render(<Counter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
