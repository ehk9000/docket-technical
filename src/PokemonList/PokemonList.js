import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PokemonList = () => {
  const [pokemon, setPokemon] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        // Generate three random Pokémon IDs
        const pokemonIds = Array.from(
          { length: 3 },
          () => Math.floor(Math.random() * 1025) + 1
        );
        const pokemonData = await Promise.all(
          pokemonIds.map((id) =>
            axios
              .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
              .then((res) => res.data)
          )
        );
        // set Pokemon response to state
        setPokemon(pokemonData);
      } catch (error) {
        setError('Failed to fetch Pokémon');
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, []);

  return (
    <div>
      <h1>Random Pokémon</h1>
      <main>
        {pokemon.map((p) => (
          <>
            <article>
              <h2>{p.name}</h2>
              <img src={p.sprites.front_default} alt={p.name} />
            </article>
          </>
        ))}
      </main>
    </div>
  );
};

export default PokemonList;
