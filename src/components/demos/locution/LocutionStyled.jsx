import styled from 'styled-components';

export const LocutionStyled = styled.div`
min-height: 50vh;
width: 100%;
background-image: url('../../../../images/demos/wallpaper3.webp');
background-size:cover;
/* background-attachment: fixed; */
background-position: center;
font-family: 'Roboto-regular';
border-top: 2px solid #400811;
border-bottom: 2px solid #400811;
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
`