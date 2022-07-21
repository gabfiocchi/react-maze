import { fireEvent, screen } from '@testing-library/react';
import { initialMazeState } from '../../store/maze/mazeSlice';
import { renderWithProviders } from '../../utils/test-utils';
import StartGameBanner from './StartGameBanner';

const mockUseAppDispatch = jest.fn();
jest.mock('../../hooks/useAppState', () => ({
    ...jest.requireActual('../../hooks/useAppState'),
    useAppDispatch: () => mockUseAppDispatch,
}));

test('StartGameBanner render Start Game button', () => {
    renderWithProviders(<StartGameBanner />, {
        preloadedState: {
            maze: initialMazeState,
        },
    });
    const startButton = screen.getByText(/start game/i);

    expect(startButton).toBeInTheDocument();
    expect(startButton.textContent).toBe('Start game');

    fireEvent.click(startButton);
    expect(mockUseAppDispatch).toHaveBeenCalledTimes(1);
    expect(mockUseAppDispatch).toHaveBeenCalledWith({ payload: true, type: 'maze/loaded' });
});
