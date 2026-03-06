import React from 'react';
import './styles/scss/app.scss';
import Category from './components/left__nav/Category/Category';
import MainCategory from './components/left__nav/MainCategory/MainCategory';

function App() {
    return (
        <div className="App">
            <div className="parent">
                <div className="left_nav">
                    <Category svgName="Home" />
                    <Category svgName="Workspaces" />
                    <Category svgName="Search" />
                    <Category svgName="Notifications" />
                    <MainCategory
                        categoryName="Categories"
                        categoryItem={[
                            <Category svgName="Photos" />,
                            <Category svgName="Videos" />,
                            <Category svgName="Documents" />,
                            <Category svgName="Audio" />,
                            <Category svgName="Shared with me" />,
                            <Category svgName="Trash" />,
                        ]}
                    />
                </div>
                <div className="page">2</div>
            </div>
        </div>
    );
}

export default App;
