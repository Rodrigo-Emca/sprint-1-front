import React from "react";

const AuthorHeader = ({ name }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>Bibliografía:</p>
    </div>
  );
};

export default AuthorHeader;