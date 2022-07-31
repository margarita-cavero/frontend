import styled from "styled-components";

export const FooterStyled = styled.footer`
background-color: #a42f42;
overflow: hidden;
font-family: 'Roboto-regular';
.infoFooter{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .footer{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items:center;
        width: 100%;
        height: 100%;
        .interes{
            padding-bottom: 1.5rem;
        }
        .links{
            color: #000;
            font-size: 1.5rem;
            margin: .2rem;
        }
        .links:hover{
            text-shadow: 1px 1px 2px #999;
        }
    }
    .center{
        display: flex;
        justify-content: center;
        align-items: center;
        .micro{
            height: 300px;
            margin: 2rem;
        }
    }
    .titles{
        color:#fff;
        text-align: center;
        padding-top: 2rem;
        font-size:2rem;
    }
    .socialContainer{
        display: flex;
        flex-flow: row wrap;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
        height: 150px;
        .socialLink{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 20%;

            .social{
                width: 100%;
                margin: 10px;
            }
            .social:hover{
                filter: drop-shadow(0 0 2px #000);
            }
        }
    }
}
.created{
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
@media (min-width: 768px) {
    .infoFooter{
        flex-direction: row;
        height: 300px;
        width: 100%;
        .footer{
            width: 33%;
            .links{
                font-size: 2rem;
            }
        }
        .center{
            .micro{
                height: 90%;
            }
        }
        .titles{
            color:#fff;
            text-align: center;
            padding-top: 2rem;
            font-size:2.5rem;
        }
    }
}
`