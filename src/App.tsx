import React from 'react';
import './App.scss';
import MazeGrid from './components/mazeGrid';
import StartGameBanner from './components/startGameBanner/startGameBanner';

const App: React.FC = () => {
  return (
    // bg-neutral-100 
    <main className="flex flex-col align-center justify-center max-w-md m-auto pt-10 px-4 md:px-0">
      <div className="flex items-baseline justify-between mb-4">
        <h2 className="text-2xl font-extrabold">Maze game</h2>
        <p className="font-semibold">
          Moves: <span className="text-blue-500">{0}</span>
        </p>
      </div>
      <div className="flex flex-col p-6 bg-white rounded-lg border border-gray-200 shadow-md w-full">
        <MazeGrid />
        <span className='mb-6'></span>
        <StartGameBanner />
      </div>
      {/* dark: */}
      {/* hover: */}
    </main>
  );
};


export default App;
