import { fireEvent, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { increment, initialMazeState } from '../../store/maze/mazeSlice';
import { renderWithProviders } from '../../utils/test-utils';
import MazeGrid from './MazeGrid';


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
    // TODO: add dispatch mock test?
    // TODO: add MazeRow component rendered?
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
    // TODO: add dispatch mock test?
    // TODO: add MazeRow component rendered?
});