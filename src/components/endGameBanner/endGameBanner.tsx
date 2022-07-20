import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/useAppState';
import { RootState } from '../../store';
import { restart } from '../../store/maze/mazeSlice';

const EndGameBanner: React.FC = () => {
    const dispatch = useAppDispatch();

    const moves = useAppSelector((state: RootState) => state.maze.moves);

    return (
        <div className="flex flex-col w-full my-4">
            {/* my-14 */}
            <img className="w-32 m-auto mb-6" src="/assets/images/complete.gif" alt="" />
            <div className="text-center">
                <h3 className="text-xl font-extrabold">
                    Congratulations!
                </h3>
                <p className="font-semibold">
                    You have completed the maze in <span className="font-extrabold text-green-400">{moves}</span> moves
                </p>
            </div>
            <button onClick={() => dispatch(restart())}
                className="inline-flex items-center py-2 px-4 mt-6 text-sm text-center text-white bg-black rounded-full m-auto font-extrabold"
            >
                Restart game
            </button>
        </div>
    );
}
export default EndGameBanner;
