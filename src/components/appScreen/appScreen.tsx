export interface AppScreenProps {
  children?: React.ReactNode;
}

export const AppScreen = ({ children }: AppScreenProps) => {
  return (
    <div
      style={{
        width: "100%",
        padding: "30px 10px",
        flex: 1,
        overflow: "auto",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "fit-content",
          alignItems: "center",
          flex: 1,
        }}
      >
        {children}
      </div>
    </div>
  );
};
