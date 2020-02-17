import React from 'react';
import ReactDOM from 'react-dom';
import history from './history';

import Home from './pages/Home/Home';
import './styles.less';

import { Route, Link,  Router } from 'react-router-dom';

function App() {
    return (
        <Router history={history}>
            <Route path="/projects/:projectId" component={Home} />
            <Route exact path="/" component={Home} />
        </Router>
    );
}

ReactDOM.render(<App />, document.getElementById('app'));
