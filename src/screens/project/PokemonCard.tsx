import { Pokemon, Stat, Sprites } from "./Pokemon";

interface PokemonCardProps {
  pokemon: Pokemon;
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

export const PokemonCard = (props: PokemonCardProps) => {
  let colour = giveTypeColours(props.pokemon?.types[0].type.name);
  let colour2 = "";
  if (props.pokemon?.types[1])
    colour2 = giveTypeColours(props.pokemon?.types[1].type.name);
  else colour2 = colour;

  return (
    <>
      <p>----------------------------------</p>
      <div
        onClick={() => {
          console.log("Clicked");
        }}
        style={{
          width: "100%",
          height: "100%",
          maxWidth: "320px",
          maxHeight: "auto",
          border: "12px solid #49494d",
          borderBottom: "15px solid #49494d",
          borderTop: "15px solid #49494d",
          borderRadius: "15px",
          background: "linear-gradient(" + colour + ", " + colour2 + ")",
          position: "relative",
          overflow: "hidden",
          textAlign: "center",
          marginLeft: "auto",
          marginRight: "auto",
          textShadow: "0.75px 0.75px 1.5px #818385",
        }} // outline: "2px dashed blue",
      >
        <p>--------------------</p>
        <label>
          <b>Pokemon Name</b>: {props.pokemon.name}; <b>#</b>
          {props.pokemon.id}
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
        <DrawStats stats={props.pokemon?.stats} />
        <DrawAllSprites sprites={props.pokemon.sprites} />
      </div>
      <p>----------------------------------</p>
    </>
  );
};

function DrawAllSprites({ sprites }: { sprites: Sprites }) {
  return (
    <>
      <div>
        <img src={sprites.front_default} alt="Front-Default" />
        <p>Sprite Front-Default</p>
        {sprites.front_female && (
          <img src={sprites.front_female} alt="Front-Female" />
        )}
        {sprites.front_female && <p>Sprite Front-Female</p>}
      </div>
      <div>
        <img src={sprites.back_default} alt="Back-Default" />
        <p>Sprite Back-Default</p>
        {sprites.back_female && (
          <img src={sprites.back_female} alt="Back-Female" />
        )}
        {sprites.back_female && <p>Sprite Back-Female</p>}
      </div>
      <div>
        <img src={sprites.front_shiny} alt="Front-Shiny" />
        <p>Sprite Front-Shiny</p>
        {sprites.front_shiny_female && (
          <img src={sprites.front_shiny_female} alt="Front-Shiny-Female" />
        )}
        {sprites.front_shiny_female && <p>Sprite Front-Shiny-Female</p>}
      </div>
      <div>
        <img src={sprites.back_shiny} alt="Back-Shiny" />
        <p>Sprite Back-Shiny</p>
        {sprites.back_shiny_female && (
          <img src={sprites.back_shiny_female} alt="Back-Shiny-Female" />
        )}
        {sprites.back_shiny_female && <p>Sprite Back-Shiny-Female</p>}
      </div>
    </>
  );
}

function DrawStats({ stats }: { stats: Stat[] }) {
  const columns = [
    "HP (Health Points)",
    "Attack",
    "Defense",
    "Special Attack",
    "Special Defense",
    "Speed",
  ];
  const values = [
    stats[0].base_stat,
    stats[1].base_stat,
    stats[2].base_stat,
    stats[3].base_stat,
    stats[4].base_stat,
    stats[5].base_stat,
  ];

  return (
    <>
      <div>
        <h4>
          <u>STATS</u>
        </h4>
        <p>
          - <b>HP (Health Points)</b>: {stats[0].base_stat} -
        </p>
        <p>
          - <b>Attack</b>: {stats[1].base_stat} -
        </p>
        <p>
          - <b>Defense</b>: {stats[2].base_stat} -
        </p>
        <p>
          - <b>Special Attack</b>: {stats[3].base_stat} -
        </p>
        <p>
          - <b>Special Defense</b>: {stats[4].base_stat} -
        </p>
        <p>
          - <b>Speed</b>: {stats[5].base_stat} -
        </p>
      </div>
    </>
  );
}
