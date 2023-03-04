import React from 'react';

const ProfileImageInput = ({ urlProfileImage, setUrlProfileImage }) => {
  return (
    <div className="form-group">
      <label htmlFor="profileImage"></label>
      <input type="text" className="form-control" id="profileImage" placeholder='Image URL' value={urlProfileImage} onChange={e => setUrlProfileImage(e.target.value)} />
    </div>
  );
};

export default ProfileImageInput;