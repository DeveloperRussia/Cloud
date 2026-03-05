import React from 'react';
import classes from './Category.module.scss';

const Category = ({ svgName }) => {
    const allSvg = [
        {
            name: 'Home',
            svgCode: (
                <svg fill="none" viewBox="0 0 16 16">
                    <path
                        stroke="#000"
                        strokeOpacity=".4"
                        strokeWidth="1.3"
                        d="M8 .65q.15 0 .25.1l7 7a.35.35 0 0 1-.06.54.4.4 0 0 1-.19.06h-1.65V15a.35.35 0 0 1-.35.35h-2a.35.35 0 0 1-.35-.35v-3A1.65 1.65 0 0 0 9 10.35H7A1.65 1.65 0 0 0 5.35 12v3a.35.35 0 0 1-.35.35H3a.35.35 0 0 1-.35-.35V8.35H1a.35.35 0 0 1-.25-.6l7-7q.11-.1.25-.1Z"
                    />
                </svg>
            ),
        },
    ];

    const current = allSvg.find((item) => item.name === svgName);

    return (
        <div className={classes.category}>
            {current?.svgCode}
            {current?.name}
        </div>
    );
};

export default Category;
