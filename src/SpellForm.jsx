import React, { useState } from "react";

function SpellForm({items, setItems}) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    spellColor: "",
    image: ""
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
        description: formData.description,
        spellColor: formData.spellColor,
        image: formData.image
      };
    fetch("https://json-server-template-0cqg.onrender.com/spells", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(itemData),
    })
    .then((response) => response.json())
    .then((newSpell) => {
        console.log(newSpell)
        setItems([...items, newSpell])
       setFormData ({
          name: "",
          description: "",
          spellColor: "",
          image: ""
        });
    })
  }

  return (
    <section >
      <h1 className="spellscss newSpell">New Spell</h1>
      <form onSubmit={handleSubmit} className="form spellscss">
        <label>
          Spell Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Spell Effect:
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </label>
        <label>
          Spell Color:
          <input
            type="text"
            name="spellColor"
            value={formData.spellColor}
            onChange={handleChange}
          />
        </label>
        <label>
          Magic Image:
          <input
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
