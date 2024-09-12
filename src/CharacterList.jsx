import React, { useState, useEffect } from "react";
import "./PotterPals.css";

function PotterPals({ items, setItems }) {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/characters")
      .then((response) => response.json())
      .then((characterData) => {       console.log("Fetched character data:", characterData); // Check what data looks like
        setCharacters(characterData)})
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
    <div className="spelllist spellscss">
      <div>
        <h2 id="custom">Custom Characters</h2>
        <br />
        <br />
        <CharacterList characters={items} setItems={setItems} allowDeleteButton />
      </div>
      <div>
        <h2 id="canon">Canon Characters</h2>
        <SearchBar onSearchChange={setSearch} />
        <CharacterList characters={charactersToDisplay} />
      </div>
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
function CharacterList({ characters, setItems, allowDeleteButton = false }) {
  console.log("characters are: ", characters);

  return (
    <div>
    <ol className="characterList">
      {characters.map((character, index) => {

function handleDeleteClick() {
    fetch(`https://json-server-template-0cqg.onrender.com/characters/${character.id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {
        console.log("deleted");
        const filtered = characters.filter((item) => item.id !== character.id);
        setItems(filtered);
      });
  }
        
        return (
        <li key={index} className="characterCard">
          {character.image ? <img className="images" src={character.image} alt={""} /> : null}
          <h2>{character.name} </h2>
          {character.house && <p>House: {character.house}</p>}
          {character.ancestry && <p>Ancestry: {character.ancestry}</p>}
          {character.dateOfBirth && <p>Birthday: {character.dateOfBirth}</p>}
          {character.wand && (
            <p>
              Wand Type: {character.wand.wood + " ; " + character.wand.core}
            </p>
          )}
          {character.wandType && <p>Wand Type: {character.wandType}</p>}
          {allowDeleteButton ? (
        <button onClick={handleDeleteClick}>Delete Character</button>
      ) : (
        <></>
      )}
        </li>
      )})}
    </ol>
    </div>
  );
}

export default PotterPals;
