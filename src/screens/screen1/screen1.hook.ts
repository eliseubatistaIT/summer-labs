import { ScreenPaths } from "../../constants";
import { useCustomNavigation } from "../../hooks";

export const useScreen1Helper = () => {
  const { goTo } = useCustomNavigation();

  const handleGoToScreen2 = () => {
    goTo(ScreenPaths.screen2);
  };

  return {
    goToScreen2: handleGoToScreen2,
  };
};
