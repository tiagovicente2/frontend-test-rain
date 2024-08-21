import { useEffect } from 'react';

import { pokemons } from './services/pokeapi'

export const App = () => {
  useEffect(() => {
    pokemons.list({
      limit: 10,
    })
  }, [])

  return (
    <div>
      <header>
        <h2 style={{ fontSize: '2.5em' }}>Rain Pokedex Test</h2>
      </header>
      <p style={{ fontSize: '2em' }}>Any files from the components to the webpack config can be modified, feel free to setup the project for your needs.</p>
    </div>
  );
}
