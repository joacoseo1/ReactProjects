import { useState, useEffect } from 'react'
import { Card } from "./components/Card"
import { Button } from "./components/Button"
import { ImgButton } from "./components/Button"
import './App.css'

function App() {
  const [characters, setCharacters] = useState([1,2,3,4,5,6,7,8])
  const [page, setPage] = useState(0);
  const [posInicial, setPosInicial] = useState(1)
  let posFinal = posInicial + 8;
  let url = "https://rickandmortyapi.com/api/character/";

  const nextPage = ()=>{
    setPage(page+1);
    setPosInicial(posInicial+8);
    posFinal += 8;
    console.log("nextPage " + posInicial)
  }

  const backPage = ()=>{
    if(posInicial == 1) return
    setPage(page-1);
    setPosInicial(posInicial-8);
    posFinal -= 8;
    console.log("Back Page " + posInicial)
  }

  useEffect(() => {
      const data = [];
      for(let i = posInicial; i<posFinal;i++){
        data.push(i)
      }
      fetch(url+data)
      .then(response => response.json())
      .then(json => setCharacters(json))
      .catch(error => console.error(error));
  }, [page]);

  let right = document.getElementById("imgRight");
  let left = document.getElementById("imgLeft");
  function hover(elem) {
    elem.setAttribute('src', '/arrowHover.png');
  }
  
  function unhover(elem) {
    elem.setAttribute('src', '/arrow.png');
  }
//<img src="/arrow.png" id="imgRight" alt="arrowRight" onMouseOver={() => hover(right)} onMouseOut={() => unhover(right)} />
  return (
    <div className="App">

      <div className="grid-Cards">
      {characters.map((character,index) => (
          <Card key={index} name={character.name} status={character.status} img={character.image} species={character.species}
          gender={character.gender} />
        ))}
      </div>

      <Button func={() => nextPage()} goOrBack="Right">
        <ImgButton path="/arrow.png" id="imgRight" alt="arrowRight" funcHover={() => hover(right)} funcUnHover={() => unhover(right)}/>
      </Button>

      <Button func={() => backPage()} goOrBack="Left">
        <ImgButton path="/arrow.png" id="imgLeft" alt="arrowLeft" funcHover={() => hover(left)} funcUnHover={() => unhover(left)}/>
      </Button>

    </div>
  )
}

export default App
