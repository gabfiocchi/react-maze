import React from 'react';
import { useAppSelector } from '../../hooks/useAppState';
import { RootState } from '../../store';
import Avatar from '../Avatar/Avatar';
interface MazeCellProps {
    cell: 0 | 1;
    positionX: number;
    positionY: number;
}
const MazeCell: React.FC<MazeCellProps> = ({ cell, positionX, positionY }: MazeCellProps) => {
    const avatar = useAppSelector((state: RootState) => state.maze.avatar);
    return (
        <div
            data-testid="maze-cell"
            className={`aspect-square border-0.55 border-white flex-1 flex items-center text-transparent justify-center ${cell === 1 ? 'bg-black' : 'bg-white'}`}
        >
            {
                avatar.x === positionX && avatar.y === positionY ? <Avatar /> : null
            }
        </div>
    );
}
export default MazeCell;
