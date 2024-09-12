import React, { useState, useEffect } from "react";
import "./PotterPals.css";

function PotterPals() {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/characters")
      .then((response) => response.json())
      .then((characterData) => setCharacters(characterData))
      .catch((error) => console.error("Error Fetching characters", error));
  }, []);
  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(search.toLowerCase())
  );
  const charactersToDisplay =
    search === ""
      ? filteredCharacters.filter((char) => char.name === "Harry Potter")
      : filteredCharacters;

  return (
    <div className="harryPotterPals">
      <h1>Harry Potter Pals</h1>
      <SearchBar onSearchChange={setSearch} />
      <CharacterList characters={charactersToDisplay} />
    </div>
  );
}
function SearchBar({ onSearchChange }) {
  return (
    <div className="searchbar">
      <label htmlFor="search"> Search Characters:</label>
      <input
        type="text"
        id="search"
        placeholder="Find a Potter Pal"
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}
function CharacterList({ characters }) {
  console.log("characters are: ", characters);
  return (
    <ol className="characterList">
      {characters.map((character) => (
        <li key={character.name} className="characterCard">
          {character.image ? <img src={character.image} alt={""} /> : null}
          <h2>{character.name} </h2>
          {character.house && <p>House: {character.house}</p>}
          {character.ancestry && <p>Ancestry: {character.ancestry}</p>}
          {character.dateOfBirth && <p>Birthday: {character.dateOfBirth}</p>}
        </li>
      ))}
    </ol>
  );
}

export default PotterPals;
