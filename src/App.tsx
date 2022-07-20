import React from 'react';
import './App.scss';
import AudioGame from './components/audioGame/audioGame';
import EndGameBanner from './components/endGameBanner/endGameBanner';
import GoCookCard from './components/goCookCard/goCookCard';
import MazeGrid from './components/mazeGrid/mazeGrid';
import Pad from './components/pad/pad';
import StartGameBanner from './components/startGameBanner/startGameBanner';
import { useAppSelector } from './hooks/useAppState';
import useKeyPress from './hooks/useKeyPress';
import { RootState } from './store';

const App: React.FC = () => {
  const { isLoaded, moves, isFinished } = useAppSelector((state: RootState) => ({
    isLoaded: state.maze.loaded,
    moves: state.maze.moves,
    isFinished: state.maze.finished,
  }));
  useKeyPress('ArrowUp');
  useKeyPress('ArrowDown');
  useKeyPress('ArrowRight');
  useKeyPress('ArrowLeft');

  return (
    // bg-neutral-100 
    <main className="flex flex-col align-center justify-center max-w-md m-auto pt-10 px-4 md:px-0">
      <div className="flex items-baseline justify-between mb-4">
        <h2 className="text-2xl font-extrabold">Maze game</h2>
        {isLoaded && !isFinished && <p className="font-semibold">
          Moves: <span className="text-green-400">{moves}</span>
        </p>}
      </div>
      <div className="flex flex-col p-6 bg-white rounded-lg border border-gray-200 shadow-md w-full">
        {isLoaded && !isFinished && <MazeGrid />}
        {isLoaded && !isFinished && <Pad />}
        {!isLoaded && <StartGameBanner />}
        {isFinished && <EndGameBanner />}
      </div>
      {isFinished && <GoCookCard />}
      <AudioGame />
    </main>
  );
};


export default App;
