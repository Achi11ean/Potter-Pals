import React from "react";
// This component relates to the buttons that make new spells or display all spells
function AdminNavBar({ onChangePage }) {
  const buttonStyle = {
    padding: "0.5rem",
    backgroundColor: "orange", // Green background color
    color: "black", // White text color
    border: "none", // No border
    borderRadius: "12px", // Rounded corners
    cursor: "pointer", // Pointer cursor on hover
    fontSize: "1rem", // Increase font size
    marginTop: "1rem", // Space above the button
    fontFamily: "Playfair Display",
    fontSize: "2em",
    textDecoration: "underline wavy",
    paddingRight: ".5em",
    paddingLeft: ".5em",
    marginRight: "5.5em",
    marginLeft: "5.5em"

  };
  return (
    <nav>
      <button className="spellButtons" style={buttonStyle} onClick={() => onChangePage("Form")}>New Spell</button>
      <button className="spellButtons" style={buttonStyle} onClick={() => onChangePage("List")}>View Spells</button>
    </nav>
    
  );
}

export default AdminNavBar;
