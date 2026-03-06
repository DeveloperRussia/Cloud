import React from 'react';
import classes from './Category.module.scss';
import { slidebarData } from '../../../data/slidebarData';

const Category = ({ svgName, onClick, isActive }) => {
    const current = slidebarData.find((item) => item.name === svgName);

    return (
        <div
            className={`${classes.category} ${isActive ? classes.active : ''}`}
            onClick={() => onClick(svgName)}
        >
            {current?.svgCode}
            {current?.name}
        </div>
    );
};

export default Category;
