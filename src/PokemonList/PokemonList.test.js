import { render, screen } from '@testing-library/react';
import PokemonList from './PokemonList';

jest.mock('axios');

test('renders error state initially', () => {
  render(<PokemonList />);
  const error = screen.getByText('Failed to fetch Pokémon');

  expect(error).toBeInTheDocument();
});
