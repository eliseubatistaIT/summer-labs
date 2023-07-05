import { AppScreen, CustomButton } from "@components";
import { useChallenge1Helper } from "./challenge1.hook";
import Cabecalho from "./cabecalho"
import { CabecalhoProps } from "./cabecalho";

export const Challenge1 = () => {
  // const { sayHello } = useChallenge1Helper();
  /* (estava antes como clid de AppScreen)
  <CustomButton
        text="Say Hello"
        onClick={() => sayHello()}
        styles={{ margin: "auto auto 20px auto" }}
      />
  */

  return (
    <AppScreen header={{ title: "Challenge 1" }}>
      <Cabecalho titulo={"Desafio concluído"} subtitulo={"Com subtítulo"}/>
      <Cabecalho titulo={"Só para mostrar que o subtítulo pode ser facultativo!"}/>
    </AppScreen>
  );
};
