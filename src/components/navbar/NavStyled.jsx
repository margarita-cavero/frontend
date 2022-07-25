import styled from 'styled-components';

export const NavStyled = styled.nav`
position: fixed;
width: 100%;
height: 10vh;
background-image: url('../../assets/images/madera.jpeg');
background-position: center;
padding: .4rem;
display: flex;
align-items: center;
justify-content: space-between;
z-index: 100;
border-bottom: 2px inset #181818;
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
.navbar-brand:hover{
    background: -webkit-linear-gradient(to right, #cd9b81, #a42f42);
    background: linear-gradient(to right, #cd9b81, #a42f42);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
}
.links-container{
    position: absolute;
    top: -1000px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
    z-index: 50;
    .links{
        display: block;
        font-family: 'Roboto-regular';
        font-size: 2rem;
        margin-right: 2rem;
        background: -webkit-linear-gradient(to right, #cd9b81, #a42f42);
        background: linear-gradient(to right, #cd9b81, #a42f42);
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
        transition: all .5s ease;
    }
    .links:hover{
        background: -webkit-linear-gradient(to right, #a42f42, #cd9b81);
        background: linear-gradient(to right, #a42f42, #cd9b81);
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
    }
    @media (min-width: 768px) {
        position: initial;
        margin: 0;
        margin-right: 2rem;
        .links{
            display: inline-block;
            font-size: 1.5rem;
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
        .links{
            margin-top: 1rem;
            font-size: 2rem;
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
            width: 50%;
            background: #cd9b81;
        }
}
.burguer{
    @media(min-width: 768px){
        display: none;
    }
}
`;

export const NavBarActive = {
    borderBottom: '2px solid #cd9b81'
};
