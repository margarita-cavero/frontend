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
width: 50%;
    .contactImage{
        width: 40%;
        border-radius: 50%;
        filter: drop-shadow(1px 1px 5px #400811);
    }
}
.formContainer{
height: 100%;
    .title{
        font-size: 3rem;
        color: #400811;
    }
    .form{
        display: flex;
        flex-direction: column;
        align-items:center;
        justify-content: center;
        width: 80%;
        .input{
            background-color: #905f45aa;
            outline: none;
            border: 0;
            color: #400811; 
            margin-top: 1rem;
            width: 100%;
            height: 2rem;
            padding: 1rem;
            border-bottom: 2px solid #400811;
            font-size: 1.2rem;
        }
        .input::placeholder { 
            color: #400811; 
        }
        .input:focus{
            color: #000;
        }
        .input:hover{
            color: #000;
        }
        .textArea{
            resize: none;
            height: 6rem;
            padding: .5rem 1rem;
        }
        .send {
            min-width: 130px;
            height: 40px;
            color: #400811;
            padding: 5px 10px;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.3s ease;
            position: relative;
            display: inline-block;
            outline: none;
            margin-top: 1rem;
            border-radius: 5px;
            border: none;
            box-shadow:inset 2px 2px 2px 0px #400811, 7px 7px 20px 0px rgba(0,0,0,.1), 4px 4px 5px 0px rgba(0,0,0,.1);
            background: #905f45;
            z-index: 1;
        }
        .send:hover:after {
            width: 100%;
            left: 0;
        }
        .send:after {
            border-radius: 5px;
            position: absolute;
            content: "";
            width: 0;
            height: 100%;
            top: 0;
            z-index: -1;
            box-shadow:inset 2px 2px 2px 0px #905f45, 7px 7px 20px 0px rgba(0,0,0,.1), 4px 4px 5px 0px rgba(0,0,0,.1);
            transition: all 0.3s ease;
            background-color: #400811;
            right: 0;
        }
        .send:hover{
            color: #905f45;
        }
        .send:active {
            top: 2px;
            color: #905f45;
        }
        .validation{ 
            margin-top: 0;
            color: #a42f42;
            text-shadow: 1px 1px 1px #000;
        }
    }
}
`;