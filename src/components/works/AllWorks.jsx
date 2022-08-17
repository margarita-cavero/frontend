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
      .then(works => setAllWorks(works.works.reverse()))
      .catch(error => console.log(error))
  };

  useEffect(() => {
    getAllWorks()
  }, []);


  return (
    <AllWorksStyled>

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

    </AllWorksStyled>
  )
};