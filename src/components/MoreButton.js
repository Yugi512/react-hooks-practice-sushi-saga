import React from "react";

function MoreButton({onAddSushi}) {
  return <button onClick={() => onAddSushi()}>More sushi!</button>;
}

export default MoreButton;
