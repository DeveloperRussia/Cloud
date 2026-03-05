import React from 'react';
import classes from './MainCategory.module.scss';

function MainCategory({ categoryName, categoryItem }) {
    const allCategories = [{ nameCategory: 'Categories', categoryItem }];
    const current = allCategories.find((item) => item.nameCategory === categoryName);
    return (
        <div className={classes.mainCategory}>
            {current?.nameCategory}
            <div className={classes.allCategory}>{categoryItem}</div>
        </div>
    );
}

export default MainCategory;
