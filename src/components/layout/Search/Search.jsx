import React, { useState } from 'react';
import classes from './Search.module.scss';
function Search() {
    const [content, uptdcontent] = useState('');
    const change = (event) => {
        const value = event.target.value;
        uptdcontent(value);
        console.log(value);
    };

    return (
        <input className={classes.search} placeholder="Search" onChange={change} value={content} />
    );
}

export default Search;
