import styled from 'styled-components';

export const AudiobookStyled = styled.div`
min-height: 50vh;
width: 100%;
background-image: url('../../../../assets/images/demos/wallpaper4.webp');
background-size:cover;
background-attachment: fixed;
background-position: top;
color: #fff;
text-align: center;
font-family: 'Roboto-regular';
.text{
    text-align: center;
    color: #fff;
    text-shadow: 1px 1px 5px #000;
}
.titles{
    padding-top: 3rem;
    font-size: 3rem;
    text-shadow: 1px 1px 5px #000;
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