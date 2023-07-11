interface Ability {
  name: string;
  url: string;
}

interface Stats {
  hp: number;
  attack: number;
  defense: number;
  special_attack: number; // special-attack
  special_defense: number; // special-defense
  speed: number;
}

interface Sprites {
  back_default: string;
  back_female?: string;
  back_shiny: string;
  back_shiny_female?: string;
  front_default: string;
  front_female?: string;
  front_shiny: string;
  front_shiny_female?: string;
}

interface Move {
  name: string;
  url: string;
}

interface Type {
  name: string;
  url: string;
}

export interface Pokemon {
  abilities: Ability[];
  name: string;
  id: number; // número do pokemon na pokedex
  sprites: Sprites; // criar estrutura das sprites
  stats: Stats;
  types: Type[];
  base_experience: number;
  moves: Move[];
}

export function DrawAllSprites({ sprites }: { sprites: Sprites }) {
  return (
    <>
      <div>
        <img src={sprites.back_default} alt="Back-Default" />
        {sprites.back_female && (
          <img src={sprites.back_female} alt="Back-Female" />
        )}
      </div>
      <div>
        <img src={sprites.back_shiny} alt="Back-Shiny" />
        {sprites.back_shiny_female && (
          <img src={sprites.back_shiny_female} alt="Back-Shiny-Female" />
        )}
      </div>
      <div>
        <img src={sprites.front_default} alt="Front-Default" />
        {sprites.front_female && (
          <img src={sprites.front_female} alt="Front-Female" />
        )}
      </div>
      <div>
        <img src={sprites.front_shiny} alt="Front-Shiny" />
        {sprites.front_shiny_female && (
          <img src={sprites.front_shiny_female} alt="Front-Shiny-Female" />
        )}
      </div>
    </>
  );
}

/*
*/
function DrawPokemon(pokemon: Pokemon) {
  return (
    <>
      <label>
        Pokemon Name: {pokemon.name}; Nº: {pokemon.id}
      </label>
      {/* {!pokemon.types[1].name && <p>Type: {pokemon.types[0].name}</p>}
      {pokemon.types[1].name && <p>Types: {pokemon.types[0].name}, {pokemon.types[1].name}</p>} */}
      <table />
      <DrawStats stats={pokemon.stats} />
      <DrawAllSprites sprites={pokemon.sprites} />
    </>
  );
}

export function DrawAllPokemons({pokemons}: {pokemons: Pokemon[]}) {
  return (
    <>
    {pokemons.map((pokemon) => DrawPokemon(pokemon))}
    </>
    );
}

function DrawStats({ stats }: { stats: Stats }) {
  const columns = [
    "HP (Health Points)",
    "Attack",
    "Defense",
    "Special Attack",
    "Special Defense",
    "Speed",
  ];
  const values = [
    stats.hp,
    stats.attack,
    stats.defense,
    stats.special_attack,
    stats.special_defense,
    stats.speed,
  ];
  return (
    <>
      <div>
        <table>
          <tbody>{columns}</tbody>
        </table>
      </div>
    </>
  );
}
