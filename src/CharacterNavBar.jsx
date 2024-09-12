import React from "react";
function CharacterNavBar({ onChangePage }) {

  return (
    <nav>
      <button className="spellButtons pottertype"  onClick={() => onChangePage("Form")}>New Characters</button>
      <button className="spellButtons pottertype"  onClick={() => onChangePage("List")}>View Characters</button>
    </nav>
    
  );
}

export default CharacterNavBar;