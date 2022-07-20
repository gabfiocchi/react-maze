import React from 'react';
import { useAppDispatch } from '../../hooks/useAppState';
import { loaded } from '../../store/maze/mazeSlice';
import ChevronRight from '../chevronRight/chevronRight';

const StartGameBanner: React.FC = () => {
    const dispatch = useAppDispatch();
    return (
        <div className="flex flex-col w-full my-14">
            <button className="inline-flex items-center py-2 px-4 text-sm text-center text-white bg-black rounded-full m-auto font-extrabold" onClick={() => dispatch(loaded(true))}>
                Start game
                <ChevronRight />
            </button>
        </div>
    );
}
export default StartGameBanner;
