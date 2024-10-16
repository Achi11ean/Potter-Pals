import React, { useState } from "react";

function SpellForm({ items, setItems }) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    spellColor: "",
    image: ""
  });

  const colorOptions = [
    "Red", "Blue", "Green", "Yellow", "Purple", "Black", "White", "Orange",
    "Pink", "Brown", "Gray", "Cyan", "Magenta", "Lime", "Violet",
    "Turquoise", "Maroon", "Olive", "Navy", "Gold", "Silver"
  ];

  const defaultImage = "https://i0.wp.com/dungeonsanddragonsfan.com/wp-content/uploads/2024/07/hunters-mark-dnd-5e-1.png?fit=800%2C450&ssl=1"; // Default image URL

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
      description: formData.description,
      spellColor: formData.spellColor,
      image: formData.image || defaultImage, // Use default image if empty
    };

    fetch("https://json-server-template-0cqg.onrender.com/spells", {
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
          description: "",
          spellColor: "",
          image: ""
        });
      });
  }

  return (
    <section>
      <h1 className="spellscss newSpell">New Spell</h1>
      <form onSubmit={handleSubmit} className="form spellscss">
        <label>
          Cast Spell:
          <input
            className="searchbar"
            placeholder="[Spell Name]"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Spell Effect:
          <input
            className="searchbar"
            placeholder="[What does your spell do?]"
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </label>
        <label>
          Spell Color:
          <select
            className="searchbar"
            name="spellColor"
            value={formData.spellColor}
            onChange={handleChange}
            style={{
              maxHeight: "150px",
              overflowY: "auto"
            }}
          >
            <option value="">Select a Color</option>
            {colorOptions.map((color) => (
              <option key={color} value={color}>
                {color}
              </option>
            ))}
          </select>
        </label>
        <label>
          Magic Image:
          <input
            className="searchbar"
            placeholder="[Enter the image link]"
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Add Spell</button>
      </form>
    </section>
  );
}

export default SpellForm;