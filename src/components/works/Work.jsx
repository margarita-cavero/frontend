import React from 'react'
import { Link } from 'react-router-dom'
import { WorkStyled } from './WorkStyled'

export const Work = ({id, originalActor, title, character, year, imageURL }) => {
  return (
    <WorkStyled>
      <div className='workContainer'>
          <div>
            <h2 className='title'>{title}</h2>
            <img className='image' src={imageURL} alt={title} />
          <p className='text'><span className='textInside'>Actor Original: </span>{originalActor}</p>
          <p className='text'><span className='textInside'>Personaje: </span>{character}</p>
          <p className='text'><span className='textInside'>Año: </span>{year}</p>
        </div>
      </div>
    </WorkStyled>
  )
}
