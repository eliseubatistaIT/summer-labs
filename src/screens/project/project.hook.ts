import React, { useState } from "react";
import { Pokemon } from "./Pokemon";

export const useProjectHelper = () => {
    // Saber se o utilizador já fez algum pedido
    const [withRequest, setRequest] = useState(false); // no inicio ainda não fez um pedido
    // Início do programa - mostrar os pokemons em sequência
    const [initial, setInitial] = useState(true);
    // Armazenados valores de pedido do utilizador
    const [limit, setLimit] = useState<number>(20); // nº de pokemons que vai buscar
    const [offset, setOffset] = useState<number>(0); // indice donde começa

    // transformar pokemonsData em State
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  
    /* CUIDADOS a ter
       - só 
    */
  
    function handleLimitChange(e: any) {
      let n = e.target.valueAsNumber;
      if (n > 20) setLimit(20);
      else if (n < 0) setLimit(0);
      else setLimit(e.target.valueAsNumber);
    }
  
    function handleOffsetChange(e: any) {
      let n = e.target.valueAsNumber;
      if (n > 1280) setOffset(1280);
      else if (n < 0) setOffset(0);
      else setOffset(e.target.valueAsNumber);
    }
  
    const fetchPokemons = async () => {
      let final_url = "https://pokeapi.co/api/v2/pokemon?limit=" + limit + "&offset=" + offset;
      const fetchResult = await fetch(final_url);
      const fetchJSON = await fetchResult.json();
      let pokemonsData: Pokemon[] = [];
      //console.log(fetchJSON);
      for (let i = 0; i < fetchJSON.results.length; i++) {
        //console.log(fetchJSON.results[i]);
        const pokeResult = await fetch(fetchJSON.results[i].url);
        const pokeJSON = await pokeResult.json() as Pokemon; 
        //console.log(newPokemonsData);
        pokemonsData.push(pokeJSON); // CUIDADO, só se recebem 20 pokemons de cada vez
      }
      //console.log(newPokemonsData);
      setPokemons(pokemonsData);
      // newPokemonsData = newPokemonsData.filter((element, index) => {
      //   return newPokemonsData.indexOf(element) !== index;
      // });
      //console.log(pokemons);
      
      
      // a técnica utilizada acima já faz grande parte do trabalho
      // MAS, é preciso fazer algumas correções
    };
  
    React.useEffect(() => {
      fetchPokemons();
    }, []);

  return {
    pokemons,
    fetchPokemons,
    handleLimitChange,
    handleOffsetChange,
    limit, offset
  };
};
