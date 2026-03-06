import React, { useState } from 'react';
import './styles/scss/app.scss';
import Category from './components/left__nav/Category/Category';
import MainCategory from './components/left__nav/MainCategory/MainCategory';
import DefaultCategory from './components/left__nav/DefaultCategory/DefaultCategory';
import { slidebarData } from './data/slidebarData';
import CurrentNamePage from './components/layout/header/CurrentNamePage/CurrentNamePage';
import UploadButton from './components/layout/header/UploadButton/UploadButton';
import UploadModal from './components/modalWindows/UploadModal/UploadModal';
function App() {
    const [currentPage, setCurrentPage] = useState('Home');

    const currentItem = slidebarData.find((item) => item.name === currentPage);
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <div className="App">
            <div className="parent">
                <div className="left_nav">
                    <DefaultCategory
                        categoryItem={[
                            <Category
                                key="Home"
                                svgName="Home"
                                onClick={setCurrentPage}
                                isActive={currentPage === 'Home'}
                            />,
                            <Category
                                key="Workspaces"
                                svgName="Workspaces"
                                onClick={setCurrentPage}
                                isActive={currentPage === 'Workspaces'}
                            />,
                            <Category
                                key="Search"
                                svgName="Search"
                                onClick={setCurrentPage}
                                isActive={currentPage === 'Search'}
                            />,
                            <Category
                                key="Notifications"
                                svgName="Notifications"
                                onClick={setCurrentPage}
                                isActive={currentPage === 'Notifications'}
                            />,
                        ]}
                    />

                    <MainCategory
                        categoryName="Categories"
                        categoryItem={[
                            <Category
                                key="Photos"
                                svgName="Photos"
                                onClick={setCurrentPage}
                                isActive={currentPage === 'Photos'}
                            />,
                            <Category
                                key="Videos"
                                svgName="Videos"
                                onClick={setCurrentPage}
                                isActive={currentPage === 'Videos'}
                            />,
                            <Category
                                key="Documents"
                                svgName="Documents"
                                onClick={setCurrentPage}
                                isActive={currentPage === 'Documents'}
                            />,
                            <Category
                                key="Audio"
                                svgName="Audio"
                                onClick={setCurrentPage}
                                isActive={currentPage === 'Audio'}
                            />,
                            <Category
                                key="Shared with me"
                                svgName="Shared with me"
                                onClick={setCurrentPage}
                                isActive={currentPage === 'Shared with me'}
                            />,
                            <Category
                                key="Trash"
                                svgName="Trash"
                                onClick={setCurrentPage}
                                isActive={currentPage === 'Trash'}
                            />,
                        ]}
                    />

                    <DefaultCategory
                        categoryItem={[
                            <Category
                                key="Settings"
                                svgName="Settings"
                                onClick={setCurrentPage}
                                isActive={currentPage === 'Settings'}
                            />,
                            <Category
                                key="Help & support"
                                svgName="Help & support"
                                onClick={setCurrentPage}
                                isActive={currentPage === 'Help & support'}
                            />,
                        ]}
                    />
                </div>

                <div className="page">
                    <CurrentNamePage currentItem={currentItem} />
                    <UploadButton onOpen={() => setIsModalOpen(true)} />
                </div>
            </div>
            <UploadModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onFileChange={(e) => {
                    const file = e.target.files[0];
                    console.log(file);
                }}
            />
        </div>
    );
}

export default App;
