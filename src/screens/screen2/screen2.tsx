import { CustomButton } from "../../components";
import { useScreen2Helper } from "./screen2.hook";

export const Screen2 = () => {
  const { goToScreen1 } = useScreen2Helper();

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100%",
        padding: "50px",
        alignItems: "center",
      }}
    >
      <p>Screen 2</p>
      <CustomButton
        text="Go To Screen 1"
        onClick={() => goToScreen1()}
        variant={"secondary"}
      />
    </div>
  );
};
