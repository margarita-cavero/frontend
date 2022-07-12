import { FooterStyled } from "./FooterStyled"


export const Footer = () => {
  return (
    <FooterStyled>
      <div className="infoFooter">
        <div className="footer left">
          <h3>Links de interés</h3>
        </div>
        <div className="footer center">
          <img className="micro" src='../../../assets/images/micro.png' alt='microfono' />
        </div>
        <div className="footer right"></div>
      </div>
      <div>
        <p className="created">Created by <a href="https://daniel-espanadero.com/" target='_BLANK'>Daniel Españadero</a> © {new Date().getFullYear()}</p>
      </div>
    </FooterStyled>
  )
}
