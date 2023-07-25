import React, { ChangeEvent, useState } from "react";
import { Pokemon } from "./Pokemon";
import { ScreenPaths } from "@constants";
import { useCustomNavigation, useFetch } from "@hooks";
import { useBaseStore } from "@store";

export const useProjectHelper = () => {
  const { setIsLoading } = useBaseStore();
  const fetch = useFetch();
  const { goTo } = useCustomNavigation();
  // Início do programa - mostrar os pokemons em sequência
  const [initial, setInitial] = useState(true);
  // Armazenados valores de pedido do utilizador
  const [limit, setLimit] = useState<number>(20); // nº de pokemons que vai buscar
  const [offset, setOffset] = useState<number>(0); // indice donde começa

  // transformar pokemonsData em State
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  //
  const [searchPokemonWhatever, setPokemonWhatever] = useState("");

  /* CUIDADOS a ter
       - só 
    */

  const handleGoToPokeDetails = () => {
    goTo(ScreenPaths.project.pokedetails);
  };

  const hadleGoToFavorites = () => {
    goTo(ScreenPaths.project.favorites);
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

  const handleSearchPokemonInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPokemonWhatever(e.currentTarget.value);
    console.log("Finalmente mudaste", e.currentTarget.value);
  };

  const filterPokemonSearch = () => {
    const result = pokemons.filter((pokemon: Pokemon) => {return pokemon.name.includes(searchPokemonWhatever)});
    return result;
  };

  const fetchPokemons = async () => {
    try {
      setIsLoading(true);
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

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    fetchPokemons();
  }, []);

  return {
    pokemons: filterPokemonSearch(),
    fetchPokemons,
    handleLimitChange,
    handleOffsetChange,
    handleInitialChange,
    searchPokemonWhatever,
    handleSearchPokemonInputChange,
    limit,
    offset,
    initial,
    goToPokeDetails: handleGoToPokeDetails,
    goToFavorites: hadleGoToFavorites,
  };
};
