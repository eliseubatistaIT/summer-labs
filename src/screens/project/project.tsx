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

  const {
    pokemons,
    fetchPokemons,
    handleLimitChange,
    handleOffsetChange,
    limit, offset
  } = useProjectHelper();
  
  console.log(pokemons[1]?.name);


  return (
    <AppScreen header={{ title: "Project - Poke API - REACT" }}>
      <img
        src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
        alt="PokeAPI"
        width= "60%"
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
      <button onClick={() => {fetchPokemons()}}> See results</button>
    </AppScreen>
  );
};
