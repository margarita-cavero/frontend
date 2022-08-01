import { useEffect, useState } from "react";
import { AllWorksStyled } from "./AllWorksStyled";
import config from "../../config";
import { Work } from "./Work";


export const AllWorks = () => {
  const url = config.urlWorks;

  const [allWorks, setAllWorks] = useState([])

  const getAllWorks = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setAllWorks(currentList => [...currentList, data.works])

    return data;
  };

  useEffect(() => {
    getAllWorks()
  }, []);

  return (
    <AllWorksStyled>
      <Work />
      {allWorks.forEach((work) => {
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