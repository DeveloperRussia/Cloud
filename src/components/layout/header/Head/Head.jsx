import React from 'react';
import CurrentNamePage from '../CurrentNamePage/CurrentNamePage';
import UploadButton from '../UploadButton/UploadButton';
import { allUsersTempl } from '../../../../data/allUsersTempl';
import CurrentUser from '../CurrentUser/CurrentUser';
import classes from './Head.module.scss';
function Head({ currentItem, onUploadClick }) {
    return (
        <div className={classes.head}>
            <CurrentNamePage currentItem={currentItem} />
            <div className={classes.combo}>
                <UploadButton onOpen={onUploadClick} />
                <CurrentUser
                    userName={allUsersTempl[0].userName}
                    userSrc={allUsersTempl[0].picSrc}
                />
            </div>
        </div>
    );
}

export default Head;
