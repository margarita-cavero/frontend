import { AudioPlayerStyled } from "../AudioPlayerStyled"
import { AudiobookStyled } from "./AudiobookStyled"
import { BookAudio } from "./BookAudio"

export const Audiobook = () => {
    return (
        <AudiobookStyled>
            <h2 className="titles">AUDIOLIBROS</h2>
            <p className="text paragraph">Otro ejemplo de mis capacidades son los audiolibros, relájate y disfruta de esta muestra. &#128519;</p>
            <AudioPlayerStyled>
                <BookAudio />
            </AudioPlayerStyled>
        </AudiobookStyled>
    )
}
