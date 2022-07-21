import React from 'react';
import { useAppDispatch } from '../../hooks/useAppState';
import { loaded } from '../../store/maze/mazeSlice';
import ChevronRight from '../ChevronRight/ChevronRight';

const StartGameBanner: React.FC = () => {
    const dispatch = useAppDispatch();
    return (
        <div className="flex flex-col w-full my-14">
            <button
                onClick={() => dispatch(loaded(true))}
                className="inline-flex items-center py-2 px-4 text-sm text-center text-white bg-black rounded-full m-auto font-extrabold hover:bg-slate-800 focus:ring-2 focus:outline-none focus:ring-slate-300"
            >
                Start game
                <ChevronRight />
            </button>
        </div>
    );
}
export default StartGameBanner;
