import { useEffect, useReducer } from 'react';

const generateMaze = () => [
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
    [1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1,],
    [1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1,],
    [1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1,],
    [1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1,],
    [1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1,],
    [1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1,],
    [1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1,],
    [1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1,],
    [1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1, 1,],
    [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
];

// constants
const LOADED = 'maze/LOADED';
const KEY_PRESS = 'maze/KEY_PRESS';
// Reducer
const reducer = (state, { type, payload }) => {
    switch (type) {
        case LOADED:
            return { ...state, loaded: true, maze: payload }
        // case KEY_PRESS: {
        //     const cell = state.maze[state.y][state.x]
        //     if (payload === "ArrowLeft" && !cell.left) return { ...state, x: max(0, --state.x) }
        //     if (payload === "ArrowUp" && !cell.top) return { ...state, y: max(0, --state.y) }
        //     if (payload === "ArrowRight" && !cell.right)
        //         return { ...state, x: min(state.maze.length, ++state.x) }
        //     if (payload === "ArrowDown" && !cell.bottom)
        //         return { ...state, y: min(state.maze.length, ++state.y) }
        // }
        default:
            return state
    }
}

const useMaze = () => {
    const [state, dispatch] = useReducer(reducer, {
        maze: [],
        start: '0:1',
        end: '11:12',
    });
    useEffect(() => {
        const maze = generateMaze();
        const handleKeyPress = ({ key }) => dispatch({ type: KEY_PRESS, payload: key })
        dispatch({ type: LOADED, payload: maze })
        document.addEventListener("keydown", handleKeyPress)
        return () => document.removeEventListener("keydown", handleKeyPress)
    }, [])
    return state
};

export default useMaze;