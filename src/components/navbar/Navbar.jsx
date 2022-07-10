import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { BgDiv } from "./BgDivStyled";
import { BurgerButton } from "./BurgerButton";
import { NavStyled } from "./NavStyled";

export const Navbar = () => {

    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        if(window.innerWidth <= 768){
            return setClicked(!clicked);
        }
        return;
    }

    return (
        <>
            <NavStyled>
                <Link
                    className="navbar-brand"
                    to='/'
                >
                    <h1>Margarita Cavero</h1>
                </Link>
                <div className={`links-container ${clicked ? 'active' : ''}`}>
                    <Link
                        className='links'
                        onClick={handleClick}
                        to='/'
                    >
                        Inicio
                    </Link>
                    <Link
                        className='links'
                        onClick={handleClick}
                        to='/demos'
                    >
                        Demos
                    </Link>
                    <Link
                        className='links'
                        onClick={handleClick}
                        to='/trabajos'
                    >
                        Trabajos
                    </Link>
                    <Link
                        className='links'
                        onClick={handleClick}
                        to='/contacto'
                    >
                        Contacto
                    </Link>
                </div>
                <div className="burguer">
                    <BurgerButton clicked={clicked} handleClick={handleClick} />
                </div>
            </NavStyled>
            <BgDiv className={`icon nav-icon-5 ${clicked ? 'active' : ''}`}></BgDiv>
        </>
    );
};
