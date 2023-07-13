import { AppScreen, CustomButton } from "@components";
import { useProjectHelper } from "./project.hook";
import React, { useState } from "react";
import { DrawAllPokemons } from "./Pokemon";

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
    limit,
    offset,
    goToPokeDetails,
  } = useProjectHelper();

  console.log(pokemons[1]?.stats);

  return (
    <AppScreen header={{ title: "Project - Poke API - REACT" }}>
      <img
        src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
        alt="PokeAPI"
        width="60%"
      />
      <div
        style={{
          width: "100%",
          height: "100%",
          maxWidth: "320px",
          maxHeight: "175px",
          border: "0px solid #bee7fa",
          borderBottom: "23px solid #bee7fa",
          borderTop: "23px solid #bee7fa",
          borderRadius: "15px",
          background: "#bee7fa",
          position: "relative",
          overflow: "hidden",
          textAlign: "center",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <h2>Only 20 pokemons are shown at the same time</h2>
        <h4>Scroll through the page to see more pokemon</h4>
        <h4>
          OR Write in the 2 spaces below to search for the pokemons you want
        </h4>
      </div>
      <p>---------------------------------</p>
      <div>
        <label>
          <p>
            (Number of pokemons you want to get; <i>MAXIMUM = 20</i>)
          </p>
          <p>
            <b>Limit</b>:{" "}
            <input type="number" value={limit} onChange={handleLimitChange} />
          </p>
          <br></br>
        </label>
        {""}
        <label>
          <p>
            (From which index you want to search for; <i>MAXIMUM = 1280</i>)
          </p>
          <p>
            <b>Offset</b>:{" "}
            <input type="number" value={offset} onChange={handleOffsetChange} />
          </p>
          <br></br>
        </label>
      </div>
      {""}
      <button
        onClick={() => {
          fetchPokemons();
        }}
      >
        See results
      </button>
      <CustomButton
        text="See Results"
        onClick={() => {
          fetchPokemons();
          goToPokeDetails();
        }}
        styles={{ margin: "0 auto 15px auto" }}
      />
      <DrawAllPokemons pokemons={pokemons} />
    </AppScreen>
  );
};
