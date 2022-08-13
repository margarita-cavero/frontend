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

  console.log(allWorks.map(work => work));

  return (
    <AllWorksStyled>
      {allWorks.map(work => {
        <Work 
          originalActor={work.originalActor} 
          title={work.title} 
          character={work.character} 
          year={work.year} 
          imageURL={work.imageURL}
        />
      })
      }
    </AllWorksStyled>
  )
};