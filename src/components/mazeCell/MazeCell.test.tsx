import { initialMazeState } from '../../store/maze/mazeSlice';
import { renderWithProviders } from '../../utils/test-utils';
import MazeCell from './MazeCell';


test('MazeCell render Avatar', () => {
    const { container } = renderWithProviders(
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
        });
    expect(container.firstChild).toHaveClass('bg-white')
    // TODO: add avatar mock test?
    // TODO: add avatar component rendered?
});

test('MazeCell not render Avatar', () => {
    const { container } = renderWithProviders(
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
        });
    expect(container.firstChild).toHaveClass('bg-black')
    // TODO: add avatar mock test?
    // TODO: add avatar component rendered?
});