import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './PokeComponent.css';

function PokeComponent(props) {
const [pokemon, setPokemon] = useState('');
const propsies = props.number;

//Use full url from props for axios.get :D
async function getPokemon() {
    const result = await axios.get('https://pokeapi.co/api/v2/pokemon/'+propsies)
    console.log(result);
    setPokemon(result.data);
}

    useEffect(() =>{
    getPokemon();
    },[]);

    return(pokemon &&
        <div className='pokeCard'>
            <h2>{pokemon.name}</h2>
            <img src={pokemon.sprites.front_default} alt='Sprite of Pokemon}'/>
            <p>Moves: {pokemon.moves.length}</p>
            <p>Weight: {pokemon.weight}</p>
            <p>Abilities:</p>
            <ul>
                <li>{pokemon.abilities[0]?.ability.name}</li>
                <li>{pokemon.abilities[1]?.ability.name}</li>
            </ul>
        </div>
    )

}

export default PokeComponent;
