import { fireEvent, screen } from '@testing-library/react';
import { initialMazeState } from '../../store/maze/mazeSlice';
import { renderWithProviders } from '../../utils/test-utils';
import EndGameBanner from './EndGameBanner';


test('renders react app', () => {
    renderWithProviders(<EndGameBanner />, {
        preloadedState: {
            maze: initialMazeState,
        },
    });
    const title = screen.getByText(/congratulations/i);

    expect(title).toBeInTheDocument();
    expect(title.textContent).toBe('Congratulations!');

    fireEvent.click(screen.getByText('Restart game'));
    // TODO: add dispatch mock called in EndGameBanner
});
