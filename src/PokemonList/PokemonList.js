import React, {useEffect, useState} from React
import axios from 'axios';

const PokemonList = () => {
    const [pokemon, setPokemon] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

  return (
    <div>
      <h1>Random Pokémon</h1>
      <main>
        {pokemon.map(p => (
            <>
            <h2>{p.name}</h2>
            <img src={p.sprites.front_default} alt={p.name} />
            </>
        ))}

        </main>
    </div>
  );
};

