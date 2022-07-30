import { AudioPlayerStyled } from "../AudioPlayerStyled";
import { Sing } from "./Sing";
import { SingerStyled } from "./SingerStyled"

export const Singer = () => {
    return (
        <SingerStyled>
            <h2 className="titles text">CANTO</h2>
            <p className="text paragraph">Cantar es para mí algo ilusionante que me ha ayudado mucho a mejorar en mis otras facetas a nivel profesional. &#129303;</p>
            <AudioPlayerStyled>
                <Sing />
            </AudioPlayerStyled>
        </SingerStyled>
    );
};
