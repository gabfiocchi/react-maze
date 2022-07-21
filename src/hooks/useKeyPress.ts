import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { endGame, increment, moveAvatar } from "../store/maze/mazeSlice";
import { checkCollision, checkEndGame, getNewPosition, playAudio } from "../utils/maze-utils";
import { useAppDispatch } from "./useAppState";

const useKeyPress = (targetKey: string) => {
    const dispatch = useAppDispatch();

    const { avatar, maze, end, finished } = useSelector((state: RootState) => ({
        avatar: state.maze.avatar,
        maze: state.maze.maze,
        end: state.maze.end,
        finished: state.maze.finished,
    }));
    // State for keeping track of whether key is pressed
    const [keyPressed, setKeyPressed] = useState<boolean>(false);
    // If pressed key is our target key then set to true
    const downHandler = (event: KeyboardEvent) => {
        const { key } = event;

        if (key.includes('Arrow')) {
            event.preventDefault();
        }

        if (key === targetKey) {
            let moveTo = key.toLowerCase().replace(/arrow/i, '');

            const newAvatarPosition = getNewPosition(moveTo, avatar);

            const isEndGame = checkEndGame(newAvatarPosition, end);
            if (isEndGame) {
                playAudio('winGame');
                dispatch(endGame());
            }
            if (checkCollision(newAvatarPosition, maze) && !isEndGame) {
                playAudio('buttonPressWrong');
                return false;
            }

            if (!finished) {
                playAudio('buttonPress');
                dispatch(increment());
                dispatch(moveAvatar(moveTo));
            }

            setKeyPressed(true);

        }
    }
    // If released key is our target key then set to false
    const upHandler = ({ key }: KeyboardEvent) => {
        if (key === targetKey) {
            setKeyPressed(false);
        }
    };
    // Add event listeners
    useEffect(() => {
        window.addEventListener('keydown', downHandler);
        window.addEventListener('keyup', upHandler);
        // Remove event listeners on cleanup
        return () => {
            window.removeEventListener('keydown', downHandler);
            window.removeEventListener('keyup', upHandler);
        };
    }, [avatar, maze, finished]); // Empty array ensures that effect is only run on mount and unmount
    return keyPressed;
}
export default useKeyPress;