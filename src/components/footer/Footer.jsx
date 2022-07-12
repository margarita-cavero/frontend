import { FooterStyled } from "./FooterStyled"
import { Links } from "./Links"
import { Social } from "./Social"


export const Footer = () => {
  return (
    <FooterStyled>
      <div className="infoFooter">
        <Links />
        <div className="footer center">
          <img className="micro" src='../../../assets/images/micro.png' alt='microfono' />
        </div>
        <Social />
      </div>
      <div>
        <p className="created">Created by <a href="https://daniel-espanadero.com/" target='_BLANK'>Daniel Españadero</a> © {new Date().getFullYear()}</p>
      </div>
    </FooterStyled>
  )
}
