import React, { useEffect, useMemo, useState } from 'react';
import mammoth from 'mammoth';
import classes from './AllFiles.module.scss';
import FileSpriteIcon from '../../../common/FileSpriteIcon';
import {
    FILE_FILTERS,
    cutFileName,
    filterFilesByType,
    getFileSpriteIcon,
    getUniqueFoldersFromFiles,
} from '../../../../utils/fileHelpers';

function AllFiles({ files = [] }) {
    const [selectedFilter, setSelectedFilter] = useState('All');
    const [openedFile, setOpenedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState('');
    const [textContent, setTextContent] = useState('');
    const [textError, setTextError] = useState('');

    const filteredFiles = useMemo(() => {
        return filterFilesByType(files, selectedFilter);
    }, [files, selectedFilter]);

    const folders = useMemo(() => {
        return getUniqueFoldersFromFiles(files);
    }, [files]);

    useEffect(() => {
        if (!openedFile?.file) {
            setPreviewUrl('');
            setTextContent('');
            setTextError('');
            return;
        }

        const objectUrl = URL.createObjectURL(openedFile.file);
        setPreviewUrl(objectUrl);
        setTextContent('');
        setTextError('');

        const previewType = openedFile.previewType;
        const canReadAsText = ['txt', 'sql', 'html', 'eml'].includes(previewType);

        if (canReadAsText) {
            openedFile.file
                .text()
                .then((text) => {
                    setTextContent(text);
                })
                .catch(() => {
                    setTextError('Не удалось прочитать содержимое файла.');
                });
        }

        if (previewType === 'docx') {
            openedFile.file
                .arrayBuffer()
                .then((arrayBuffer) => mammoth.extractRawText({ arrayBuffer }))
                .then((result) => {
                    setTextContent(result.value || 'Файл пустой.');
                })
                .catch(() => {
                    setTextError('Не удалось прочитать DOCX файл.');
                });
        }

        return () => {
            URL.revokeObjectURL(objectUrl);
        };
    }, [openedFile]);

    const openFilePreview = (file) => {
        if (!file?.file) return;
        setOpenedFile(file);
    };

    const closePreview = () => {
        setOpenedFile(null);
        setPreviewUrl('');
        setTextContent('');
        setTextError('');
    };

    const renderPreviewContent = () => {
        if (!openedFile) return null;

        const { previewType, name } = openedFile;

        if (previewType === 'png') {
            return <img src={previewUrl} alt={name} className={classes.modalImage} />;
        }

        if (previewType === 'mp4') {
            return (
                <video className={classes.modalMedia} controls>
                    <source src={previewUrl} type={openedFile.type || 'video/mp4'} />
                    Ваш браузер не поддерживает видео.
                </video>
            );
        }

        if (previewType === 'mp3') {
            return (
                <audio className={classes.modalAudio} controls>
                    <source src={previewUrl} type={openedFile.type || 'audio/mpeg'} />
                    Ваш браузер не поддерживает аудио.
                </audio>
            );
        }

        if (previewType === 'pdf') {
            return <iframe title={name} src={previewUrl} className={classes.modalFrame} />;
        }

        if (['txt', 'sql', 'html', 'eml', 'docx'].includes(previewType)) {
            if (textError) {
                return <div className={classes.modalFallback}>{textError}</div>;
            }

            return <pre className={classes.modalText}>{textContent || 'Загрузка...'}</pre>;
        }

        if (previewType === 'doc') {
            return (
                <div className={classes.modalFallback}>
                    <FileSpriteIcon
                        name={getFileSpriteIcon(openedFile.previewType)}
                        className={classes.modalFallbackIcon}
                    />
                    <p className={classes.modalFallbackTitle}>{openedFile.name}</p>
                    <p className={classes.modalFallbackText}>
                        Предпросмотр .doc файла не поддерживается. Лучше открыть его в Microsoft
                        Word.
                    </p>
                    <a
                        href={previewUrl}
                        target="_blank"
                        rel="noreferrer"
                        className={classes.openInNewTab}
                    >
                        Открыть файл
                    </a>
                </div>
            );
        }

        return (
            <div className={classes.modalFallback}>
                <FileSpriteIcon
                    name={getFileSpriteIcon(openedFile.previewType)}
                    className={classes.modalFallbackIcon}
                />
                <p className={classes.modalFallbackTitle}>{openedFile.name}</p>
                <p className={classes.modalFallbackText}>
                    Предпросмотр для этого типа файла пока не поддерживается.
                </p>
                <a
                    href={previewUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={classes.openInNewTab}
                >
                    Открыть в новой вкладке
                </a>
            </div>
        );
    };

    return (
        <>
            <div className={classes.container}>
                <div className={classes.top}>
                    <h3 className={classes.title}>All files</h3>

                    <div className={classes.viewActions}>
                        <button className={classes.iconBtn}>⌗</button>
                        <button className={classes.iconBtn}>≣</button>
                    </div>
                </div>

                <div className={classes.filters}>
                    <button
                        className={`${classes.filterBtn} ${
                            selectedFilter === 'All' ? classes.activeFilter : ''
                        }`}
                        onClick={() => setSelectedFilter('All')}
                    >
                        Select file type
                    </button>

                    {FILE_FILTERS.map((filter) => (
                        <button
                            key={filter}
                            className={`${classes.filterBtn} ${
                                selectedFilter === filter ? classes.activeFilter : ''
                            }`}
                            onClick={() => setSelectedFilter(filter)}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                {!!folders.length && (
                    <div className={classes.grid}>
                        {folders.map((folder) => (
                            <div key={folder.id} className={classes.folderCard}>
                                <FileSpriteIcon name="folder" className={classes.folderSvg} />
                                <span className={classes.folderName}>{folder.name}</span>
                            </div>
                        ))}
                    </div>
                )}

                <div className={classes.grid}>
                    {filteredFiles.map((file) => (
                        <div
                            key={file.id}
                            className={classes.fileCard}
                            onDoubleClick={() => openFilePreview(file)}
                        >
                            <div className={classes.preview}>
                                {file.preview ? (
                                    <img
                                        src={file.preview}
                                        alt={file.name}
                                        className={classes.previewImg}
                                    />
                                ) : (
                                    <FileSpriteIcon
                                        name={getFileSpriteIcon(file.previewType)}
                                        className={classes.fileSvg}
                                    />
                                )}
                            </div>

                            <span className={classes.fileName}>{cutFileName(file.name)}</span>
                        </div>
                    ))}
                </div>

                {!filteredFiles.length && (
                    <div className={classes.empty}>No files yet. Upload your first file.</div>
                )}
            </div>

            {openedFile && (
                <div className={classes.previewOverlay} onClick={closePreview}>
                    <div className={classes.previewModal} onClick={(e) => e.stopPropagation()}>
                        <div className={classes.previewHeader}>
                            <div className={classes.previewFileInfo}>
                                <FileSpriteIcon
                                    name={getFileSpriteIcon(openedFile.previewType)}
                                    className={classes.previewHeaderIcon}
                                />
                                <span className={classes.previewFileName}>{openedFile.name}</span>
                            </div>

                            <button className={classes.previewCloseBtn} onClick={closePreview}>
                                ×
                            </button>
                        </div>

                        <div className={classes.previewBody}>{renderPreviewContent()}</div>
                    </div>
                </div>
            )}
        </>
    );
}

export default AllFiles;
