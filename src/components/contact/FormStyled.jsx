import styled from "styled-components";

export const FormStyled = styled.div`
display: flex;
flex-flow: row nowrap;
width: 90%;
height: 80%;
background-color: #905f4588;
margin-top: 5%;
font-family: 'Roboto-regular';
.formParts{
display: flex;
flex-direction: column;
align-items:center;
justify-content: center;
    .contactImage{
        width: 30%;
        border-radius: 50%;
        filter: drop-shadow(1px 1px 5px #400811);
    }
}
.formContainer{
height: 100%;
    .title{
        font-size: 3rem;
        color: #400811;
        margin: 2rem 0;
    }
    .form{
        display: flex;
        flex-direction: column;
        align-items:center;
        justify-content: center;
        .textArea{
            resize: none;
        }
    }
}
`;