import { render, screen, waitFor } from '@testing-library/react';
import PokemonList from './PokemonList';
import axios from 'axios';

jest.mock('axios');

afterEach(() => {
  jest.clearAllMocks();
});

test('renders error state initially', () => {
  render(<PokemonList />);
  const error = screen.getByText('Failed to fetch Pokémon');

  expect(error).toBeInTheDocument();
});

test('call pokemon api when the component is mounted', async () => {
  axios.get.mockResolvedValueOnce();

  axios.get.mockResolvedValueOnce();

  axios.get.mockResolvedValueOnce();

  render(<PokemonList />);

  await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(3));
});
