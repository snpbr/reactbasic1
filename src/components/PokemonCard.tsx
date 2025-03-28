import { useState } from "react";

function PokemonCard() {
  return (
    <div>
    <figure>
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
        alt="Cette image représente le Pokémon Bulbasaur"
      />
    <figcaption>Bulbasaur</figcaption>
    </figure>
    </div>
  );
}

export default PokemonCard;
