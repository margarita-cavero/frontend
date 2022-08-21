import { useEffect } from "react";
import { titleCompaniesScrollMagic } from "../../helpers/titleCompaniesScrollMagic";
import { CompaniesStyled } from "./CompaniesStyled";

export const Companies = () => {

    useEffect(() => {
        titleCompaniesScrollMagic();
    }, [])
    
    
    return (
        <CompaniesStyled>
            <div className="titleContainer">
                <h2 className="title">Algunas de las compañias con las que he trabajado:</h2>
            </div>
            <div className="companiesContainer">
                <div className='imgsContainer'>
                    <img className="companies" src="../../../images/logos/disney.png" alt="disney" />
                </div>
                <div className='imgsContainer'>
                    <img className="companies" src="../../../images/logos/hbo.png" alt="hbo" />
                </div>
                <div className='imgsContainer'>
                    <img className="companies" src="../../../images/logos/netflix.png" alt="netflix" />
                </div>
                <div className='imgsContainer'>
                    <img className="companies" src="../../../images/logos/sony.png" alt="sony" />
                </div>
                <div className='imgsContainer'>
                    <img className="companies" src="../../../images/logos/paramount.png" alt="paramount" />
                </div>
                <div className='imgsContainer'>
                    <img className="companies" src="../../../images/logos/universal.png" alt="universal" />
                </div>
                <div className='imgsContainer'>
                    <img className="companies" src="../../../images/logos/apple.png" alt="apple" />
                </div>
                <div className='imgsContainer'>
                    <img className="companies" src="../../../images/logos/warner.png" alt="warner" />
                </div>
            </div>
            <div className="photo"></div>
        </CompaniesStyled>
    );
};
