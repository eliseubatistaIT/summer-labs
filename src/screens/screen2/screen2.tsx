import { AppScreen, CustomButton } from "@components";
import { useScreen2Helper } from "./screen2.hook";

export const Screen2 = () => {
  const { goToScreen1 } = useScreen2Helper();

  return (
    <AppScreen>
      <p>Screen 2</p>
      <CustomButton
        text="Go To Screen 1"
        onClick={() => goToScreen1()}
        variant={"secondary"}
        styles={{ margin: "auto auto 20px auto" }}
      />
    </AppScreen>
  );
};
