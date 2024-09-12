import React from "react";

function Spell({ spell, setItems, items = [] }) {
  const { id, name, description, spellColor, image } = spell;
  function handleDeleteClick() {
    fetch(`http://localhost:3000/spells/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {
        console.log("deleted");
        const filtered = items.filter((item) => item.id !== id);
        setItems(filtered);
      });
  }
  return (
    <li style={{ border: "1px solid white" }}>
      <h4>Name: {name}</h4>
      <h5>Effect: {description}</h5>
      {spellColor ? <p>Spell Color: {spellColor}</p> : <></>}
      <div className="characterCard">
        {image ? <img src={image} alt={""} /> : null}
      </div>
      {items.length ? (
        <button onClick={handleDeleteClick}>Delete Spell</button>
      ) : (
        <></>
      )}
    </li>
  );
}

export default Spell;
