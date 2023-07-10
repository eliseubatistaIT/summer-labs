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
    back_female ?: string;
    back_shiny: string;
    back_shiny_female ?: string;
    front_default: string;
    front_female ?: string
    front_shiny: string
    front_shiny_female ?: string
}

export interface Pokemon {
    abilities: Ability[];
    name: string;
    sprites: Sprites; // criar estrutura das sprites
    stats: Stats;
    types: string[];
}