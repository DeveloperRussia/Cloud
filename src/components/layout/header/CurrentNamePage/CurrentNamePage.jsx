import React from 'react';
import classes from './CurrentNamePage.module.scss';

function CurrentNamePage({ currentItem }) {
    if (!currentItem) return null;

    return (
        <div className={classes.name}>
            <div className={classes.div_svg}>{currentItem.svgCode}</div>
            <p>{currentItem.name}</p>
        </div>
    );
}

export default CurrentNamePage;
