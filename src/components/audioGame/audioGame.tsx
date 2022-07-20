import React from 'react';

const AudioGame: React.FC = () => {
    return (
        <>
            <audio id="buttonPress" autoPlay={false} preload="">
                <source src="/assets/sounds/button-press.wav" type="audio/wav" />
                Your browser does not support the audio element.
            </audio>
            <audio id="buttonPressWrong" autoPlay={false} preload="">
                <source src="/assets/sounds/button-press-wrong.wav" type="audio/wav" />
                Your browser does not support the audio element.
            </audio>
            <audio id="winGame" autoPlay={false} preload="">
                <source src="/assets/sounds/win-game.wav" type="audio/wav" />
                Your browser does not support the audio element.
            </audio>
        </>
    );
}
export default AudioGame;
