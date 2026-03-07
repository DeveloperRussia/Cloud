import React, { useMemo, useState } from 'react';
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

    const filteredFiles = useMemo(() => {
        return filterFilesByType(files, selectedFilter);
    }, [files, selectedFilter]);

    const folders = useMemo(() => {
        return getUniqueFoldersFromFiles(files);
    }, [files]);

    return (
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
                    <div key={file.id} className={classes.fileCard}>
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
    );
}

export default AllFiles;
