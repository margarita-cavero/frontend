import styled from "styled-components";

export const WorkStyled = styled.div`
display: flex;
justify-content: center;
flex-flow: row wrap;
width: 300px;
font-family: 'Roboto-regular';
.workContainer{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align:center;
    position: relative;
    background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(98,54,0,1) 30%, rgba(186,121,55,1) 100%);
    top: 10%;
    border-radius: 1rem;
    padding: 20px 0;
    margin: 1rem;
    box-shadow:
    0 1.6px 1.6px rgba(0, 0, 0, 0.023),
    0 3.8px 3.8px rgba(0, 0, 0, 0.034),
    0 6.9px 6.9px rgba(0, 0, 0, 0.041),
    0 11.4px 11.4px rgba(0, 0, 0, 0.049),
    0 18.8px 18.8px rgba(0, 0, 0, 0.056),
    0 32.8px 32.8px rgba(0, 0, 0, 0.067),
    0 71px 71px rgba(0, 0, 0, 0.09)
    ;
    transition: all 0.2s ease-in-out;
}
.workContainer:hover{
    transform: scale(1.05);
}
.title{
    font-size: 1.5rem;
    background: rgba(186,121,55,1);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
}
.image{
    width: 60%;
    margin: 1rem 0;
}
.text{
    font-size: 1.2rem;
    color: #000;
    font-style: italic;
}
.textInside{
    font-weight: bold;
    font-style: normal;
}
`;