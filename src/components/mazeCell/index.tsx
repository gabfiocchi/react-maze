import React from 'react';

interface MazeCellProps {
    cell: 1 | 0;
}
const MazeCell: React.FC<MazeCellProps> = ({ cell }: MazeCellProps) => {
    return (
        <div className={`aspect-square border border-white text-transparent flex-1 flex items-center justify-center ${cell === 0 ? 'bg-' : 'bg-black'
            }`} >
            {cell}
        </div>
    );
}
export default MazeCell;
