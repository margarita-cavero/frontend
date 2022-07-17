import { useEffect, useState } from "react";
import { WorksStyled } from "./WorksStyled";


export const Works = () => {
  const url = 'http://localhost:8080/works';
  const [image, setImage] = useState([])

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(image => {
        setImage(image.works[0])
        image.works.forEach(work => {
          console.log(work.imageURL);
        });
      })
      .catch(() => console.log('Algo falló'))
  }, []);




  return (
    <WorksStyled>
      <h1>Pruebas</h1>
      <p>{image.title}</p>
      <p>{image.character}</p>
    </WorksStyled>
  )
};