import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { increment, moveAvatar, Position } from "../store/maze/mazeSlice";
import { useAppDispatch } from "./useAppState";

const checkCollision = (moveTo: string, avatar: Position, maze: number[][]) => {
    console.log('moveTo', moveTo);
    let { x, y } = avatar;
    console.log('avatar', avatar, x, y);

    switch (moveTo) {
        case 'ArrowUp':
            y -= 1;
            break;
        case 'ArrowDown':
            y += 1;
            break;
        case 'ArrowLeft':
            x -= 1;
            break;
        case 'ArrowRight':
            x += 1;
            break;
        default:
            break;
    }

    const [row, col] = [y, x];
    const cell = maze[row][col];

    console.log('cell', cell);
    return cell === 1;
}

const useKeyPress = (targetKey: string) => {
    const dispatch = useAppDispatch();
    // const appearance = useSelector((state) => state.application?.appearance);
    const { avatar, maze } = useSelector((state: RootState) => ({
        avatar: state.maze.avatar,
        maze: state.maze.maze
    }));
    // State for keeping track of whether key is pressed
    const [keyPressed, setKeyPressed] = useState<boolean>(false);
    // If pressed key is our target key then set to true
    const downHandler = ({ key }: KeyboardEvent) => {
        if (key === targetKey) {
            let moveTo = '';
            console.log('downHandler', key);
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


            if (checkCollision(moveTo, avatar, maze)) {
                return false;
            }

            dispatch(increment());
            setKeyPressed(true);

            dispatch(moveAvatar(moveTo));

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
    }, []); // Empty array ensures that effect is only run on mount and unmount
    return keyPressed;
}
export default useKeyPress;