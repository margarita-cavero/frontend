import React from 'react'
import { WorkStyled } from './WorkStyled'

export const Work = ({ originalActor, title, character, year, imageURL }) => {
  return (
    <WorkStyled>
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
