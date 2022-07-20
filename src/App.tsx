import React from 'react';
import './App.scss';
import MazeGrid from './components/mazeGrid/mazeGrid';
import StartGameBanner from './components/startGameBanner/startGameBanner';
import { useAppDispatch, useAppSelector } from './hooks/useAppState';
import useKeyPress from './hooks/useKeyPress';
import { RootState } from './store';
import { restart } from './store/maze/mazeSlice';

const App: React.FC = () => {
  const { isLoaded, moves, isFinished } = useAppSelector((state: RootState) => ({
    isLoaded: state.maze.loaded,
    moves: state.maze.moves,
    isFinished: state.maze.finished,
  }));
  const ArrowUp = useKeyPress('ArrowUp');
  const ArrowDown = useKeyPress('ArrowDown');
  const ArrowRight = useKeyPress('ArrowRight');
  const ArrowLeft = useKeyPress('ArrowLeft');
  const dispatch = useAppDispatch();

  return (
    // bg-neutral-100 
    <main className="flex flex-col align-center justify-center max-w-md m-auto pt-10 px-4 md:px-0">
      <div className="flex items-baseline justify-between mb-4">
        <h2 className="text-2xl font-extrabold">Maze game</h2>
        <p className="font-semibold">
          Moves: <span className="text-blue-500">{moves}</span>
        </p>
      </div>
      <div className="flex flex-col p-6 bg-white rounded-lg border border-gray-200 shadow-md w-full">
        {isLoaded && <MazeGrid />}

        {!isLoaded && <StartGameBanner />}
        {isLoaded && moves > 0 && <button className="inline-flex items-center py-2 px-4 mt-6 text-sm text-center text-white bg-black rounded-full m-auto font-extrabold" onClick={() => dispatch(restart())}>
          Reset game
        </button>}
      </div>
      <div>
        {ArrowUp && "⬆️"}
        {ArrowDown && "⬇️"}
        {ArrowRight && "➡️"}
        {ArrowLeft && "⬅️"}
      </div>
      {/* dark: */}
      {/* hover: */}
    </main>
  );
};


export default App;
