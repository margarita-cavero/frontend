import styled from "styled-components";

export const CompaniesStyled = styled.div`
font-family: 'Roboto-regular';
margin-top: 2rem;
.titleContainer{
    width:100%;
    height: 500px;
    .title{
        position: sticky;
        top: 25%;
        color: #fff;
        font-size: 4rem;
        text-align: center;
        margin: 0 8rem;
        padding: 2rem 2rem 0 2rem;
        transition: all 1s;
    }
    .show{
        color: #400811;
    }
}
.companiesContainer{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 100%;
    margin-bottom: 40px;
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
.photo{
    width:100%;
    height: 60vh;
    background-image: url('../../../assets/images/margaritaCavero4.webp');
    background-attachment: fixed;
    background-position: top;
}
`