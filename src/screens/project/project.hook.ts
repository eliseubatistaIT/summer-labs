import React, { ChangeEvent, useCallback, useState } from "react";
import { ScreenPaths } from "@constants";
import { useCustomNavigation, useFetch } from "@hooks";
import { useBaseStore } from "@store";
import { Pokemon } from "@types";

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

  const [pokemons_full, setPokemonsFull] = useState<Pokemon[]>([]);
  //const [lengthFull, setLengthFull] = useState(0);

  const pokedexInitialized = React.useRef<boolean>(false);

  //
  const [searchPokemonWhatever, setPokemonWhatever] = useState("");

  /* CUIDADOS a ter
       - só 
    */

  const handleGoToPokeDetails = () => {
    goTo(ScreenPaths.project.pokedetails);
  };

  const handleGoToFavorites = () => {
    goTo(ScreenPaths.project.favorites);
  };

  const handleGoToNamePokemon = () => {
    goTo(ScreenPaths.project.name_pokemon);
  };

  const handleGoToListPokemons = () => {
    goTo(ScreenPaths.project.list_pokemons);
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

  const fetchPokemonsFull = useCallback(async () => {
    try {
      setIsLoading(true);
      const pokeListResult = await fetch<any>(
        "https://pokeapi.co/api/v2/pokemon",
        {
          limit: 60,
          offset: 0,
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
      setPokemonsFull(pokemonsData);
      //setLengthFull(pokemonsData.length);
      setIsLoading(false);
      // newPokemonsData = newPokemonsData.filter((element, index) => {
      //   return newPokemonsData.indexOf(element) !== index;
      // });
      //console.log(pokemons);
    } catch (error) {
      setIsLoading(false);
    }
  }, [fetch, setIsLoading]);

  const filterPokemonSearch = () => {
    // if (lengthFull === 0) await fetchPokemonsFull();
    const result = pokemons_full.filter((pokemon: Pokemon) => {
      return pokemon.name.includes(searchPokemonWhatever);
    });
    return result;
  };

  const fetchPokemons = useCallback(async () => {
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
  }, [fetch, limit, offset, setIsLoading]);

  React.useEffect(() => {
    if (!pokedexInitialized.current) {
      pokedexInitialized.current = true;
      //fetchPokemons();
      fetchPokemonsFull();
    }
  }, [fetchPokemons, fetchPokemonsFull]);

  /**Warning: Maximum update depth exceeded.
   * This can happen when a component calls setState inside useEffect,
   * but useEffect either doesn't have a dependency array,
   * or one of the dependencies changes on every render.
   * at Project (http://localhost:3000/static/js/bundle.js:5189:7)
   * at RenderedRoute (http://localhost:3000/static/js/bundle.js:46737:5)
   * at Routes (http://localhost:3000/static/js/bundle.js:47369:5)
   * at div at App (http://localhost:3000/static/js/bundle.js:43:66)
   * at Router (http://localhost:3000/static/js/bundle.js:47307:15)
   * at BrowserRouter (http://localhost:3000/static/js/bundle.js:45413:5)
   * overrideMethod @ console.js:213 printWarning @ react-dom.development.js:86 error @ react-dom.development.js:60 checkForNestedUpdates @ react-dom.development.js:27300 scheduleUpdateOnFiber @ react-dom.development.js:25475 forceStoreRerender @ react-dom.development.js:16977 handleStoreChange @ react-dom.development.js:16953 (anonymous) @ vanilla.mjs:9 setState @ vanilla.mjs:9 api.setState @ middleware.mjs:56 (anonymous) @ middleware.mjs:486 setIsLoading @ base.ts:29 fetchPokemonsFull @ project.hook.ts:104 filterPokemonSearch @ project.hook.ts:70 useProjectHelper @ project.hook.ts:159 Project @ project.tsx:18 renderWithHooks @ react-dom.development.js:16305 updateFunctionComponent @ react-dom.development.js:19588 beginWork @ react-dom.development.js:21601 beginWork$1 @ react-dom.development.js:27426 performUnitOfWork @ react-dom.development.js:26557 workLoopSync @ react-dom.development.js:26466 renderRootSync @ react-dom.development.js:26434 performSyncWorkOnRoot @ react-dom.development.js:26085 flushSyncCallbacks @ react-dom.development.js:12042 (anonymous) @ react-dom.development.js:25651
   * Show 1 more frame */

  return {
    pokemons,
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
    goToFavorites: handleGoToFavorites,
    goToNamePokemon: handleGoToNamePokemon,
    goToListPokemons: handleGoToListPokemons,
    pokemons_full: filterPokemonSearch(),
    fetchPokemonsFull,
  };
};
