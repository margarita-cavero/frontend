import { AudioPlayerStyled } from "../AudioPlayerStyled";
import { Sing } from "./Sing";
import { SingerStyled } from "./SingerStyled"

export const Singer = () => {
    return (
        <SingerStyled>
            <h2 className="titles text">CANTO</h2>
            <p className="text paragraph">Algo. &#128522;</p>
            <AudioPlayerStyled>
                <Sing />
            </AudioPlayerStyled>
        </SingerStyled>
    );
};
