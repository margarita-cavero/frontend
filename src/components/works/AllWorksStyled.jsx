import styled from "styled-components";

export const AllWorksStyled = styled.div`
/* background: linear-gradient(-180deg, #400811 0%, #cd9b81 70%); */
background-image: url('../../../assets/images/works/fondo-micro.jpeg');
background-attachment: fixed;
background-size: cover;
font-family: 'Roboto-regular';
min-height: 100vh;
.mainTitle{
    padding-top: 25%;
    color: rgba(186,121,55,1);
    font-size: 3rem;
}
.paragraph{
    color: #f5e1ce;
    font-size: 2rem;
    padding: 2rem 2rem 0 2rem;
}
.mainText{
    text-align: center;
    text-shadow: 2px 2px 5px #000;
}
.worksContainer{
    /* padding: 2rem 1rem 3rem 1rem; */
    display: flex;
    justify-content: space-evenly;
    flex-flow: row wrap;
    width: 100%;
    padding-bottom:4em;
}
@media (min-width: 768px){
.mainTitle{
    padding-top: 25%;
    font-size: 4rem;
}
}
`