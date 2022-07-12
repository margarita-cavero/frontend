import { AboutMe } from "./AboutMe"
import { Companies } from "./Companies"
import { HomeStyled } from "./HomeStyled"
import { OpenImage } from "./OpenImage"
import { TypewriterInicio } from "./Typewriter"


export const Home = () => {
    return (
        <HomeStyled>
            <div className="margarita-img">
                <TypewriterInicio />
            </div>
            <AboutMe />
            <OpenImage />
            <Companies />
        </HomeStyled>
    )
}
