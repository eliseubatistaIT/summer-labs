import { CSSProperties } from "react";

export interface CustomImageProps {
  src: string;
  containerStyles?: CSSProperties;
  imageStyles?: CSSProperties;
}

export const CustomImage = ({
  src,
  containerStyles,
  imageStyles,
}: CustomImageProps) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        ...containerStyles,
      }}
    >
      <img
        src={src}
        alt=""
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          ...imageStyles,
        }}
      />
    </div>
  );
};
