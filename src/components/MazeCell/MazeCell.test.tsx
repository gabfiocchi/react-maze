import { screen, waitFor } from '@testing-library/react';
import { initialMazeState } from '../../store/maze/mazeSlice';
import { renderWithProviders } from '../../utils/test-utils';
import MazeCell from './MazeCell';


test('MazeCell render Avatar', async () => {
    renderWithProviders(
        <MazeCell cell={0} positionX={1} positionY={0} />,
        {
            preloadedState: {
                maze: {
                    ...initialMazeState,
                    avatar: {
                        x: 1,
                        y: 0,
                    }
                },
            },
        }
    );
    const element = screen.getByTestId('maze-cell')

    expect(element).toHaveClass('bg-white');
    const image = screen.getByRole('img') as HTMLImageElement;
    await waitFor(() => expect(image.src !== '').toBeTruthy());
});

test('MazeCell not render Avatar', () => {
    renderWithProviders(
        <MazeCell cell={1} positionX={0} positionY={0} />,
        {
            preloadedState: {
                maze: {
                    ...initialMazeState,
                    avatar: {
                        x: 1,
                        y: 0,
                    }
                },
            },
        }
    );
    const element = screen.getByTestId('maze-cell')

    expect(element).toHaveClass('bg-black');
    expect(element.textContent).toBe('');
});