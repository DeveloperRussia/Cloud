import React, { useRef } from 'react';
import classes from './UploadModal.module.scss';

function UploadModal({ isOpen, onClose, onFileChange }) {
    const overlayRef = useRef(null);

    if (!isOpen) return null;

    const handleOverlayClick = (e) => {
        if (e.target === overlayRef.current) {
            onClose();
        }
    };

    return (
        <div ref={overlayRef} className={classes.overlay} onClick={handleOverlayClick}>
            <div className={classes.modal}>
                <button className={classes.closeBtn} onClick={onClose}>
                    ×
                </button>

                <h2 className={classes.title}>Upload file</h2>
                <p className={classes.text}>Choose a file from your computer</p>

                <label className={classes.uploadLabel}>
                    Choose file
                    <input type="file" className={classes.input} onChange={onFileChange} />
                </label>
            </div>
        </div>
    );
}

export default UploadModal;
