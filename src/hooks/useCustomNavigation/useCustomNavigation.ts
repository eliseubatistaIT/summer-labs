import { useNavigate } from "react-router-dom";

export interface UseCustomNavigationProps {
  goBack: (steps?: number) => void;
  goTo: (screenPath: string) => void;
}

export const useCustomNavigation = (): UseCustomNavigationProps => {
  const navigate = useNavigate();

  const goBack = (steps?: number) => {
    navigate(steps || 1);
  };

  const goTo = (screenPath: string) => {
    navigate(screenPath, { replace: true });
  };

  return {
    goBack,
    goTo,
  };
};
