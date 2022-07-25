import { AudioPlayerStyled } from "../AudioPlayerStyled";
import { AudioLoc } from "./AudioLoc";
import { AudioLoc2 } from "./AudioLoc2";
import { LocutionStyled } from "./LocutionStyled"

export const Locution = () => {
  return (
    <LocutionStyled>
        <h2 className="titles text">LOCUCIONES</h2>
      <p className="text paragraph">No todo en la vida es doblaje, tambien realizo locuciones y en este caso quiero mostrar un ejemplo de lo que soy capaz de hacer en este aspecto, espero que te guste. &#128522;</p>
        <AudioPlayerStyled>
            <AudioLoc />
            <AudioLoc2 />
        </AudioPlayerStyled>
    </LocutionStyled>
  );
};
