import React from 'react'
import NavBar from './NavBar';
import PotterPals from "./PotterPals"
function Characters() {


  return (
    <main>
        <NavBar />
         <h1 className="logo" id="potterpalss">Potter Pals:</h1>
        <PotterPals />
    </main>
  );
}

export default Characters;


