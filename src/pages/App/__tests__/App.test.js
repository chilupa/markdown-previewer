import { fireEvent, render } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  it('should render App component', () => {
    const { getByText } = render(<App />);
    expect(getByText('Markdown')).toBeInTheDocument();
    expect(getByText('Preview')).toBeInTheDocument();
  });

  it('should handle onInputChange function', () => {
    const { getByTestId } = render(<App />);
    const textAreaInput = getByTestId('markdownInput').children[0];
    fireEvent.change(textAreaInput, { target: { value: 'abc' } });
    expect(textAreaInput.value).toBe('abc');
  });
});
