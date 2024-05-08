import React,{useState} from "react";

function Sushi({sushi,updateSushiState, amount }) {
  const [isEaten, setEaten] = useState(false)

  const {id,name,img_url,price,created_at} = sushi

  function handleEaten(e){
    if(amount !== 0){setEaten(!isEaten)
    fetch(`http://localhost:3001/sushis/${id}`,{
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        eaten: false,
      })
    })
    .then((r) =>  r.json())
    .then((updatedSushi) => updateSushiState(updatedSushi))}
  }
  return (
    <div className="sushi" id={id} >
      <div className="plate" onClick={(e) => handleEaten(e)}>
        {}
        {isEaten ? "" : (
          <img
            src={img_url}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
