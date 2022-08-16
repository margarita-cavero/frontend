import React from 'react'
import { WorkStyled } from './WorkStyled'

export const Work = ({ originalActor, title, character, year, imageURL }) => {
  return (
    <WorkStyled>
      <div className='workContainer'>
        <h2 className='title'>{title}</h2>
        <img className='image' src={imageURL} alt={title} />
        <p className='originalActor'>Actor Original: {originalActor}</p>
        <p className='character'>Personaje: {character}</p>
        <p className='year'>Año: {year}</p>
      </div>
    </WorkStyled>
  )
}
