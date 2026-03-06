import React from 'react';
import classes from './CurrentUser.module.scss';
function CurrentUser({ userName, userSrc }) {
    return (
        <div className={classes.userContainer}>
            <img className={classes.userImg} src={userSrc} alt="avatar" />
            <p className={classes.userName}>{userName}</p>
        </div>
    );
}

export default CurrentUser;
