import { useEffect, useState } from "react";
import { AllWorksStyled } from "./AllWorksStyled";
import config from "../../config";
import { Work } from "./Work";


export const AllWorks = () => {
  const url = config.urlWorks;

  const [allWorks, setAllWorks] = useState([])

  const getAllWorks = async () => {
    const works = await fetch(url)
      .then(response => {return response.json()})
      .then(works => setAllWorks(works.works))
      .catch(error => console.log(error))
  };

  useEffect(() => {
    getAllWorks()
  }, []);

  console.log(allWorks.forEach(work => work));

  return (
    <AllWorksStyled>
      {allWorks.forEach(work => {
        <div className='workContainer'>
          <h2 className='title'>{work.title}</h2>
          <img className='image' src={work.imageURL} alt={work.title} />
          <p className='originalActor'>{work.originalActor}</p>
          <p className='character'>{work.character}</p>
          <p className='year'>{work.year}</p>
        </div>
      })
      }
    </AllWorksStyled>
  )
};