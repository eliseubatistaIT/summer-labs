import { useState } from "react";
import { AppScreen, CustomButton } from "@components";
import { useChallenge2Helper } from "./challenge2.hook";

export const Challenge2 = () => {
  //const { sayHello } = useChallenge2Helper();
  const [showMore, setShowMore] = useState(false);

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  return (
    <AppScreen header={{ title: "Challenge 2" }}>
      <button onClick={handleMoreClick}>
        {showMore ? "Hide" : "Show"} title
      </button>
      {showMore && <h1>Challenge 2 completed!</h1>}
    </AppScreen>
  );
};
