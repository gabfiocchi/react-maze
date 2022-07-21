import { fireEvent, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { initialMazeState, restart } from '../../store/maze/mazeSlice';
import { renderWithProviders } from '../../utils/test-utils';
import EndGameBanner from './EndGameBanner';

const mockUseAppDispatch = jest.fn();
jest.mock('../../hooks/useAppState', () => ({
    ...jest.requireActual('../../hooks/useAppState'),
    useAppDispatch: () => mockUseAppDispatch,
}));

test('EndGameBanner render Restart Game button', () => {
    renderWithProviders(<EndGameBanner />, {
        preloadedState: {
            maze: initialMazeState,
        },
    });
    const title = screen.getByText(/congratulations/i);

    expect(title).toBeInTheDocument();
    expect(title.textContent).toBe('Congratulations!');
});

test('EndGameBanner Restart Game dispatch action', () => {
    const { store } = renderWithProviders(<EndGameBanner />, {
        preloadedState: {
            maze: initialMazeState,
        },
    });
    const title = screen.getByText(/congratulations/i);

    expect(title).toBeInTheDocument();
    expect(title.textContent).toBe('Congratulations!');

    fireEvent.click(screen.getByText('Restart game'));
    expect(mockUseAppDispatch).toHaveBeenCalledTimes(1);
    expect(mockUseAppDispatch).toHaveBeenCalledWith({ payload: undefined, type: 'maze/restart' });
});

test('EndGameBanner Restart Game', () => {
    const { store } = renderWithProviders(<EndGameBanner />, {
        preloadedState: {
            maze: initialMazeState,
        },
    });

    act(() => {
        /* fire events that update state */
        store.dispatch(restart());
    });

    expect(store.getState().maze.moves).toEqual(initialMazeState.moves);
    expect(store.getState().maze.avatar).toEqual(initialMazeState.avatar);
    expect(store.getState().maze.maze).toEqual(initialMazeState.maze);
    expect(store.getState().maze.finished).toEqual(initialMazeState.finished);
});
