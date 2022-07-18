import React from 'react';
import MazeCell from '../mazeCell';

interface MazeRowProps {
    row: number[];
}
const MazeRow: React.FC<MazeRowProps> = ({ row }: MazeRowProps) => {
    return (
        <div className="flex flex-row">
            {row.map((cell: any, cellIndex: number) => (
                <MazeCell key={cellIndex} cell={cell} />
            ))}
        </div>
    );
}
export default MazeRow;
