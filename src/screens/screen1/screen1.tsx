import { AppScreen, CustomButton } from "../../components";
import { useScreen1Helper } from "./screen1.hook";

export const Screen1 = () => {
  const { goToScreen2 } = useScreen1Helper();

  return (
    <AppScreen>
      <p>Screen 1</p>
      <CustomButton
        text="Go To Screen 2"
        onClick={() => goToScreen2()}
        variant={"primary"}
        styles={{ margin: "auto auto 20px auto" }}
      />
    </AppScreen>
  );
};
