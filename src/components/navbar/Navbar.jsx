import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { BgDiv } from "./BgDivStyled";
import { BurgerButton } from "./BurgerButton";
import { NavBarActive, NavStyled } from "./NavStyled";

export const Navbar = () => {

    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        if(window.innerWidth <= 768){
            return setClicked(!clicked);
        };
        return;
    };

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
                    <NavLink
                        className='links'
                        onClick={handleClick}
                        to='/'
                        style={
                            ({ isActive }) => (
                                isActive
                                    ? NavBarActive
                                    : {}
                            )
                        }
                    >
                        Inicio
                    </NavLink>
                    <NavLink
                        className='links'
                        onClick={handleClick}
                        to='/demos'
                        style={
                            ({ isActive }) => (
                                isActive
                                    ? NavBarActive
                                    : {}
                            )
                        }
                    >
                        Demos
                    </NavLink>
                    <NavLink
                        className='links'
                        onClick={handleClick}
                        to='/trabajos'
                        style={
                            ({ isActive }) => (
                                isActive
                                    ? NavBarActive
                                    : {}
                            )
                        }
                    >
                        Trabajos
                    </NavLink>
                    <NavLink
                        className='links'
                        onClick={handleClick}
                        to='/contacto'
                        style={
                            ({ isActive }) => (
                                isActive
                                    ? NavBarActive
                                    : {}
                            )
                        }
                    >
                        Contacto
                    </NavLink>
                </div>
                <div className="burguer">
                    <BurgerButton clicked={clicked} handleClick={handleClick} />
                </div>
            </NavStyled>
            <BgDiv className={`icon nav-icon-5 ${clicked ? 'active' : ''}`}></BgDiv>
        </>
    );
};
