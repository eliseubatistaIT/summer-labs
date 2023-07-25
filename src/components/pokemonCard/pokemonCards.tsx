import { CustomButton, CustomImage } from "@components";
import { ScreenPaths } from "@constants";
import { useCustomNavigation } from "@hooks";
import { useBaseStore } from "@store";
import { Pokemon, Stat } from "@types";

interface PokemonCardProps {
  pokemon: Pokemon;
  type: "small" | "full";
}

function giveTypeColours(type: string | undefined) {
  let r = "#ffffff";
  if (type == undefined) {
    return r;
  }
  if (type == "normal") r = "#ffffff";
  else if (type == "grass") r = "#87fa8d";
  else if (type == "water") r = "#45bff7";
  else if (type == "fire") r = "#f55b5b";
  else if (type == "dark") r = "#9449fc";
  else if (type == "fairy") r = "#f5affa";
  else if (type == "ice") r = "#c1f0f7";
  else if (type == "dragon") r = "#725ef7";
  else if (type == "bug") r = "#b7d450";
  else if (type == "poison") r = "#ac65fc";
  else if (type == "steel") r = "#8a848c";
  else if (type == "ground") r = "#c7831e";
  else if (type == "rock") r = "#a85f05";
  else if (type == "fighting") r = "#f57c20";
  else if (type == "electric") r = "#fce060";
  else if (type == "psychic") r = "#f7659d";
  else if (type == "flying") r = "#bad4e0";
  return r;
}

const DrawStats = ({ stats }: { stats: Stat[] }) => {
  const statsResult = stats.map((stat) => (
    <p>
      - <b>{stat.stat.name}</b>: {stat.base_stat} -
    </p>
  ));

  return (
    <>
      <div>
        <h4>
          <u>STATS</u>
        </h4>
        {statsResult}
      </div>
    </>
  );
};

export const PokemonCard = (props: PokemonCardProps) => {
  const { setPokemon, setFavorites } = useBaseStore();
  const { goTo } = useCustomNavigation(); // ba
  let colour = giveTypeColours(props.pokemon?.types[0].type.name);
  let colour2 = "";
  if (props.pokemon?.types[1])
    colour2 = giveTypeColours(props.pokemon?.types[1].type.name);
  else colour2 = colour;
  return (
    <div
      style={{
        width: "100%",
        height: "fit-content",
        maxWidth: "320px",
        maxHeight: "auto",
        minHeight: "110px",
        minWidth: "320px",
        borderRadius: "15px",
        background: `linear-gradient(${colour}, ${colour2})`,
        position: "relative",
        //overflow: "hidden",
        textAlign: "center",
        marginLeft: "auto",
        marginRight: "auto",
        textShadow: "0.75px 0.75px 1.5px #818385",
      }} // outline: "2px dashed blue",
    >
      <div style={{ width: "100%", height: "100%", zIndex: "2" }}>
        <CustomImage
          src={props.pokemon?.sprites.front_default}
          containerStyles={{
            width: "100px",
            height: "80px",
            position: "absolute",
            top: "-30px",
            right: "0px",
            minHeight: "fit-content",
          }}
          imageStyles={{ width: "115%", height: "auto" }}
        />
        <div style={{ flex: "1" }}>
          <p style={{ color: "white" }}>{`#${props.pokemon?.id}`}</p>
        </div>
        <p>--------------------</p>
        <label>
          <b>Pokemon Name</b>: {props.pokemon.name}; <b>#</b>
          {/* {props.pokemon.id} */}
        </label>
        <p>--------------------</p>
        {!props.pokemon?.types[1]?.type.name && (
          <p>
            <b>Type</b>: {props.pokemon?.types[0]?.type.name}
          </p>
        )}
        {props.pokemon?.types[1]?.type.name && (
          <p>
            <b>Types</b>: {props.pokemon?.types[0]?.type.name},{" "}
            {props.pokemon?.types[1]?.type.name}
          </p>
        )}
        {props.type === "full" && (
          <>
            <p>--------------------</p>
            <DrawStats stats={props.pokemon?.stats} />
            <p>--------------------</p>
          </>
        )}

        <CustomButton
          text="See more details about it"
          onClick={() => {
            setPokemon(props.pokemon);
            goTo(ScreenPaths.project.pokedetails);
          }}
        />
        <p>--------------------</p>
        <CustomButton
          text="Set / Remove from Favorites"
          onClick={() => {
            setFavorites(props.pokemon);
          }}
          styles={{ margin: "0 auto 10px auto" }}
        />
      </div>

      <CustomImage
        src="https://www.pngall.com/wp-content/uploads/4/Pokeball-PNG-Free-Download.png"
        containerStyles={{
          width: "250px",
          height: "120px",
          position: "absolute",
          top: "0px",
          right: "10px",
          minHeight: "fit-content",
          opacity: "35%",
          //before
        }}
        imageStyles={{ width: "115%", height: "auto" }}
      />
    </div>
  );
};
