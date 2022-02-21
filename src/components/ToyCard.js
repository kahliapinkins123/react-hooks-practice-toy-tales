import React, { useState } from "react";

function ToyCard({ toy, updateToy, deleteToy }) {
  const [likes, setLikes] = useState(toy.likes);

  function likeHandler(){
    
    setLikes(()=>likes+1)
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        likes: likes+1,
      }),
    })
    .then((resp)=>resp.json())
    .then((updatedToy)=>{
      updateToy(updatedToy)
    })
  }

  function deleteHandler(){
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: 'DELETE',
    })
      .then((resp)=>resp.json())
      .then(()=> deleteToy(toy))
  }

  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={likeHandler}>Like {"<3"}</button>
      <button className="del-btn" onClick={deleteHandler}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
