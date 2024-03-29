import styled from "styled-components";

export const FormStyled = styled.div`
display: flex;
flex-flow: row nowrap;
width: 90%;
height: 80%;
background-color: #905f4588;
margin: 20% 0 10% 0;
font-family: 'Roboto-regular';
box-shadow:
    0 1.6px 1.6px rgba(0, 0, 0, 0.023),
    0 3.8px 3.8px rgba(0, 0, 0, 0.034),
    0 6.9px 6.9px rgba(0, 0, 0, 0.041),
    0 11.4px 11.4px rgba(0, 0, 0, 0.049),
    0 18.8px 18.8px rgba(0, 0, 0, 0.056),
    0 32.8px 32.8px rgba(0, 0, 0, 0.067),
    0 71px 71px rgba(0, 0, 0, 0.09);
.formParts{
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    width: 100%;
    .contactImage{
        width: 40%;
        border-radius: 50%;
        filter: drop-shadow(1px 1px 5px #400811);
    }
}
.halfContact{
    display: none;
}
.formContainer{
height: 100%;
margin: 50px 0;
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
        .input::selection{
            background-color: #400811;
            color: #a42f42;
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
    .sendMessage{
        margin-top: .8rem;
        color: #09b000;
        text-shadow: 2px 2px 3px #000;
        font-size: 1.2rem;
    }
}
@media (min-width: 768px) {
    margin: 0;
    margin-top: 5%;
    .halfContact{
    display: flex;
    }
    .formParts{
        width: 50%;
    }
    .formContainer{
        margin: 0;
    }
}
`;