import React from 'react';
import classes from './UploadButton.module.scss';

function UploadButton({ onOpen }) {
    return (
        <button className={classes.btnUpload} onClick={onOpen}>
            <svg fill="none" viewBox="0 0 20 20">
                <path
                    fill="#fff"
                    d="M9.25 13.25a.75.75 0 1 0 1.5 0V4.64l2.96 3.13a.75.75 0 0 0 1.08-1.03l-4.24-4.5a.75.75 0 0 0-1.1 0l-4.24 4.5A.75.75 0 1 0 6.3 7.75l2.95-3.12z"
                />
                <path
                    fill="#fff"
                    d="M3.5 12.75a.75.75 0 1 0-1.5 0v2.5A2.75 2.75 0 0 0 4.75 18h10.5A2.75 2.75 0 0 0 18 15.25v-2.5a.75.75 0 1 0-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25z"
                />
            </svg>
            Upload file
        </button>
    );
}

export default UploadButton;
