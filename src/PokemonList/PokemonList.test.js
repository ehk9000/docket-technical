import { render, screen } from '@testing-library/react';
import PokemonList from './PokemonList';
import '@testing-library/jest-dom/extend-expect';

jest.mock('axios');

test('renders loading state initially', () => {
  render(<PokemonList />);
  const loadingElement = screen.getByText(/Loading.../i);
  expect(loadingElement).toBeInTheDocument();
});
