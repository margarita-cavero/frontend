import React from 'react'
import { WorkStyled } from './WorkStyled'

export const Work = ({ originalActor, title, character, year, imageURL }) => {
  return (
    <WorkStyled>
      {/* <div className='workContainer'>
        <h2 className='title'>Atrapa la bandera</h2>
        <img className='image' src='https://images-na.ssl-images-amazon.com/images/S/pv-target-images/5094fe22e1e582a898a0e816bff764439e8cc997a383ebdfcb869b020882d96f._RI_V_TTW_.jpg' />
        <p className='originalActor'>Actor original: Perico</p>
        <p className='character'>Personaje: Periquito</p>
        <p className='year'>Año: 1992</p>
      </div> */}
      <div className='workContainer'>
      <h2 className='title'>{title}</h2>
        <img className='image' src={imageURL} alt={title} />
        <p className='originalActor'>{originalActor}</p>
        <p className='character'>{character}</p>
        <p className='year'>{year}</p>
      </div>
    </WorkStyled>
  )
}
