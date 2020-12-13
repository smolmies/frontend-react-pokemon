import React from 'react';
import './App.css';
import PokeComponent from "./PokeComponent";

function App() {
    let offset = 0;
    function onClickPrevious(){
        offset = offset - 20;
        //FetchApiCAllAndRenderStuffies
    }

    function onClickNext(){
        offset = offset + 20;
        //FetchAPICCallAndRenderStuffies
    }

    useEffect(() => {
        //Ring ring hello api can has 20 results with name plx
        //Put results in poke array
    },[offset])
let pokeArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
  return (
      <>
        <div>
            <h1>
                POKeMOOOOOOOON !
            </h1>
            <p>I CHOOSE YOU</p>
            <button type='button' onClick={onClickPrevious}>Vorige</button>
            <button type='button' onClick={onClickNext}>Volgende</button>
        </div>

        <div>
            {pokeArray.map(() => {
                return <PokeComponent key={i} number={i} /> // Use the url in stead of just number
            })}
        </div>
      </>
  );
}

export default App;
