import { FooterStyled } from "./FooterStyled"


export const Footer = () => {
  return (
    <FooterStyled>
      <div className="microFooter">
      </div>
      <div>
        <p>Created by <a href="https://daniel-espanadero.com/" target='_BLANK'>Daniel Españadero</a> © {new Date().getFullYear()}</p>
      </div>
    </FooterStyled>
  )
}
