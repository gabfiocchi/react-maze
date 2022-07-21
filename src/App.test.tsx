import { act, fireEvent, screen } from '@testing-library/react';
import App from './App';
import { endGame, initialMazeState, moveAvatar } from './store/maze/mazeSlice';
import { renderWithProviders } from './utils/test-utils';

test('renders react app', () => {
  renderWithProviders(<App />, {
    preloadedState: {
      maze: initialMazeState
    }
  });
  const title = screen.getByText(/maze game/i);

  expect(title).toBeInTheDocument();
  expect(title.textContent).toBe('Maze game');

  expect(screen.queryByText(/Moves:/i)).not.toBeInTheDocument();

  const startButton = screen.getByText(/start game/i);
  expect(startButton).toBeInTheDocument();
  expect(startButton.textContent).toBe('Start game');
});

test('Show EndGameBanner component', () => {
  const { store } = renderWithProviders(<App />, {
    preloadedState: {
      maze: initialMazeState
    }
  });

  act(() => {
    /* fire events that update state */
    store.dispatch(endGame());
  });

  expect(screen.queryByText(/Moves:/i)).not.toBeInTheDocument();

  const title = screen.getByText(/congratulations/i);

  expect(title).toBeInTheDocument();
  expect(title.textContent).toBe('Congratulations!');
});

test('Show MazeGrid component', () => {
  renderWithProviders(<App />, {
    preloadedState: {
      maze: initialMazeState
    }
  });

  fireEvent.click(screen.getByText('Start game'));

  expect(screen.getByText(/Maze game/i)).toBeInTheDocument();
  expect(screen.queryByText(/start game/i)).not.toBeInTheDocument();
});

test('Move avatar', () => {
  const { store } = renderWithProviders(<App />, {
    preloadedState: {
      maze: initialMazeState
    }
  });

  act(() => {
    /* fire events that update state */
    store.dispatch(moveAvatar('down'));
  });
  expect(store.getState().maze.avatar.y).toBe(1);


  act(() => {
    /* fire events that update state */
    store.dispatch(moveAvatar('up'));
  });
  expect(store.getState().maze.avatar.y).toBe(0);

  act(() => {
    /* fire events that update state */
    store.dispatch(moveAvatar('down'));
    store.dispatch(moveAvatar('down'));
    store.dispatch(moveAvatar('right'));
    store.dispatch(moveAvatar('right'));
  });
  expect(store.getState().maze.avatar.y).toBe(2);
  expect(store.getState().maze.avatar.x).toBe(3);


  act(() => {
    /* fire events that update state */
    store.dispatch(moveAvatar('left'));
  });
  expect(store.getState().maze.avatar.x).toBe(2);
});