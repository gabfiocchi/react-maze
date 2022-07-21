import React from 'react';
import MazeCell from '../MazeCell/MazeCell';

interface MazeRowProps {
    row: number[];
    positionY: number;
}
const MazeRow: React.FC<MazeRowProps> = ({ row, positionY }: MazeRowProps) => {
    return (
        <div className="flex flex-row">
            {row.map((cell: any, cellIndex: number) => (
                <MazeCell key={cellIndex} cell={cell} positionY={positionY} positionX={cellIndex} />
            ))}
        </div>
    );
}
export default MazeRow;
