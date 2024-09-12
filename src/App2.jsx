import { useState, useEffect } from 'react'


import './App.css'
import CharacterNavBar from "./CharacterNavBar";
import CharacterForm from "./CharacterForm";
import CharacterList from "./CharacterList";
import NavBar from './NavBar';


function App2() {
  const [page, setPage] = useState("List");
  const [items, setItems] = useState([]);
console.log("items is: ", items);
useEffect(() => {
  fetch("http://localhost:3000/characters")
  .then ((response) => response.json())
  .then((items) => setItems(items))
  .catch((error) => console.error("Error fetching items:", error));
}, [])

  return (
    <main>
      <NavBar />
         <h1 className="logo" id="potterpalss">Potter Pals</h1>
      <CharacterNavBar onChangePage={setPage} />
      {page === "Form" ? <CharacterForm items={items} setItems={setItems}/> : <CharacterList items={items} setItems={setItems} />}
    </main>
  );
}

export default App2;
