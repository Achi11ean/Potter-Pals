import { useState, useEffect } from 'react'


import './App.css'
import AdminNavBar from "./AdminNavBar";
import SpellForm from "./SpellForm";
import SpellList from "./SpellList";
import NavBar from './NavBar';

// this page is actually the spells main page | it just started as app 
function App() {
  const [page, setPage] = useState("List");
  const [items, setItems] = useState([]);
console.log("items is: ", items);

// here we are getting our spells data using the useEffect hook and setting the setItems to the new evaluation of items
useEffect(() => {
  fetch("https://json-server-template-0cqg.onrender.com/spells")
  .then ((response) => response.json())
  .then((items) => setItems(items))
  .catch((error) => console.error("Error fetching items:", error));
}, [])

  return (
    <main>
      {/* here we are importing our NavBar component so it shows navbar at the top of the page.  */}
         <h1 className="logo" id="potterpalss">
           Potter Spells</h1>
         <NavBar />

         {/* here we are saying that when the user changes the page we want to update the page with the requested data|| 
         this is also a conditional rendering statement, it checks the value of page, if page is "form" it will show the spell form component;
         if it is NOT form it will show the spellList component. both components receive two props: items and Set Items */}
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <SpellForm items={items} setItems={setItems}/> : <SpellList items={items} setItems={setItems} />}
    </main>
  );
}

export default App;
