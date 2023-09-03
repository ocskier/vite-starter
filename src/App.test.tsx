import { render, screen, userEvent } from '@testing';
import App from '@app';

describe('App', () => {
  it('renders headline', () => {
    render(<App />);
    const headline = screen.getByText(
      /Click on the Vite and React logos to learn more/i,
    );
    expect(headline).toBeInTheDocument();
  });
  it('renders the correct count', async () => {
    render(<App />);
    const clickBtn = screen.getByText(/count is/i);
    await userEvent.click(clickBtn);
    expect(clickBtn.textContent).toBe('count is 1');
  });
});
