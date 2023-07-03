import { CustomButton } from "../../components";
import { useScreen1Helper } from "./screen1.hook";

export const Screen1 = () => {
  const { goToScreen2 } = useScreen1Helper();

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100%",
        padding: "50px",
        alignItems: "center",
      }}
    >
      <p>Screen 1</p>
      <CustomButton
        text="Go To Screen 2"
        onClick={() => goToScreen2()}
        variant={"primary"}
      />
    </div>
  );
};
