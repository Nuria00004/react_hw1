import React from "react";

function SearchInput({ placeholder, value, onChange }) {
  return (
    <input
      type="text"
      className="search-input"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

export default SearchInput;
