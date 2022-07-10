import styled from 'styled-components';

export const BgDiv = styled.div`
    position: absolute;
    background-color: #333;
    top:-1000px;
    left: -1000px;
    width: 100%;
    height: 100%;
    z-index: 50;
    transition: all .6s ease;
    &.active{
        width: 100%;
        height: 100%;
        top:0;
        left: 0;
        border-radius: 0 0 80% 0;
    }
`
