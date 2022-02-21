import React, { useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function addToy(newToy){
    setToys([...toys,newToy]);
  }

  function updateToy(updatedToy){
    const updatedToys = toys.filter((toy)=>{
      if(toy.id === updatedToy.id){
        return updatedToy;
      } else {
        return toy;
      }
    });

    setToys(updatedToys);
  }

  function deleteToy(deletedToy){
    const updatedToys = toys.filter((toy)=> toy.id !== deletedToy.id)

    setToys(updatedToys)
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm addToy={addToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} setToys={setToys} updateToy={updateToy} deleteToy={deleteToy}/>
    </>
  );
}

export default App;
