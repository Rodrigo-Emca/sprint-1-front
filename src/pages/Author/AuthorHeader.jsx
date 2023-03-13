import React from "react";
import Icon from "../../images/Icon.png"

function AuthorHeader({ author }) {
  return (
    <div className="author-header">
      <div className="author-info">
      < img src={author.photo}  alt={`Profile of ${author.name}`} className="author-photo" />
        <div className="info-container">
        
        <h1 className="author-name">{author.name} {author.last_name}</h1>
        <div className="location-container">
        <img src={Icon} alt="Icon" className="location-Icon"/>
        <p className="author-location">{`${author.city}, ${author.country}`}</p>
        <p className="author-birthday">{author.birthdate}</p>
        </div>
        
      </div>
        </div>
      
      <div className="author-image">
      
      </div>
    </div>
  );
}

export default AuthorHeader;
