import styled from "styled-components";

export const HomeStyled = styled.div`
background: #cd9b81;
/* background: -webkit-linear-gradient(to right, #400811, #cd9b81); */
/* background: linear-gradient(to right, #400811, #cd9b81); */
background: -webkit-linear-gradient(-180deg, #400811 0%, #cd9b81 70%);
background: linear-gradient(-180deg, #400811 0%, #cd9b81 70%);
.margarita-img{
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    top: 10%;
    width: 100%;
    height: 100vh;
    background-image: url('../../assets/images/margaritaCavero3.webp');
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center top;
}
`