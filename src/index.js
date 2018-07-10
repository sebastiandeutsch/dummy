import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TodoStore from './TodoStore';
import { Provider } from 'mobx-react';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Provider TodoStore={TodoStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
