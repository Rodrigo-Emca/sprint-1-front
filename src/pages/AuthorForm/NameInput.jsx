import React from 'react';
import './AuthorForm.css';

const NameInput = ({ name, setName, lastName, setLastName }) => {
  return (
    <div className="form-group">
      <label htmlFor="name"></label>
      <input type="text" className="form-control" id="name" placeholder='Name' value={name} onChange={e => setName(e.target.value)} />
      <label htmlFor="lastName"></label>
      <input type="text" className="form-control" id="lastName" placeholder='Last name' value={lastName} onChange={e => setLastName(e.target.value)} />
    </div>
  );
};

export default NameInput;