import { ImageAssets } from "@assets";
import { useAppHeaderHelper } from "./appHeader.hook";

export interface AppHeaderProps {
  title: string;
  hideBack?: boolean;
}

export const AppHeader = ({ title, hideBack }: AppHeaderProps) => {
  const { onClickBack } = useAppHeaderHelper();

  return (
    <div
      style={{
        width: "100%",
        minHeight: "55px",
        maxHeight: "60px",
        padding: "5px 30px",
        boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 0",
        alignItems: "center",
        justifyContent: "center",
        background: "#ffffff",
        zIndex: "100",
      }} // position: "fixed",
    >
      {!hideBack && (
        <img
          alt=""
          src={ImageAssets.back}
          style={{
            width: "15px",
            height: "15px",
            position: "absolute",
            left: "15px",
            cursor: "pointer",
          }}
          onClick={() => onClickBack()}
        />
      )}

      <p
        style={{
          width: "100%",
          textAlign: "center",
          textTransform: "uppercase",
          fontWeight: 700,
        }}
      >
        {title}
      </p>
    </div>
  );
};
