import React,{useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([]);
  const [amount, setAmount] = useState("100")
  const [plates, setPlates] = useState([])


  useEffect(() => {
    fetch(API)
    .then((r) => r.json())
    .then((sushis) => {setSushis(sushis)})
  },[])



  function updateSushiState(updatedSushi){
    const eatenSushi = sushis.filter((sushi) => {
      if(sushi.id === updatedSushi.id){
        if(amount > 0){
          setAmount(amount - sushi.price)
        } else {
          console.log()
        }
        return sushi
      }
    })
    setPlates(eatenSushi)
  }

  return (
    <div className="app">
      <SushiContainer sushis={sushis} updateSushiState={updateSushiState} amount={amount}/>
      <Table moneyLeft={amount} plates={plates} />
    </div>
  );
}

export default App;
