import { ScreenPaths } from "../../constants";
import { useCustomNavigation } from "../../hooks";

export const useScreen2Helper = () => {
  const { goTo } = useCustomNavigation();

  const handleGoToScreen1 = () => {
    goTo(ScreenPaths.screen1);
  };

  return {
    goToScreen1: handleGoToScreen1,
  };
};
