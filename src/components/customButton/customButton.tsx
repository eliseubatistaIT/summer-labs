type CustomButtonVariant = "primary" | "secondary";

export interface CustomButtonProps {
  text?: string;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  variant: CustomButtonVariant;
  onClick: () => void;
}

export const CustomButton = (props: CustomButtonProps) => {
  const { text, startContent, endContent, variant, onClick } = props;

  return (
    <button
      style={{
        display: "flex",
        flexDirection: "row",
        background: variant === "primary" ? "#3e56df" : "#ffffff",
        border: variant === "primary" ? "none" : "3px solid #3e56df",
        padding: "15px 20px",
        borderRadius: "15px",
        color: variant === "primary" ? "#ffffff" : "#000000",
      }}
      onClick={() => onClick()}
    >
      {startContent && (
        <div style={{ maxWidth: "30px", maxHeight: "30px", margin: "auto" }}>
          {startContent}
        </div>
      )}
      {text && <p>{text}</p>}
      {endContent && (
        <div style={{ maxWidth: "30px", maxHeight: "30px", margin: "auto" }}>
          {endContent}
        </div>
      )}
    </button>
  );
};
