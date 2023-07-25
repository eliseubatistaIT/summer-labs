export interface Ability {
  name: string;
  url: string;
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
  };
}

export interface Sprites {
  back_default: string;
  back_female?: string;
  back_shiny: string;
  back_shiny_female?: string;
  front_default: string;
  front_female?: string;
  front_shiny: string;
  front_shiny_female?: string;
}

export interface Move {
  name: string;
  url: string;
}

export interface Type {
  slot: number;
  type: {
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
