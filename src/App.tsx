import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './routes';
import './App.scss';
import Header from './components/Header';

const renderRoutes = () => {
    return routes.map((route, index) => <Route key={index} {...route} />);
};
const App: FC = () => {
    return (
        <div className="App">
            <Header />
            <Switch>{renderRoutes()}</Switch>
        </div>
    );
};

export default App;
