import { AppScreen, CustomButton } from "@components";
import { useProjectHelper } from "./project.hook";
import React, { useState } from "react";

interface PokemonListResultItem {
  name: string;
  url: string;
}

interface PokemonListResult {
  results: PokemonListResultItem[];
}

export const Project = () => {
  // Saber se o utilizador já fez algum pedido
  const [withRequest, setRequest] = useState(false); // no inicio ainda não fez um pedido
  // Início do programa - mostrar os pokemons em sequência
  const [initial, setInitial] = useState(true);
  // Armazenados valores de pedido do utilizador
  const [limit, setLimit] = useState(0);
  

  const { sayHello } = useProjectHelper();


  const fetchPokemons = async () => {
    const fetchResult = await fetch("https://pokeapi.co/api/v2/pokemon");
    const fetchJSON = await fetchResult.json();
    //console.log(fetchJSON);
    const pokemonsData = [];
    for (let i = 0; i < fetchJSON.results.length; i++) {
      // console.log(fetchJSON.results[i]);
      const pokeResult = await fetch(fetchJSON.results[i].url);
      const pokeJSON = await pokeResult.json();
      pokemonsData.push(pokeJSON); // CUIDADO, só se recebem 20 pokemons de cada vez
    }
    //console.log(pokemonsData);
  };

  React.useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <AppScreen header={{ title: "Project - Poke API - REACT" }}>
      
    </AppScreen>
  );
};
