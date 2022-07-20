import React from 'react';
import { useAppSelector } from '../../hooks/useAppState';
import { RootState } from '../../store';
import MazeRow from '../mazeRow/mazeRow';

const MazeGrid: React.FC = () => {
    const maze = useAppSelector((state: RootState) => state.maze.maze);


    return (
        <div className="flex flex-col w-full select-none">
            {maze.map((row: number[], rowIndex: number) => (
                <MazeRow key={rowIndex} row={row} positionY={rowIndex} />
            ))}
        </div>
    );
}
export default MazeGrid;
