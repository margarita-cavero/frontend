import styled from 'styled-components';

export const NavStyled = styled.nav`
position: fixed;
width: 100%;
height: 10vh;
/* background-color: #2d0f0c; */
background-image: url('../../assets/images/madera.jpeg');
background-position: center;
padding: .4rem;
display: flex;
align-items: center;
justify-content: space-between;
z-index: 100;
.navbar-brand{
    font-weight: 400;
    font-size: 1.5rem;
    font-family: 'Srisakdi-Bold';
    padding: 1rem;
    background: -webkit-linear-gradient(to right, #a42f42, #cd9b81);
    background: linear-gradient(to right, #a42f42, #bb9885);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
}
.links-container{
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
    .links{
        display: block;
        font-family: 'Roboto-regular';
        font-size: 2rem;
        color: #fff;
    }
    @media (min-width: 768px) {
        position: initial;
        margin: 0;
        margin-right: 2rem;
        .links{
            display: inline-block;
            font-size: 1.5rem;
            /* color: #cd9b81; */
            margin-right: 2rem;
            background: -webkit-linear-gradient(to right, #cd9b81, #a42f42);
            background: linear-gradient(to right, #cd9b81, #a42f42);
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
        }
    }
}
.links-container.active{
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 25vh;
    left: 0;
    right: 0;
    text-align: center;
    color: #fff;
        .links{
            margin-top: 1rem;
            font-size: 2rem;
            color: #fff;
        }
        .links:after {
            content: "";
            display: block;
            margin: auto;
            height: 2px;
            width: 0px;
            transition: all .8s;
        }
        .links:hover:after {
            width: 100%;
            background: #fff;
        }
}
.burguer{
    @media(min-width: 768px){
        display: none;
    }
}
`