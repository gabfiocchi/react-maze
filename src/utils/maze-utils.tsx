import { Position } from "../store/maze/mazeSlice";

export const getNewPosition = (moveTo: string, avatar: Position) => {
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
export const checkCollision = (avatar: Position, maze: number[][]) => {
    const { y: row, x: col } = avatar;
    if (row < 0 || col < 0) {
        return true;
    }
    const cell = maze[row][col];

    return cell === 1;
}

export const checkEndGame = (avatar: Position, end: Position) => {
    const { x: row, y: col } = avatar;

    return row === end.x && col === end.y;
}

export const playAudio = (id: string) => {
    const audio = (document.getElementById(id) as HTMLAudioElement);
    audio.currentTime = 0;
    audio.muted = false;
    audio.play();
}