import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { endGame, increment, moveAvatar, Position } from "../store/maze/mazeSlice";
import { useAppDispatch } from "./useAppState";
const getNewPosition = (moveTo: string, avatar: Position) => {
    let { x, y } = avatar;
    switch (moveTo) {
        case 'up':
            y -= 1;
            break;
        case 'down':
            y += 1;
            break;
        case 'left':
            x -= 1;
            break;
        case 'right':
            x += 1;
            break;
        default:
            break;
    }
    return { x, y };
}
const checkCollision = (avatar: Position, maze: number[][]) => {
    const { y: row, x: col } = avatar;
    if (row < 0 || col < 0) {
        return true;
    }
    const cell = maze[row][col];

    return cell === 1;
}

const checkEndGame = (avatar: Position, end: Position) => {
    const { x: row, y: col } = avatar;

    return row === end.x && col === end.y;
}

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
            let moveTo = '';
            switch (key) {
                case 'ArrowUp':
                    moveTo = 'up';
                    break;
                case 'ArrowDown':
                    moveTo = 'down';
                    break;
                case 'ArrowLeft':
                    moveTo = 'left';
                    break;
                case 'ArrowRight':
                    moveTo = 'right';
                    break;
                default:
                    break;
            }

            const newAvatarPosition = getNewPosition(moveTo, avatar);

            const isEndGame = checkEndGame(newAvatarPosition, end);
            if (isEndGame) {
                dispatch(endGame());
            }
            if (checkCollision(newAvatarPosition, maze) && !isEndGame) {
                return false;
            }

            if (!finished) {
                new Audio('/assets/sounds/button-press.wav').play();
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