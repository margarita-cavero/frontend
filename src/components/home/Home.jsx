import { HomeStyled } from "./HomeStyled"
import { TypewriterInicio } from "./Typewriter"


export const Home = () => {
    return (
        <HomeStyled>
            <div className="margarita-img">
                <TypewriterInicio />
            </div>
            <div className="prueba">Home</div>
        </HomeStyled>
    )
}
