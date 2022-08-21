import styled from "styled-components";

export const SingerStyled = styled.div`
min-height: 50vh;
width: 100%;
font-family: 'Roboto-regular';
border-top: 2px solid #400811;
border-bottom: 2px solid #400811;
background-image: url('../../../../images/demos/wallpaper1.webp');
background-size:cover;
background-position: center;
.text{
    text-align: center;
    color: #fff;
    text-shadow: 1px 1px 5px #000;
}
.titles{
    padding-top: 3rem;
    font-size: 3rem;
}
.paragraph{
    padding: 2rem;
    font-size: 1.5rem;
}
@media (min-width: 768px) {
    .titles{
        font-size: 4rem;
    }
    .paragraph{
        font-size: 2rem;
    }
}
`;