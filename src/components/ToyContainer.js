import React, { useEffect } from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, setToys, updateToy, deleteToy }) {
  useEffect(()=>{
    fetch('http://localhost:3001/toys')
      .then(resp=>resp.json())
      .then((toys)=> setToys(toys))
  }, [setToys])

  const toyCards = toys.map((toy)=>{
    return <ToyCard key={toy.id} toy={toy} updateToy={updateToy} deleteToy={deleteToy}/>
  })

  return (
    <div id="toy-collection">{toyCards}</div>
  );
}

export default ToyContainer;
