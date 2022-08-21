import { useEffect } from "react"
import { openImageScrollMagic } from "../../helpers/openImageScrollmagic"
import { OpenImageStyled } from "./OpenImageStyled"

export const OpenImage = () => {

    useEffect(() => {
        openImageScrollMagic();
    }, [])
    
    return (
        <OpenImageStyled>
            <div className="riendoContainer">
                <img className="riendo" src="../../images/margaritaCavero2.webp" alt="Actriz de doblaje riendo" />
                <div className="divs sticky"></div>
            </div>
        </OpenImageStyled>
    )
}
