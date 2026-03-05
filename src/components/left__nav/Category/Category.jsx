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
        {
            name: 'Workspaces',
            svgCode: (
                <svg fill="none" viewBox="0 0 20 20">
                    <path
                        stroke="#000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeOpacity=".4"
                        strokeWidth="1.5"
                        d="M3.13 5A1.9 1.9 0 0 1 5 3.13h1.88A1.87 1.87 0 0 1 8.75 5v1.88a1.87 1.87 0 0 1-1.87 1.87H5a1.87 1.87 0 0 1-1.87-1.87zm0 8.13A1.87 1.87 0 0 1 5 11.25h1.88a1.87 1.87 0 0 1 1.87 1.88V15a1.87 1.87 0 0 1-1.87 1.88H5A1.87 1.87 0 0 1 3.13 15zM11.25 5a1.87 1.87 0 0 1 1.88-1.87H15A1.87 1.87 0 0 1 16.88 5v1.88A1.87 1.87 0 0 1 15 8.75h-1.87a1.87 1.87 0 0 1-1.88-1.87zm0 8.13a1.87 1.87 0 0 1 1.88-1.88H15a1.87 1.87 0 0 1 1.88 1.88V15A1.87 1.87 0 0 1 15 16.88h-1.87A1.87 1.87 0 0 1 11.25 15z"
                    />
                </svg>
            ),
        },
        {
            name: 'Search',
            svgCode: (
                <svg fill="none" viewBox="0 0 20 20">
                    <path
                        fill="#000"
                        fillOpacity=".4"
                        fillRule="evenodd"
                        d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11M2 9a7 7 0 1 1 12.45 4.4l3.33 3.32a.75.75 0 1 1-1.06 1.06l-3.33-3.33A7 7 0 0 1 2 9"
                        clip-rule="evenodd"
                    />
                </svg>
            ),
        },
        {
            name: 'Notifications',
            svgCode: (
                <svg fill="none" viewBox="0 0 20 20">
                    <path
                        stroke="#000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeOpacity=".4"
                        strokeWidth="1.5"
                        d="M12.38 14.24q2.34-.29 4.55-1.1A7.5 7.5 0 0 1 15 8.12V7.5a5 5 0 0 0-10 0v.63c0 1.85-.68 3.64-1.93 5.01q2.18.8 4.55 1.1m4.76 0q-2.38.27-4.76 0m4.76 0a2.5 2.5 0 1 1-4.76 0"
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
