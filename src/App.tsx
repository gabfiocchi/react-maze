import React from 'react';
import './App.scss';
import AudioGame from './components/AudioGame/AudioGame';
import EndGameBanner from './components/EndGameBanner/EndGameBanner';
import GoCookCard from './components/GoCookCard/GoCookCard';
import MazeGrid from './components/MazeGrid/MazeGrid';
import Pad from './components/Pad/Pad';
import StartGameBanner from './components/StartGameBanner/StartGameBanner';
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
