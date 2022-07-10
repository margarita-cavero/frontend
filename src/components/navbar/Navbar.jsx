import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BurgerButton } from "./BurgerButton";
import { NavStyled } from "./NavStyled";

export const Navbar = () => {

    const [clicked, setClicked] = useState(false);

    const handleclick = () => {
        
    }

    return (
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
                    to='/'
                >
                    Inicio
                </Link>
                <Link
                    className='links'
                    to='/demos'
                >
                    Demos
                </Link>
                <Link
                    className='links'
                    to='/trabajos'
                >
                    Trabajos
                </Link>
                <Link
                    className='links'
                    to='/contacto'
                >
                    Contacto
                </Link>
            </div>
            <div className="burguer">
                <BurgerButton clicked={clicked} handleClick={ } />
            </div>
        </NavStyled>
    );
};
