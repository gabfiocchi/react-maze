import { fireEvent, queryByAttribute, render } from '@testing-library/react';
import Pad from './Pad';

const getById = queryByAttribute.bind(null, 'id');


test('Pad initial state', () => {
    const view = render(<Pad />);

    expect(getById(view.container, 'ArrowUp')).toBeInTheDocument();
    expect(getById(view.container, 'ArrowLeft')).toBeInTheDocument();
    expect(getById(view.container, 'ArrowRight')).toBeInTheDocument();
    expect(getById(view.container, 'ArrowDown')).toBeInTheDocument();
    // TODO: add dispatch mock test?
    // TODO: add MazeRow component rendered?
});

test('Pad press button', () => {
    const dispatchEventSpy = jest.spyOn(window, 'dispatchEvent');

    const view = render(<Pad />)

    fireEvent.click(getById(view.container, 'ArrowUp') as Element);
    fireEvent.click(getById(view.container, 'ArrowLeft') as Element);
    fireEvent.click(getById(view.container, 'ArrowRight') as Element);
    fireEvent.click(getById(view.container, 'ArrowDown') as Element);

    expect(dispatchEventSpy).toHaveBeenCalledTimes(4);
    expect(dispatchEventSpy.mock.calls[0][0].type).toBe('keydown');
});