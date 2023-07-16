import React from "react";

export type Device = "mobile" | "tablet" | "desktop";

export const useResponsive = () => {
  const [device, setDevice] = React.useState<Device>("desktop");

  React.useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth <= 480) {
        setDevice("mobile");
      } else if (window.innerWidth <= 768) {
        setDevice("tablet");
      } else {
        setDevice("desktop");
      }
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return {
    device,
  };
};
