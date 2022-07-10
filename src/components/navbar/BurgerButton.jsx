import { Burguer } from "./BurguerButtonStyled";

export const BurgerButton = ({handleClick, clicked}) => {
    return (
        <Burguer>
            <div 
                onClick={handleClick} 
                className={`icon nav-icon-5 ${clicked ? 'open' : ''}`}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </Burguer>
    );
};
