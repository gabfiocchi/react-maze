import React from 'react';
import useMaze from '../../state/maze';
import MazeRow from '../mazeRow';

const MazeGrid: React.FC = () => {
    const { maze } = useMaze();
    return (
        <div className="flex flex-col w-full">
            {maze.map((row: number[], rowIndex: number) => (
                <MazeRow key={rowIndex} row={row} />
            ))}
        </div>
    );
}
export default MazeGrid;
