import React from 'react';
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';
import Container from './container/Container';
import Dashboard from './dashboard/Dashboard';

const App = React.createClass({
    render() {
        return (
            <div>
                <Header />
                <Sidebar />
                <Container>
                    <Dashboard />
                </Container>
            </div>
        );
    }
});

export default App;
