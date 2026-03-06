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
        {
            name: 'Photos',
            svgCode: (
                <svg fill="none" viewBox="0 0 20 20">
                    <path
                        stroke="#000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeOpacity=".4"
                        strokeWidth="1.5"
                        d="m1.88 13.13 4.3-4.3a1.9 1.9 0 0 1 2.65 0l4.3 4.3m-1.26-1.26 1.18-1.17a1.87 1.87 0 0 1 2.65 0l2.43 2.43m-15 3.12h13.75A1.25 1.25 0 0 0 18.13 15V5a1.25 1.25 0 0 0-1.25-1.25H3.13A1.25 1.25 0 0 0 1.88 5v10a1.25 1.25 0 0 0 1.25 1.25m8.75-9.37zm.3 0a.31.31 0 1 1-.62 0 .31.31 0 0 1 .63 0"
                    />
                </svg>
            ),
        },
        {
            name: 'Videos',
            svgCode: (
                <svg fill="none" viewBox="0 0 20 20">
                    <path
                        stroke="#000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeOpacity=".4"
                        strokeWidth="1.5"
                        d="M2.81 16.25H17.2m-14.38 0a.94.94 0 0 1-.93-.94m.93.94h1.25c.52 0 .94-.42.94-.94m12.19.94c.51 0 .93-.42.93-.94m-.93.94h-1.25a.94.94 0 0 1-.94-.94m-13.12 0V4.7m0 10.62v-1.25c0-.52.42-.94.93-.94M5 15.33v-4.38m0 4.37c0 .52.42.94.94.94h8.12c.52 0 .94-.42.94-.94m-10 0v-1.25a.94.94 0 0 0-.94-.94M1.88 4.7c0-.52.42-.94.93-.94m-.93.94v1.25c0 .51.42.93.93.93m0 6.26a.94.94 0 0 1-.93-.94v-1.25c0-.52.42-.94.93-.94m0 3.13h1.25m14.07 2.18V4.7m0 10.62v-1.25a.94.94 0 0 0-.94-.94m.93-8.43a.94.94 0 0 0-.93-.94m.93.94v1.25c0 .51-.42.93-.93.93m0 6.26c.51 0 .93-.43.93-.94v-1.25a.94.94 0 0 0-.93-.94m0 3.13h-1.25M15 15.3v-4.37m0 4.37v-1.25c0-.52.42-.94.94-.94m1.25-9.37H2.8m14.38 0h-1.25a.94.94 0 0 0-.94.94M2.81 3.75h1.25c.52 0 .94.42.94.94m10 0a.94.94 0 0 0-.94-.94H5.94a.94.94 0 0 0-.94.94m10 0v1.25a.94.94 0 0 0 .94.93M15 4.7v4.37m2.19-2.19h-1.25m1.25 0c.51 0 .93.42.93.94v1.25c0 .52-.42.94-.93.94M5 4.69v1.25c0 .51-.42.93-.94.93M5 4.7v4.37M2.81 6.87h1.25m-1.25 0a.94.94 0 0 0-.93.94v1.25c0 .52.42.94.93.94m1.25-3.12c.52 0 .94.42.94.93v1.25M2.81 10h1.25M5 9.06a.94.94 0 0 0 .94.94M5 9.06c0 .52-.42.94-.94.94m11.88-3.12a.94.94 0 0 0-.94.93v1.25m0 0c0 .52-.42.94-.94.94m.94-.94c0 .52.42.94.94.94m1.25 0h-1.25m-10 0h8.12m-8.12 0a.94.94 0 0 0-.94.94m9.06-.94c.52 0 .94.42.94.94m-10 0v1.25c0 .52-.42.94-.94.94m.94-2.2a.94.94 0 0 0-.94-.93m11.88 0a.94.94 0 0 0-.94.94m0 0v1.25c0 .52.42.94.94.94"
                    />
                </svg>
            ),
        },
        {
            name: 'Documents',
            svgCode: (
                <svg fill="none" viewBox="0 0 20 20">
                    <path
                        stroke="#000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeOpacity=".4"
                        strokeWidth="1.5"
                        d="M16.25 11.88v-2.2a2.8 2.8 0 0 0-2.81-2.8h-1.25a.94.94 0 0 1-.94-.94V4.69a2.8 2.8 0 0 0-2.81-2.82H6.88m1.87 0H4.69a.94.94 0 0 0-.94.94V17.2c0 .51.42.93.94.93H15.3c.52 0 .94-.42.94-.93V9.37a7.5 7.5 0 0 0-7.5-7.5"
                    />
                </svg>
            ),
        },
        {
            name: 'Audio',
            svgCode: (
                <svg fill="none" viewBox="0 0 20 20">
                    <path
                        stroke="#000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeOpacity=".4"
                        strokeWidth="1.5"
                        d="M7.5 7.5 16.25 5m0 5.46v3.13a1.9 1.9 0 0 1-1.36 1.8l-1.1.31a1.5 1.5 0 1 1-.82-2.89l1.92-.55a1.9 1.9 0 0 0 1.36-1.8m0 0V1.87L7.5 4.38v8.6m0 0v3.12a1.9 1.9 0 0 1-1.36 1.8l-1.1.31a1.5 1.5 0 0 1-.83-2.89l1.93-.55a1.9 1.9 0 0 0 1.36-1.8"
                    />
                </svg>
            ),
        },
        {
            name: 'Shared with me',
            svgCode: (
                <svg fill="none" viewBox="0 0 20 20">
                    <path
                        stroke="#000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeOpacity=".4"
                        strokeWidth="1.5"
                        d="M14.22 12.93a2.5 2.5 0 0 1 3.9 2.27q-1.52.53-3.12.4a5 5 0 0 0-5-4.97 5 5 0 0 0-4.21 2.3m9.2 2.67.01.03q0 .27-.03.55a10 10 0 0 1-9.94 0L5 15.6m0 0a7.5 7.5 0 0 1-3.12-.4 2.5 2.5 0 0 1 3.9-2.26M5 15.6c0-.95.28-1.87.79-2.66m6.71-7.31a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m5 2.5a1.88 1.88 0 1 1-3.75 0 1.88 1.88 0 0 1 3.75 0m-11.25 0a1.87 1.87 0 1 1-3.75 0 1.87 1.87 0 0 1 3.75 0"
                    />
                </svg>
            ),
        },
        {
            name: 'Trash',
            svgCode: (
                <svg fill="none" viewBox="0 0 20 20">
                    <path
                        stroke="#000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeOpacity=".4"
                        strokeWidth="1.5"
                        d="M12.28 7.5 12 15m-3.98 0-.3-7.5m8.31-2.67.86.13m-.86-.13-.89 11.56a1.87 1.87 0 0 1-1.87 1.73H6.74a1.9 1.9 0 0 1-1.87-1.73l-.9-11.56m12.05 0q-1.44-.22-2.9-.34m-9.14.34-.85.13m.85-.13a40 40 0 0 1 2.9-.34m6.25 0v-.76c0-.98-.76-1.8-1.75-1.83q-1.38-.05-2.76 0c-.99.03-1.74.85-1.74 1.83v.76m6.25 0a41 41 0 0 0-6.26 0"
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
