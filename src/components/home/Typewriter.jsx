import Typewriter from 'typewriter-effect';
import { TypewriterStyled } from './TypewriterStyled';

export const TypewriterInicio = () => {
    // let typewriter = new Typewriter(app, {
    //     loop: true,
    //     delay: 75,
    // })
    return (
        <TypewriterStyled>
            <div className="text-box">
                <Typewriter
                    options={{
                        autoStart: true,
                        loop: true,
                    }}
                    onInit={typewriter => {

                        typewriter
                            .typeString('Actriz de doblaje')
                            .pauseFor(2000)
                            .deleteAll()
                            .typeString('Locución')
                            .pauseFor(2000)
                            .deleteAll()
                            .typeString('Audiolibros')
                            .pauseFor(2000)
                            .deleteAll()
                            .typeString('Canto')
                            .pauseFor(2000)
                            .deleteAll()
                            .start();
                    }}
                />
            </div>
        </TypewriterStyled>
    );
}