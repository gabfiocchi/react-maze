import { render, screen } from '@testing-library/react';
import GoCookCard from './GoCookCard';


test('renders react app', () => {
    render(<GoCookCard />);
    const title = screen.getByText(/hungry/i);

    expect(title).toBeInTheDocument();
    expect(title.textContent).toBe('Hungry?');
});
