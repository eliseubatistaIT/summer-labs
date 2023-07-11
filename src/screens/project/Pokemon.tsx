interface Ability {
  name: string;
  url: string;
}

interface Stat {
  base_stat: number;
  effort: number;
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
  slot: number;
  type:{
    name?: string;
    url?: string;
  };
}

export interface Pokemon {
  abilities: Ability[];
  name: string;
  id: number; // número do pokemon na pokedex
  sprites: Sprites; // criar estrutura das sprites
  stats: Stat[];
  types: Type[];
  base_experience: number;
  moves: Move[];
}

export function DrawAllSprites({ sprites }: { sprites: Sprites }) {
  return (
    <>
      <div>
        <img src={sprites.back_default} alt="Back-Default" />
        <p>Sprite Back-Default</p>
        {sprites.back_female && (
          <img src={sprites.back_female} alt="Back-Female" />
        )}
        {sprites.back_female && <p>Sprite Back-Female</p>}
      </div>
      <div>
        <img src={sprites.back_shiny} alt="Back-Shiny" />
        <p>Sprite Back-Shiny</p>
        {sprites.back_shiny_female && (
          <img src={sprites.back_shiny_female} alt="Back-Shiny-Female" />
        )}
        {sprites.back_shiny_female && <p>Sprite Back-Shiny-Female</p>}
      </div>
      <div>
        <img src={sprites.front_default} alt="Front-Default" />
        <p>Sprite Front-Default</p>
        {sprites.front_female && (
          <img src={sprites.front_female} alt="Front-Female" />
        )}
        {sprites.front_female && <p>Sprite Front-Female</p>}
      </div>
      <div>
        <img src={sprites.front_shiny} alt="Front-Shiny" />
        <p>Sprite Front-Shiny</p>
        {sprites.front_shiny_female && (
          <img src={sprites.front_shiny_female} alt="Front-Shiny-Female" />
        )}
        {sprites.front_shiny_female && <p>Sprite Front-Shiny-Female</p>}
      </div>
    </>
  );
}

function DrawPokemon(pokemon: Pokemon) {
  return (
    <>
      <p>----------------------------------</p>
      <label>
        <b>Pokemon Name</b>: {pokemon.name}; <b>Nº</b>: {pokemon.id}
      </label>
      {!pokemon?.types[1]?.type.name && (<p><b>Type</b>: {pokemon?.types[0]?.type.name}</p>)}
      {pokemon?.types[1]?.type.name && <p><b>Types</b>: {pokemon?.types[0]?.type.name}, {pokemon?.types[1]?.type.name}</p>}
      <table />
      <DrawStats stats={pokemon?.stats} />
      <DrawAllSprites sprites={pokemon.sprites} />
      <p>----------------------------------</p>
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

function DrawStats({ stats }: { stats: Stat[] }) {
  const columns = [
    "HP (Health Points)",
    "Attack",
    "Defense",
    "Special Attack",
    "Special Defense",
    "Speed",
  ];
  const values = [
    stats[0].base_stat,
    stats[1].base_stat,
    stats[2].base_stat,
    stats[3].base_stat,
    stats[4].base_stat,
    stats[5].base_stat,
  ];

  return (
    <>
      <div>
        <h4><u>STATS</u></h4>
        <p>- <b>HP (Health Points)</b>: {stats[0].base_stat} -</p>
        <p>- <b>Attack</b>: {stats[1].base_stat} -</p>
        <p>- <b>Defense</b>: {stats[2].base_stat} -</p>
        <p>- <b>Special Attack</b>: {stats[3].base_stat} -</p>
        <p>- <b>Special Defense</b>: {stats[4].base_stat} -</p>
        <p>- <b>Speed</b>: {stats[5].base_stat} -</p>
      </div>
    </>
  );
}
