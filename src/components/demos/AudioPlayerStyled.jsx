import styled from "styled-components";

export const AudioPlayerStyled = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
align-items: center;
justify-content: space-around;
padding: 3rem;
.audioPlayer{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 343px;
    height: 200px;
    max-width: 100%;
    background-color: #4a4747bb;
    border-radius: 16px;
    box-shadow: 0 0 5px #777;
    z-index:1;
    margin-bottom: 3rem;
    .title{
        color: #eee7;
        /* font-family: 'Roboto-regular'; */
        font-size: 2rem;
        /* margin-top: -10%; */
    }
    .timeBar{
        -webkit-appearance: none;
      width: 90%;
      height: 8px;
      border-radius: 5px;
      background: #a42f42;
      outline: none;
      opacity: 0.7;
      -webkit-transition: .2s;
      transition: opacity .2s;
      margin: 20px;
    }
    .timeBar:hover {
      opacity: 1;
    }
    .timeBar::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: #cd9b81;
      cursor: pointer;
      box-shadow:0px 0px 11px 8px rgba(0,0,0,0.26);
      background-color: #cd9b81;
      background-size: 45%;
      background-position: center;
      background-repeat: no-repeat;
    }
    .timeBar::-moz-range-thumb {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: #cd9b81;
      cursor: pointer;
      box-shadow:0px 0px 11px 8px rgba(0,0,0,0.26);
      background-color: #cd9b81;
      background-size: 45%;
      background-position: center;
      background-repeat: no-repeat;
    }
    .buttons{
        display: flex;
        flex-direction: row;
    }
    .button{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        margin: 5px;
        cursor: pointer;
        background-size: cover;
    }
    .button:hover{
        filter: drop-shadow(0 0 5px #000);
    }
    .button:active{
        filter: drop-shadow(0 0 0px #0000);
    }
    .play{
        background-image: url('../../images/audio-player/play.png');
    }
    .pause{
        background-image: url('../../images/audio-player/pausa.png');
    }
    .stop{
        background-image: url('../../images/audio-player/stop.png');
    }
    .time{
        background-color: #000;
        color: #fff;
        border-radius: 3px;
        font-family: 'Typewriter-Bold';
        font-size: 12px;
    }
}
`