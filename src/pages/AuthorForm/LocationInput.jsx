import React, { forwardRef } from "react";

const AuthorCityCountryInput = forwardRef(({ onInputChange }, ref) => {
  const handleInputBlur = () => {
    const value = ref.current.value;
    const [city, country] = value.split(",");
    onInputChange(city.trim(), country.trim());
  };

  return (
    <input
      type="text"
      placeholder="City, Country"
      ref={ref}
      onBlur={handleInputBlur}
    />
  );
});

export default AuthorCityCountryInput;






