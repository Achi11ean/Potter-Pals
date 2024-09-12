import React, { useState } from "react";

function CharacterForm({ items, setItems }) {
  const [formData, setFormData] = useState({
    name: "",
    house: "",
    wandType: "",
    image: "",
  });

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const itemData = {
      name: formData.name,
      house: formData.house,
      wandType: formData.wandType,
      image: formData.image,
    };
    fetch("https://json-server-template-0cqg.onrender.com/characters", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(itemData),
    })
      .then((response) => response.json())
      .then((newSpell) => {
        console.log(newSpell);
        setItems([...items, newSpell]);
        setFormData({
          name: "",
          house: "",
          wandType: "",
          image: "",
        });
      });
  }

  const wands = [
    "Acacia", "Alder", "Apple", "Ash", "Aspen", "Beech", "Blackthorn", 
    "Black Walnut", "Cedar", "Cherry", "Chestnut", "Cypress", "Dogwood", 
    "Ebony", "Elder", "Elm", "English Oak", "Fir", "Hawthorn", "Hazel", "Holly"
  ];

  return (
    <section>
      <h1 className="newSpell spellscss">New Potter Pal</h1>
      <form onSubmit={handleSubmit} className="form">
        <label>
          Pal Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Hogwarts House:
          <input
            type="text"
            name="house"
            value={formData.house}
            onChange={handleChange}
          />
        </label>
        <label>
          Wand Type:
          <select
            name="wandType"
            value={formData.wandType}
            onChange={handleChange}
          >
            <option value="">Ollivander's</option>
            {wands.map((type) => (
                <option key={type} value={type}>
                {type}
                </option>
            ))}
          </select>
        </label>
        <label>
          Pal Image:
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Add Character</button>
      </form>
    </section>
  );
}

export default CharacterForm;
