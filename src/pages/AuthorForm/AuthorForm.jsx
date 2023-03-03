import React, { useState } from "react";
import AuthorNameInput from "./NameInput";
import AuthorCityCountryInput from "./LocationInput";
import AuthorBirthdateInput from "./BirthDateInput";
import AuthorImageInput from "./ProfileImageInput";
import "./AuthorForm.css";

function AuthorForm() {

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const author = {
      name: name,
      lastName: lastName,
      city: city,
      country: country,
      birthdate: birthdate,
      imageUrl: imageUrl,
    };

    fetch("/api/authors", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(author),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Error creating author");
        }
      })
      .then((data) => {
        alert("Author created successfully!");
      })
      .catch((error) => {
        console.error(error);
        alert("Error creating author");
      });
  };

  return (
   <div className="container">
     <div className="form-container">
      <h1>New author</h1>
      <form onSubmit={handleSubmit}>
        <AuthorNameInput
          name={name}
          setName={setName}
          lastName={lastName}
          setLastName={setLastName}
          className="author-input"
        />
        <AuthorCityCountryInput
          city={city}
          setCity={setCity}
          country={country}
          setCountry={setCountry}
          className="author-input"
        />
        <AuthorBirthdateInput
          birthdate={birthdate}
          setBirthdate={setBirthdate}
          className="author-input"
        />
        <AuthorImageInput
          imageUrl={imageUrl}
          setImageUrl={setImageUrl}
          className="author-input"
        />
        <button type="submit" className="author-submit-button">Create Author</button>
      </form>
    </div>
   </div>
  
  );
}

export default AuthorForm;