import React, { useState } from 'react';
import './styles/scss/app.scss';
import Category from './components/left__nav/Category/Category';
import MainCategory from './components/left__nav/MainCategory/MainCategory';
import DefaultCategory from './components/left__nav/DefaultCategory/DefaultCategory';
import { slidebarData } from './data/slidebarData';
import UploadModal from './components/modalWindows/UploadModal/UploadModal';
import Head from './components/layout/header/Head/Head';
import Search from './components/layout/Search/Search';
import AllFiles from './components/layout/pageElement/AllFiles/AllFiles';
import { useUserFiles } from './hooks/useUserFiles';

function App() {
    const [currentPage, setCurrentPage] = useState('Home');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const currentItem = slidebarData.find((item) => item.name === currentPage);
    const { files, addFileToCurrentUser } = useUserFiles();

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        addFileToCurrentUser(selectedFile);
        setIsModalOpen(false);
        e.target.value = '';
    };

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
                    <Head currentItem={currentItem} onUploadClick={() => setIsModalOpen(true)} />
                    <Search />
                    <AllFiles files={files} />
                </div>
            </div>

            <UploadModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onFileChange={handleFileChange}
            />
        </div>
    );
}

export default App;
