import React from "react";

function Spell({ spell, setItems, items = [] }) {
  const { id, name, description, spellColor, image } = spell;
  function handleDeleteClick() {
    fetch(`https://json-server-template-0cqg.onrender.com/spells/${id}`, {
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
    <li style={{ border: "2px solid white", borderRadius: "95px" }}>
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
