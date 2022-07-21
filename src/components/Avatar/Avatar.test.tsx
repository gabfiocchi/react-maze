import { render, screen, waitFor } from '@testing-library/react';
import Avatar from './Avatar';

test('Render Avatar', async () => {
    render(<Avatar />);
    const image = screen.getByRole('img') as HTMLImageElement;
    await waitFor(() => expect(image.src !== '').toBeTruthy());
});
