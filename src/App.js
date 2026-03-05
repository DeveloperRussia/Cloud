import React from 'react';
import './styles/scss/app.scss';
import Category from './components/left__nav/Category/Category';

function App() {
    return (
        <div className="App">
            <div className="parent">
                <div className="left_nav">
                    <Category svgName="Home" />
                    <Category svgName="Workspaces" />
                    <Category svgName="Search" />
                    <Category svgName="Notifications" />
                </div>
                <div className="page">2</div>
            </div>
        </div>
    );
}

export default App;
