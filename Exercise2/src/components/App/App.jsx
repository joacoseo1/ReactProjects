import { useEffect, useState } from 'react'
import { Title } from "../Title"
import { Square } from "../Square"
import { checkWinner } from "./winner";
import './App.css'

function App() {
  const table = [null,null,null,null,null,null,null,null,null];

  const [winner, setWinner] = useState([null,null,null]);
  const [turn, setTurn] = useState(table);
  const [play, setPlay] = useState("✕");
  const [color, setColor] = useState(false);
  
  const handleClick = (index)=>{
    let jugador = null;
    const newTable = turn;
    if(turn[index] == null && winner[0] == null){
      newTable[index] = play;
      jugador = play == "✕" ? "〇" : "✕";
    }else{
      jugador = play;
    }
    setTurn(newTable);
    setPlay(jugador);

    const newWinner = checkWinner(newTable);
    if(newWinner) {
      setWinner(newWinner)
      setColor(true);
    }
  }

  const restartGame = () =>{
      setTurn(table);
      setPlay("✕");
      setColor(false);
      for(let i of winner){
        document.getElementById(i).classList.remove("winner")
      }
      setWinner([null,null,null]);
  }

  useEffect(()=>{
    let arr = winner;
    if(arr[0] != null){
      for(let i of arr){
        document.getElementById(i).className += " winner";
      }
    }
  },[color]);
  
  return (
    <>
    <section className="container">
        <Title text="Ta Te Ti" />
        <article className="gridTable">
          <Square handle={handleClick} id="0" clases="right bottom" content={turn} />
          <Square handle={handleClick} id="1" clases="right bottom" content={turn} />
          <Square handle={handleClick} id="2" clases="bottom" content={turn} />
          <Square handle={handleClick} id="3" clases="right bottom" content={turn} />
          <Square handle={handleClick} id="4" clases="right bottom" content={turn} />
          <Square handle={handleClick} id="5" clases="bottom" content={turn} />
          <Square handle={handleClick} id="6" clases="right" content={turn} />
          <Square handle={handleClick} id="7" clases="right" content={turn} />
          <Square handle={handleClick} id="8" content={turn} />
        </article>
        <button onClick={restartGame} className="btnRestart">RESTART ⟲</button>
      </section>
    </>
  )
}

export default App
