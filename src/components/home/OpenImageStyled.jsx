import styled from "styled-components";

export const OpenImageStyled = styled.div`
display: flex;
justify-content: center;
margin-top: 2rem;
.riendoContainer{
    display: block;
    width:80%;
    height: 1000px;
    transition: all 3s;
    text-align: center;
    .riendo{
        position: sticky;
        margin: auto;
        top: 20%;
        opacity: 0;
        width: 30%;
        border-radius: 20%;
        transition: all 3s;
    }
    .riendo.show{
        opacity: 1;
    }
    .sticky{
        width: 100%;
        height: 1px;
        margin-top: 100px;
    }
}
.riendo.show2{
    width: 80%;
    border-radius: 100%;
    filter: drop-shadow(0 0 5px #000);
}
`