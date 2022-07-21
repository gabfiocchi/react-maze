import { render, screen, waitFor } from '@testing-library/react';
import Header from './Header';

test('Render Header', async () => {
    render(<Header />);
    const image = screen.getByRole('img') as HTMLImageElement;
    await waitFor(() => expect(image.src !== '').toBeTruthy());
});
