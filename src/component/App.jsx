import React from 'react';
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';
import Container from './container/Container';
import Dashboard from './dashboard/Dashboard';
import MyForm from './myform/MyForm'
const App = React.createClass({
    render() {
        return (
            <div>
                <Header />
                <Sidebar />
                <Container>
                    <MyForm/>
                </Container>
            </div>
        );
    }
});

export default App;
