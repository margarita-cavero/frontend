import styled from "styled-components";

export const DubbingStyled = styled.div`
width:100%;
min-height: 100vh;
background-image: url('../../../../assets/images/demos/wallpaper2.webp');
background-size:cover;
background-attachment: fixed;
background-position: right;
font-family: 'Roboto-regular';
.text{
    text-align: center;
    color: #fff;
    text-shadow: 1px 1px 5px #000;
}
.titles{
    padding-top: 25%;
    font-size: 3rem;
}
.paragraph{
    padding: 2rem;
    font-size: 1.5rem;
}
@media (min-width: 768px) {
background-position: center;
    .titles{
        padding-top: 10%;
        font-size: 4rem;
    }
    .paragraph{
        font-size: 2rem;
    }
}
`