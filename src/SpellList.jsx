import React, { useState, useEffect } from "react";
import Spell from "./Spell";

function SpellList({ items, setItems }) {
  const [spells, setSpells] = useState([]);

  const [showCustomSpells, setShowCustomSpells] = useState(true);
  const [showStandardSpells, setShowStandardSpells] = useState(true);

  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/spells")
      .then((response) => response.json())
      .then((items) => setSpells(items))
      .catch((error) => console.error("Error fetching items:", error));
  }, []);

  const toggleCustomSpells = () => setShowCustomSpells(!showCustomSpells);
  const toggleStandardSpells = () => setShowStandardSpells(!showStandardSpells);

  return (
    <section className="spelllist spellscss">
      <div>
        
        <button onClick={toggleCustomSpells} style={{ cursor: "pointer" }}>
          Custom Spells (click to {showCustomSpells ? "collapse" : "expand"})
        </button>
        {showCustomSpells && (
          <ul className="spellul reversed">
            {items.map((item) => (
              <Spell
                key={item.id}
                spell={item}
                items={items}
                setItems={setItems}
              />
            ))}
          </ul>
        )}
      </div>
      <div>
        <button onClick={toggleStandardSpells} style={{ cursor: "pointer" }}>
          Standard Spells (click to {showStandardSpells ? "collapse" : "expand"}
          )
        </button>
        {showStandardSpells && (
          <ul className="spellul">
            {spells.map((spells) => (
              <Spell key={spells.id} spell={spells} />
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

export default SpellList;
