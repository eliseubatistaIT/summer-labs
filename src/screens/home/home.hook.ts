import { ScreenPaths } from "@constants";
import { useCustomNavigation } from "@hooks";

export const useHomeHelper = () => {
  const { goTo } = useCustomNavigation();

  const handleGoToChallenge1 = () => {
    goTo(ScreenPaths.challenge1);
  };

  const handleGoToChallenge2 = () => {
    goTo(ScreenPaths.challenge2);
  };

  const handleGoToChallenge2_5 = () => {
    goTo(ScreenPaths.challenge2_5);
  };

  const handleGoToProject = () => {
    goTo(ScreenPaths.project.pokeapi);
  };

  const handleGoToNamePokemon = () => {
    goTo(ScreenPaths.project.name_pokemon);
  };

  const handleGoListPokemon = () => {
    goTo(ScreenPaths.project.list_pokemons);
  };

  return {
    goToChallenge1: handleGoToChallenge1,
    goToChallenge2: handleGoToChallenge2,
    goToChallenge2_5: handleGoToChallenge2_5,
    goToProject: handleGoToProject,
    goToNamePokemon: handleGoToNamePokemon,
    goToListPokemon: handleGoListPokemon,
  };
};
