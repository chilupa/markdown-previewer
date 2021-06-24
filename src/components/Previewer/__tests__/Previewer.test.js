import { fireEvent, render } from '@testing-library/react';
import Previewer from '../Previewer';

describe('Previewer', () => {
  it('should handle onInputChange function', () => {
    const { getByTestId } = render(<Previewer />);
    const textAreaInput = getByTestId('markdownInput').children[0];
    fireEvent.change(textAreaInput, { target: { value: 'abc' } });
    expect(textAreaInput.value).toBe('abc');
  });
});
