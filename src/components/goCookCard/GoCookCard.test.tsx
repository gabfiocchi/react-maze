import { render, screen } from '@testing-library/react';
import GoCookCard from './GoCookCard';


test('GoCookCard render', () => {
    render(<GoCookCard />);
    const title = screen.getByText(/hungry/i);

    expect(title).toBeInTheDocument();
    expect(title.textContent).toBe('Hungry?');
});
