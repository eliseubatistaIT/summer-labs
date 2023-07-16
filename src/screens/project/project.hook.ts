import React, { useState } from "react";
import { Pokemon } from "./Pokemon";
import { ScreenPaths } from "@constants";
import { useCustomNavigation, useFetch } from "@hooks";

export const useProjectHelper = () => {
  const fetch = useFetch();
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

  const { goTo } = useCustomNavigation();

  const handleGoToPokeDetails = () => {
    goTo(ScreenPaths.project.pokedetails);
  };

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

  const handleInitialChange = () => {
    setInitial(false);
  };

  const fetchPokemons = async () => {
    // let final_url =
    //   "https://pokeapi.co/api/v2/pokemon?limit=" + limit + "&offset=" + offset;
    // const fetchResult = await fetch(final_url);
    // const fetchJSON = await fetchResult.json();
    const pokeListResult = await fetch<any>(
      "https://pokeapi.co/api/v2/pokemon",
      {
        limit: limit,
        offset: offset,
      }
    );
    let pokemonsData: Pokemon[] = [];
    //console.log(fetchJSON);
    for (let i = 0; i < pokeListResult.results.length; i++) {
      //console.log(fetchJSON.results[i]);
      const pokeResult = await fetch<Pokemon>(pokeListResult.results[i].url);
      //console.log(newPokemonsData);
      pokemonsData.push(pokeResult); // CUIDADO, só se recebem 20 pokemons de cada vez
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
    handleInitialChange,
    limit,
    offset,
    initial,
    goToPokeDetails: handleGoToPokeDetails,
  };
};
