import styled from "styled-components";

export const FooterStyled = styled.footer`
background-color: #a42f42;
overflow: hidden;
.infoFooter{
    display: flex;
    flex-direction: row;

    height: 300px;
    width: 100%;
    .footer{
        width: 33%;
        height: 100%;

        border: 1px solid red;
    }
    .center{
        display: flex;
        justify-content: center;
        align-items: center;
        .micro{
            height: 90%;
        }
    }
}
.created{
    font-family: 'Roboto-regular';
    font-size: 1.2rem;
    text-align: center;
    padding: 20px 0;
    color: #fff;
    a{
        text-shadow: 1px 1px 2px #000;
        color: #fff;
    }    
    a:hover{
        text-shadow: 0 0 0 #0000;
        color: #ccc;
    }
}
`