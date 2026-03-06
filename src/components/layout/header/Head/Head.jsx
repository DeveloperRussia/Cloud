import React from 'react';
import CurrentNamePage from '../CurrentNamePage/CurrentNamePage';
import UploadButton from '../UploadButton/UploadButton';
import { allUsersTempl } from '../../../../data/allUsersTempl';
import CurrentUser from '../CurrentUser/CurrentUser';

function Head({ currentItem, onUploadClick }) {
    return (
        <div>
            <CurrentNamePage currentItem={currentItem} />
            <UploadButton onOpen={onUploadClick} />
            <CurrentUser userName={allUsersTempl[0].userName} userSrc={allUsersTempl[0].picSrc} />
        </div>
    );
}

export default Head;
