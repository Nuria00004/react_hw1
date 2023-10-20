import React, { useState } from "react";
import "./App.css";
import SearchInput from "./components/SearchInput";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    console.log("Вы выполнили поиск с запросом: " + searchQuery);
  };

  return (
    <div className="App">
      <div className="search-container">
        <SearchInput
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button onClick={handleSearch} className="search-button">
          Advanced Search
        </button>
      </div>
    </div>
  );
}

export default App;
