import React, { useState } from 'react';
import classes from './MainCategory.module.scss';

function MainCategory({ categoryName, categoryItem }) {
    const [isOpen, setIsOpen] = useState(true);

    const toggleOpen = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div className={classes.mainCategory}>
            <div className={classes.header} onClick={toggleOpen}>
                {categoryName}
                <span className={`${classes.arrow} ${isOpen ? classes.open : ''}`} />
            </div>
            {isOpen && <div className={classes.allCategory}>{categoryItem}</div>}
        </div>
    );
}

export default MainCategory;
