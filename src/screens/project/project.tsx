import { AppScreen, CustomButton } from "@components";
import { useProjectHelper } from "./project.hook";
import React, { useState } from "react";
import { DrawPokemon } from "./Pokemon";

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
  const [limit, setLimit] = useState<number>(20); // nº de pokemons que vai buscar
  const [offset, setOffset] = useState<number>(0); // indice donde começa

  const pokemonsData = []; // Dados de todos os pokemons desejados

  /* CUIDADOS a ter
     - só 
  */

  const { sayHello } = useProjectHelper();

  function handleLimitChange(e: any) {
    let n = e.target.valueAsNumber;
    if (n <= 20 || n >= 0) {
      setLimit(e.target.valueAsNumber);
    }
  }

  function handleOffsetChange(e: any) {
    let n = e.target.valueAsNumber;
    if (n > 1280) {

    }
    setOffset(e.target.valueAsNumber);
  }

  const fetchPokemons = async (limit: number, offset: number) => {
    const fetchResult = await fetch("https://pokeapi.co/api/v2/pokemon");
    const fetchJSON = await fetchResult.json();
    //console.log(fetchJSON);
    for (let i = 0; i < fetchJSON.results.length; i++) {
      // console.log(fetchJSON.results[i]);
      const pokeResult = await fetch(fetchJSON.results[i].url);
      const pokeJSON = await pokeResult.json();
      pokemonsData.push(pokeJSON); // CUIDADO, só se recebem 20 pokemons de cada vez
    }
    //console.log(pokemonsData);
  };

  React.useEffect(() => {
    fetchPokemons(limit, offset);
  }, []);

  return (
    <AppScreen header={{ title: "Project - Poke API - REACT" }}>
      <img
        src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
        alt="PokeAPI"
        max-width="50%"
      />
      <p></p>
      <h2>Only 20 pokemons are shown at the same time</h2>
      <p>Scroll through the page to see more pokemon</p>
      <p>
        OR Search write in the 2 spaces below to search for the pokemons you
        want
      </p>
      <div>
        <label>
          (Number of pokemons you want to get; <i>MAXIMUM = 20</i>) Limit:
          <input type="number" value={limit} onChange={handleLimitChange} />
          <br></br>
        </label>
        <label>
          (From which index you want to search for; <i>MAXIMUM = 1280</i>) Offset:
          <input type="number" value={offset} onChange={handleOffsetChange} />
          <br></br>
        </label>
      </div>
      <button>See results</button>
    </AppScreen>
  );
};
