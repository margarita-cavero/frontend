
import { useEffect } from "react";
import { AboutMeScrollMagic } from "../../helpers/aboutMeScrollMagic";
import { AboutMeStyled } from "./AboutMeStyled";
import { Link } from "react-router-dom";


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
            <p className="presentation">
                Hola, mi nombre es Margarita Cavero y hoy día {f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear()} hace {f.getFullYear() - 2010} años que decidí dedicarme al doblaje. Fue un camino duro, ya que es una profesión que requiere de mucha dedicación, horas y esfuerzo.
            </p>
            <br />
            <p className="presentation">
                Lo primero que hice fue buscarme una buena escuela, por desgracia los cursos de doblaje no suelen ser baratos así que dediqué bastante tiempo en investigar las escuelas con más prestigio que me ofrecieran una buena preparación. A partir de ese momento dediqué un año intensivo no solo en la escula, sino que tambien practicando por mi cuenta en casa. La parte de hecharle horas en casa es un habito que sigo realizando hasta el día de hoy ya que es una buena manera de mantenerse y aprender cosas nuevas.
            </p>
            <br />
            <p className="presentation">
                En 2014 decidí mudarme a Barcelona y antes de empezar a darme a conocer quise estar preparada ya que el mundo del doblaje es muy pequeño y no quería malgastar la oportunidad. Invertí en demos profesionales y me trabajé para causar una buena impresión, me sentía preparada.
            </p>
            <br />
            <p className="presentation">
                Han pasado {f.getFullYear() - 2014} años desde entonces y puedo decir que estoy muy orgullosa del camino que he recorrido, de todas las personas que he conocido dentro de la profesión y me han ayudado a ser quien soy. Tras cientos de trabajos a mis espaldas tengo ganas de seguir creciendo, mejorando y disfrutando del arte del doblaje.
            </p>
            <br />
            <p className="presentation">
                Actualmente resido en Madrid y a parte de dedicarme al doblaje, tambien canto, realizo locuciones y audiolibros. Te invito a pasarte por mis <Link className='links' to='/demos'>demos</Link> para conocer un poco más de mí.
            </p>
        </AboutMeStyled>
    )
}
