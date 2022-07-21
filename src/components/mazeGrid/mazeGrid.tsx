import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/useAppState';
import { RootState } from '../../store';
import { restart } from '../../store/maze/mazeSlice';
import MazeRow from '../MazeRow/MazeRow';

const MazeGrid: React.FC = () => {
    const { maze, moves } = useAppSelector((state: RootState) => ({
        maze: state.maze.maze,
        moves: state.maze.moves,
    }));
    const dispatch = useAppDispatch();

    return (
        <>
            <div className="flex flex-col w-full select-none">
                {maze.map((row: number[], rowIndex: number) => (
                    <MazeRow key={rowIndex} row={row} positionY={rowIndex} />
                ))}
            </div>
            {moves > 0 &&
                <button onClick={() => dispatch(restart())}
                    className="inline-flex items-center py-2 px-4 mt-6 text-sm text-center text-white bg-black rounded-full m-auto font-extrabold hover:bg-slate-800 focus:ring-2 focus:outline-none focus:ring-slate-300"
                >
                    Restart game
                </button>
            }
        </>
    );
}
export default MazeGrid;
