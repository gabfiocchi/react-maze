import { fireEvent, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { increment, initialMazeState } from '../../store/maze/mazeSlice';
import { renderWithProviders } from '../../utils/test-utils';
import MazeGrid from './MazeGrid';

const mockUseAppDispatch = jest.fn();
jest.mock('../../hooks/useAppState', () => ({
    ...jest.requireActual('../../hooks/useAppState'),
    useAppDispatch: () => mockUseAppDispatch,
}));
test('MazeGrid initial state', () => {
    renderWithProviders(
        <MazeGrid />,
        {
            preloadedState: {
                maze: initialMazeState,
            },
        }
    );

    expect(screen.queryByText(/restart game/i)).not.toBeInTheDocument();
});

test('MazeGrid render Restart Game button', async () => {
    const { store } = renderWithProviders(
        <MazeGrid />,
        {
            preloadedState: {
                maze: {
                    ...initialMazeState,
                    moves: 0,
                },
            },
        }
    );

    act(() => {
        /* fire events that update state */
        store.dispatch(increment());
    });

    const title = screen.getByText(/restart game/i);

    expect(title).toBeInTheDocument();
    expect(title.textContent).toBe('Restart game');

    fireEvent.click(screen.getByText('Restart game'));
    expect(mockUseAppDispatch).toHaveBeenCalledTimes(1);
    expect(mockUseAppDispatch).toHaveBeenCalledWith({ payload: undefined, type: 'maze/restart' });
});