import { AudioPlayerStyled } from "../AudioPlayerStyled"
import { Adolescente } from "./Adolescente"
import { DubbingStyled } from "./DubbingStyled"
import { Mujer } from "./Mujer"
import { MujerJoven } from "./MujerJoven"
import { Nina } from "./Nina"
import { Nino } from "./Nino"


export const Dubbing = () => {
  return (
    <DubbingStyled>
      <h1 className="text titles">DOBLAJE</h1>
      <p className="text paragraph">Estos son algunos de los registros que poseo como actriz de doblaje, es un honor para mí mostrar el alma de mis personajes, no dudes en contactar si necesitas más demos. &#128578;</p>
      <AudioPlayerStyled>
        <Adolescente />
        <Mujer />
        <MujerJoven />
        <Nina />
        <Nino />
      </AudioPlayerStyled>
    </DubbingStyled>
  )
}
