import React from 'react';
import  './AuthorPage.css';
export default function Switch({ isNew, setIsNew }) {
const handleChange = () => {
setIsNew(!isNew);
};

return (
<div className='switch-container'>
<p className='new'>New</p>
<label className='slider round'>
<input type="checkbox" checked={isNew} onChange={handleChange} className="switch"/>
</label>
<p className='new'>Old</p>
</div>
);
}