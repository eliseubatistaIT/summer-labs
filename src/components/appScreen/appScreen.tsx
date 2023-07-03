import { AppHeader, AppHeaderProps } from "@components";

export interface AppScreenProps {
  header: AppHeaderProps;
  children?: React.ReactNode;
}

export const AppScreen = ({ header, children }: AppScreenProps) => {
  return (
    <div
      style={{
        width: "100%",
        flex: 1,
        overflow: "auto",
      }}
    >
      <AppHeader {...header} />
      <div
        style={{
          width: "100%",
          height: "fit-content",
          alignItems: "center",
          padding: "10px 10px 30px 10px",
          flex: 1,
        }}
      >
        {children}
      </div>
    </div>
  );
};
