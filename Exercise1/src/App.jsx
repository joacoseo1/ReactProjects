import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const catFactUrl = "https://catfact.ninja/fact";
  const giphyUrl = "https://api.giphy.com/v1/gifs/search?q=";
  const apiKey = "&api_key=xeFlPqu66amv7FxKnypBtzmz5TtVyhH6";

  const [fact, setFact] = useState("Sin Fact");
  const [gif, setGif] = useState();
  const [cont, setCont] = useState(0);

  const handleClick = () => {
    let pos = cont;
    if(pos == 50) pos = 0;
    setCont(pos + 1)
  }

  const giphyCall = (giphyData) =>{
    const url = giphyUrl + giphyData + apiKey;
    fetch(url)
    .then(response => response.json())
    .then(data => {
      setGif(data.data[cont].images.original.url);
      handleClick();
    });
  }

  useEffect(()=>{
    fetch(catFactUrl)
    .then(response => response.json())
    .then(data => {
      let giphyData = data.fact.split(" ",3).join(" ");
      setFact(data.fact);
      giphyCall(giphyData);
    });
  },[])

  return (
    <div className="container">
      <div className="content">
        <img className="gif" src={gif} />
        <h2 className="fact">{fact}</h2>
      </div>
      <button className="changeGif" onClick={giphyCall}>Cambiar Gif</button>
    </div>
  )
}

export default App
