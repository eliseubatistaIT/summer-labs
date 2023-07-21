import produce from "immer";
import { createJSONStorage } from "zustand/middleware";
import { StoreHelper } from "../store.helper";
import { Pokemon } from "src/screens/project/Pokemon";

export interface BaseState {
  isLoading: boolean;
  pokemon?: Pokemon;
  favorites: Pokemon[];
}

const initialState: BaseState = {
  isLoading: false,
  favorites: [],
  pokemon: undefined,
};

interface UseBaseStoreOutput extends BaseState {
  setIsLoading: (value: boolean) => void;
  setFavorites: (value: Pokemon) => void;
  //TODO: Create remove favorite
  setPokemon: (value: Pokemon) => void;
}

export const useBaseStore = StoreHelper.createStore<UseBaseStoreOutput>(
  (set) => ({
    ...initialState,
    setIsLoading: function (value: boolean) {
      set(
        produce((state: BaseState) => ({
          ...state,
          isLoading: value,
        })),
        false,
        "setIsLoading"
      );
    },
    setFavorites: function (value: Pokemon) {
      set(
        produce((state: BaseState) => {
          const pokemonIndex = state.favorites.findIndex(
            (pokemon: Pokemon) => pokemon.id === value.id
          );
          let newFavorites = [...state.favorites];
          if (pokemonIndex !== -1) {
            // Pokemon already exists in the favorites list, remove it
            alert(value.name + " was REMOVED from Favorites!");
            newFavorites = state.favorites.filter(
              (pokemon) => pokemon.id !== value.id);
          } else {
            alert(value.name + " was ADDED to Favorites!");
            // Pokemon doesn't exist in the favorites list, add it
            newFavorites.push(value);
            //return { ...state, favorites: state.favorites.push(value) };
          }
          return {
            ...state,
            favorites: newFavorites
          };

          console.log(state.favorites);
        }),
        false,
        "setFavorites"
      );
    },
    setPokemon: function (value: Pokemon) {
      set(
        produce((state: BaseState) => ({
          ...state,
          pokemon: value,
        })),
        false,
        "setPokemon"
      );
    },
  }),
  "Base",
  createJSONStorage(() => sessionStorage)
);
