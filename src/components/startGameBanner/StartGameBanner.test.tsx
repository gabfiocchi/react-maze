import { fireEvent, screen } from '@testing-library/react';
import { initialMazeState } from '../../store/maze/mazeSlice';
import { renderWithProviders } from '../../utils/test-utils';
import StartGameBanner from './StartGameBanner';


test('renders react app', () => {
    renderWithProviders(<StartGameBanner />, {
        preloadedState: {
            maze: initialMazeState,
        },
    });
    const startButton = screen.getByText(/start game/i);

    expect(startButton).toBeInTheDocument();
    expect(startButton.textContent).toBe('Start game');

    fireEvent.click(startButton);
    // TODO: add dispatch mock called in StartGameBanner
});
