import styled from "styled-components";

export const CompaniesStyled = styled.div`
font-family: 'Roboto-regular';
margin-top: 2rem;
.titleContainer{
    width:100%;
    height: 500px;
    border: 1px solid red;
    .title{
        position: sticky;
        top: 15%;
        color: #fff;
        font-size: 3rem;
        text-align: center;
        padding: 2rem;
    }
}
.companiesContainer{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 100%;

    border: 1px solid red;
    .imgsContainer{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 20%;
        height: 200px;
        margin: 10px;
        .companies{
            width: 80%;
        }
    }
}
`