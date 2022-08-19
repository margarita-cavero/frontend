import styled from "styled-components";

export const AuthStyled = styled.div`
display: flex;
align-items: center;
justify-content: center;
background-image: url('../../../assets/images/admin/tools.jpeg');
background-size: cover;
background-attachment: fixed;
padding-top: 5%;
width: 100%;
height: 100vh;
font-family: 'Roboto-regular';
.text{
    color: #400811;
}
.formContainer{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 90%;
    background-color: #905f4599;
    box-shadow:
        0 1.6px 1.6px rgba(0, 0, 0, 0.023),
        0 3.8px 3.8px rgba(0, 0, 0, 0.034),
        0 6.9px 6.9px rgba(0, 0, 0, 0.041),
        0 11.4px 11.4px rgba(0, 0, 0, 0.049),
        0 18.8px 18.8px rgba(0, 0, 0, 0.056),
        0 32.8px 32.8px rgba(0, 0, 0, 0.067),
        0 71px 71px rgba(0, 0, 0, 0.09);
        .form{
            display: flex;
            flex-direction: column;
            width: 50%;
            .inputs{
                font-size: 1.5rem;
                margin-top: 1rem;
                padding: 1.5rem;
                background-color: #905f45aa;
                outline: none;
                border: 0;
                width: 100%;
                height: 2rem;
                border-bottom: 2px solid #400811;
            }
            .inputs::placeholder { 
            color: #400811; 
            }
            .inputs:focus{
                color: #000;
            }
            .inputs::selection{
                background-color: #400811;
                color: #a42f42;
            }
            .inputs:hover{
                color: #000;
            }
            .send {
                min-width: 130px;
                height: 40px;
                color: #400811;
                /* padding: 5px 10px; */
                font-weight: bold;
                font-size: 1.5rem;
                cursor: pointer;
                transition: all 0.3s ease;
                position: relative;
                display: inline-block;
                outline: none;
                margin-top: 3rem;
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
        }
        .validation{ 
            margin-top: 0;
            color: #a42f42;
            text-shadow: 1px 1px 1px #000;
        }
}
`