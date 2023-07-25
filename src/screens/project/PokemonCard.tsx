import { useBaseStore } from "@store";
import { Pokemon, Stat, Sprites } from "./Pokemon";
import { useCustomNavigation } from "@hooks";
import { PokeDetails } from "./../pokedetails/pokedetails";
import { ScreenPaths } from "./../../constants/screenPaths/screenPaths";
import { CustomButton, CustomImage } from "@components";

interface PokemonCardProps {
  pokemon: Pokemon;
}

function giveTypeColours(type: string | undefined) {
  let r = "#ffffff";
  if (type == undefined) {
    return r;
  }
  if (type == "normal") r = "#ffffff";
  else if (type == "grass") r = "#87fa8d";
  else if (type == "water") r = "#45bff7";
  else if (type == "fire") r = "#f55b5b";
  else if (type == "dark") r = "#9449fc";
  else if (type == "fairy") r = "#f5affa";
  else if (type == "ice") r = "#c1f0f7";
  else if (type == "dragon") r = "#725ef7";
  else if (type == "bug") r = "#b7d450";
  else if (type == "poison") r = "#ac65fc";
  else if (type == "steel") r = "#8a848c";
  else if (type == "ground") r = "#c7831e";
  else if (type == "rock") r = "#a85f05";
  else if (type == "fighting") r = "#f57c20";
  else if (type == "electric") r = "#fce060";
  else if (type == "psychic") r = "#f7659d";
  else if (type == "flying") r = "#bad4e0";
  return r;
}
