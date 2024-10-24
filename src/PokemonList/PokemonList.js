import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from '../images/pica.gif';
import './PokemonList.css';

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

  if (loading) return <img src={Loading} alt="Loading Pikachu" />;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Random Pokémon Generator</h1>
      {
        <main>
          {pokemon.map((p) => (
            <>
              <article>
                <img src={p.sprites.front_default} alt={p.name} />
                <h2>{p.name}</h2>
                <p>
                  type:
                  {p.types.map((t) => (
                    <span>{t.type.name}</span>
                  ))}
                </p>
              </article>
            </>
          ))}
        </main>
      }
    </div>
  );
};

export default PokemonList;
