import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({sushis,updateSushiState, amount}) {
  const [indexState, setIndexState] = useState(0)

  const fourItems = sushis.slice(indexState,(indexState + 4))

  function handleMoreSushi(){
    setIndexState(indexState + 4)
  }

  return (
    <div className="belt">
      {fourItems.map((sushi) => <Sushi key={sushi.id} sushi={sushi} updateSushiState={updateSushiState} amount={amount}/>)}
      <MoreButton onAddSushi={handleMoreSushi} />
    </div>
  );
}

export default SushiContainer;
