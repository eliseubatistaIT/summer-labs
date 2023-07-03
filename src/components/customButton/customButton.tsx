import { CSSProperties } from "react";

export interface CustomButtonProps {
  text?: string;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  onClick: () => void;
  styles?: CSSProperties;
}

export const CustomButton = (props: CustomButtonProps) => {
  const { text, startContent, endContent, onClick, styles } = props;

  return (
    <button
      style={{
        display: "flex",
        flexDirection: "row",
        background: "#3e56df",
        padding: "15px 20px",
        borderRadius: "15px",
        color: "#ffffff",
        width: "300px",
        height: "55px",
        ...styles,
      }}
      onClick={() => onClick()}
    >
      {startContent && (
        <div style={{ maxWidth: "30px", maxHeight: "30px", margin: "auto" }}>
          {startContent}
        </div>
      )}
      {text && <p style={{ textAlign: "center", flex: 1 }}>{text}</p>}
      {endContent && (
        <div style={{ maxWidth: "30px", maxHeight: "30px", margin: "auto" }}>
          {endContent}
        </div>
      )}
    </button>
  );
};
