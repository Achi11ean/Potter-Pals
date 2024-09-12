import React from "react";
import "./App.css"




// This component relates to the buttons that make new spells or display all spells
// This was one of those things that catcherine helped me understand and Once I got everything working I didn't want to confuse myself trying to change the names so they stuck around

function AdminNavBar({ onChangePage }) {
  return (
    <nav>
      <button className="spellButtons"  onClick={() => onChangePage("Form")}>New Spell</button>
      <button className="spellButtons"  onClick={() => onChangePage("List")}>View Spells</button>
    </nav>
    
  );
}

export default AdminNavBar;
