import styled from "styled-components";

export const WorkStyled = styled.div`
display: flex;
flex-flow: row wrap;
justify-content: space-evenly;
.workContainer{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(98,54,0,1) 30%, rgba(186,121,55,1) 100%);
    top: 10%;
    width: 20%;
    height: 340px;
    font-family: 'Roboto-regular';
    border-radius: 1rem;
    min-width: 220px;
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
.title{
    font-size: 1.5rem;
    background: rgba(186,121,55,1);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
}
.image{
    width: 60%;
    margin: .5rem;
}
`;