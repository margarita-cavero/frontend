
import { useEffect } from "react";
import { AboutMeScrollMagic } from "../../helpers/aboutMeScrollMagic";
import { AboutMeStyled } from "./AboutMeStyled";


export const AboutMe = () => {

    const meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");

    const f = new Date();

    useEffect(() => {
        AboutMeScrollMagic();
    }, [])

    return (
        <AboutMeStyled>
            <div className="sticky1">
                <h2 className="aboutMe"><span className="sobre"><span className="s">S</span><span className="o">O</span><span className="b">B</span><span className="r">R</span><span className="e">E</span> </span><span className="mi">MÍ</span></h2>
                <div className="divs sticky2"></div>
                <div className="divs sticky3"></div>
                <div className="divs sticky4"></div>
                <div className="divs sticky5"></div>
                <div className="divs sticky6"></div>
                <div className="divs sticky7"></div>
            </div>
            <p className="presentation">Hoy día {f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear()} hace {f.getFullYear() - 2010} años que decidí dedicarme al doblaje. [Contar una historia] Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae tenetur sed, ad accusantium odit iure maxime, sit similique consequatur officia porro itaque rerum veritatis molestias aperiam. Quidem deleniti quos reiciendis.lorem1000 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae quam quasi voluptates adipisci facilis, asperiores nesciunt ullam atque animi maiores alias sit, accusantium similique consectetur magni doloremque, amet voluptatum harum odit autem. Nulla itaque quia saepe rerum distinctio voluptatum, ipsum dolore perferendis quam ipsa quo culpa temporibus aspernatur ea, placeat beatae ipsam nostrum pariatur, ratione a dignissimos blanditiis eius rem! Rerum veritatis doloremque assumenda quibusdam id, a eveniet odit quo, accusamus ipsum deserunt hic natus error nisi consequatur quidem ex. Nam fugit ab enim perferendis aperiam temporibus amet voluptatum voluptate ipsa facere, totam delectus eligendi incidunt dolorem, est rerum repellat.</p>
        </AboutMeStyled>
    )
}
