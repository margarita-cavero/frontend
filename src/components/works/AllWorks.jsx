import { useEffect, useState } from "react";
import { AllWorksStyled } from "./AllWorksStyled";
import config from "../../config";
import { Work } from "./Work";

export const AllWorks = () => {
  const url = config.urlAddWork;

  const [allWorks, setAllWorks] = useState([])

  const getAllWorks = async () => {
    const works = await fetch(url)
      .then(response => { return response.json() })
      .then(works => setAllWorks(works.works))
      .catch(error => console.log(error))
  };

  useEffect(() => {
    getAllWorks()
  }, []);


  return (
    <AllWorksStyled>
      <h1 className="mainTitle mainText">TRABAJOS</h1>
      <p className="paragraph mainText">Aquí te muestro la mayoría de los trabajos que he realizado a lo largo de mi carrera como actriz de doblaje.</p>
      <div className="worksContainer">
        {allWorks.map((work, index) => {
          return <Work
            id={work._id}
            title={work.title}
            imageURL={work.imageURL}
            originalActor={work.originalActor}
            character={work.character}
            year={work.year}
            key={index} />
        })}
      </div>
    </AllWorksStyled>
  )
};