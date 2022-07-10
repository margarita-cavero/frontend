import styled from 'styled-components';

export const NavStyled = styled.nav`
.navbar-brand{
    color: #fff;
    font-weight: 400;
    font-size: 1.5rem;
    font-family: 'Srisakdi-Bold';
    margin-left: 1rem;
}
/* position: fixed; */
width:100%;
height: 10vh;
background-color: #000;
padding: .4rem;
display: flex;
align-items: center;
justify-content: space-between;
.links-container{
    position: absolute;
    top: -700px;
    left: -2000px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    .links{
        display: block;
        font-family: 'Roboto-regular';
        font-size: 2rem;
        color: #000;
    }
    @media (min-width: 768px) {
        position: initial;
        margin: 0;
        .links{
            display: inline-block;
            font-size: 1.5rem;
            color: #f00;
        }
    }
}
.links-container.active{
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    color: #000;
}
.burguer{
    @media(min-width: 768px){
        display: none;
    }
}
`