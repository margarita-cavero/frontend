import styled from "styled-components";

export const AboutMeStyled = styled.div`
display:flex;
align-items:center;
position: relative;
flex-direction:column;
width: 100%;
font-family: 'Roboto-regular';
    .sticky1{
        width: 90%;
        height: 1500px;
        .aboutMe{
            position:sticky;
            top: 40%;
            font-size:3rem;
            margin: 1rem;
            text-align:center;
            opacity:0;
            transition: all 2s;
            color: #fff;
            .sobre{
                color: #000;
                .s, .o, .b, .r, .e, .mi{
                    transition: all .7s;
                }
            }
        }
        .divs{
            width:100%;
            height: 200px;
        }
    }
    .aboutMe.show{
        opacity:1;
    }
    .mi.show12{
        animation: mi 1s linear alternate;
        color: #000;
    }
    @keyframes mi {
        0%{
            color: #fff;
        }
        50%{
            color: #a42f42;
        }
        100%{
            color: #000;
        }
    }
    .presentation{
        margin: .5rem 5%;
        font-size:1.5rem;
        text-align:justify;
        color: #000;
        text-shadow: 1px 1px 1px #555;
        line-height: 2.5rem;
        .links{
            color: #555;
            transition: all 1s;
        }
        .links:hover{
            color: #aaa;
        }
    }
    .s.show2{
        position: relative;
        font-size:3.5rem;
        bottom: 50px;
        color: #a42f42;
    }
    .s.show3{
        font-size:3rem;
        bottom: 0;
        color: #fff;
    }
    .o.show4{
        position: relative;
        font-size:3.5rem;
        bottom: 50px;
        color: #a42f42;
    }
    .o.show5{
        font-size:3rem;
        bottom: 0;
        color: #fff;
    }
    .b.show6{
        position: relative;
        font-size:3.5rem;
        bottom: 50px;
        color: #a42f42;
    }
    .b.show7{
        font-size:3rem;
        bottom: 0;
        color: #fff;
    }
    .r.show8{
        position: relative;
        font-size:3.5rem;
        bottom: 50px;
        color: #a42f42;
    }
    .r.show9{
        font-size:3rem;
        bottom: 0;
        color: #fff;
    }
    .e.show10{
        position: relative;
        font-size:3.5rem;
        bottom: 50px;
        color: #a42f42;
    }
    .e.show11{
        font-size:3rem;
        bottom: 0;
        color: #fff;
    }
@media (min-width: 768px){
    .sticky1{
        width: 50%;
        .aboutMe{
            font-size:6rem;
            margin: 2rem;
        }
    }
        .s.show2{
        font-size:8rem;
    }
    .presentation{
        font-size: 2rem;
        margin: 1rem 10%;
        line-height: 2.5rem;
    }
    .s.show3{
        font-size:6rem;
    }
    .o.show4{
        font-size:8rem;
    }
    .o.show5{
        font-size:6rem;
    }
    .b.show6{
        font-size:8rem;
    }
    .b.show7{
        font-size:6rem;
    }
    .r.show8{
        font-size:8rem;
    }
    .r.show9{
        font-size:6rem;
    }
    .e.show10{
        font-size:8rem;
    }
    .e.show11{
        font-size:6rem;
    }
}
`