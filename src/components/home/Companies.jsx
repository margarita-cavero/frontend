import { CompaniesStyled } from "./CompaniesStyled";

export const Companies = () => {
    return (
        <CompaniesStyled>
            <div className="titleContainer">
                <h2 className="title">Algunas de las compañias con las que he trabajado:</h2>
            </div>
            <div className="companiesContainer">
                <div className='imgsContainer'>
                    <img className="companies" src="../../../assets/images/logos/disney.png" alt="disney" />
                </div>
                <div className='imgsContainer'>
                    <img className="companies" src="../../../assets/images/logos/hbo.png" alt="hbo" />
                </div>
                <div className='imgsContainer'>
                    <img className="companies" src="../../../assets/images/logos/netflix.png" alt="netflix" />
                </div>
                <div className='imgsContainer'>
                    <img className="companies" src="../../../assets/images/logos/sony.png" alt="sony" />
                </div>
                <div className='imgsContainer'>
                    <img className="companies" src="../../../assets/images/logos/paramount.png" alt="paramount" />
                </div>
                <div className='imgsContainer'>
                    <img className="companies" src="../../../assets/images/logos/universal.png" alt="universal" />
                </div>
                <div className='imgsContainer'>
                    <img className="companies" src="../../../assets/images/logos/warner.png" alt="warner" />
                </div>
            </div>
        </CompaniesStyled>
    )
}
