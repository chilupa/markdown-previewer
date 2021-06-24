import { render } from '@testing-library/react';
import MarkdownInput from '../MarkdownInput';

describe('MarkdownInput', () => {
  it('should render MarkdownInput component', () => {
    const props = {
      onInputChange: jest.fn(),
    };
    const { container } = render(<MarkdownInput {...props} />);
    expect(container.children['0'].type).toBe('textarea');
  });
});
