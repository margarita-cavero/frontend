import { useRef, useState } from "react";

export const MujerJoven = () => {

    const audioPlayer = useRef();
    const [currentTime, setCurrentTime] = useState(0);
    const [seekValue, setSeekValue] = useState(0);

    const play = () => {
        audioPlayer.current.play();
    };

    const pause = () => {
        audioPlayer.current.pause();
    };

    const stop = () => {
        audioPlayer.current.pause();
        audioPlayer.current.currentTime = 0;
    };

    const setSpeed = (speed) => {
        audioPlayer.current.playbackRate = speed;
    };

    const onPlaying = () => {
        setCurrentTime(audioPlayer.current.currentTime);
        setSeekValue(
            (audioPlayer.current.currentTime / audioPlayer.current.duration) * 100
        );
    };

    return (
        <div className="audioPlayer">
            <audio
                src="../../assets/audios/mujer-joven.mp3"
                ref={audioPlayer}
                onTimeUpdate={onPlaying}
            >
                Your browser does not support the
                <code>audio</code> element.
            </audio>
            <br />
            <h3 className="title">Mujer Joven</h3>
            {/* <p>{currentTime}</p> */}
            <input
                className="timeBar"
                type="range"
                min="0"
                max="100"
                step="1"
                value={seekValue}
                onChange={(e) => {
                    const seekto = audioPlayer.current.duration * (+e.target.value / 100);
                    audioPlayer.current.currentTime = seekto;
                    setSeekValue(e.target.value);
                }}
            />
            <div className="buttons">
                <div className="button play" onClick={play}></div>
                <div className="button pause" onClick={pause}></div>
                <div className="button stop" onClick={stop}></div>
                {/* <div className="button time" onClick={() => setSpeed(0.5)}>0.5x</div>
                    <div className="button time" onClick={() => setSpeed(1)}>1x</div>
                    <div className="button time" onClick={() => setSpeed(1.5)}>1.5x</div>
                    <div className="button time" onClick={() => setSpeed(2)}>2x</div> */}
            </div>
        </div>
    )
}
