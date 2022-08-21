import styled from 'styled-components';

export const BgDiv = styled.div`
    position: fixed;
    background-image: url('../../images/madera-rotada.jpg');
    background-position: center;
    top:-1000px;
    left: -1000px;
    width: 100%;
    height: 100%;
    z-index: 50;
    box-shadow: 1px 1px 1px #bb9885;
    transition: all .6s ease;
    &.active{
        width: 100%;
        height: 100%;
        top:0;
        left: 0;
        border-radius: 0 0 80% 0;
    }
`
