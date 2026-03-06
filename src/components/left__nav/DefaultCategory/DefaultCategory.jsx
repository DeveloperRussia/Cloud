import React from 'react';
import classes from './DefaultCategory.module.scss';
function DefaultCategory({ categoryItem }) {
    return (
        <div className={classes.mainCategory}>
            <div className={classes.allCategory}>{categoryItem}</div>
        </div>
    );
}

export default DefaultCategory;
