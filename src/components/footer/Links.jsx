import { Link } from "react-router-dom"


export const Links = () => {
  return (
      <div className="footer">
          <h3 className='titles interes'>Links de interés:</h3>
          <a className="links" href='https://www.eldoblaje.com/datos/FichaActorDoblaje.asp?id=114434' target='_BLANK'>Ficha en eldoblaje.com</a>
          <a className="links" href='https://vocalbums.com/margarita-cavero' target='_BLANK'>Ficha en vocalbums.com</a>
          <Link className='links' to='/demos'>Demos</Link>
          <Link className='links' to='/trabajos'>Trabajos</Link>
      </div>
  )
};
