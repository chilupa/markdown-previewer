import { render } from '@testing-library/react';
import Heading from '../Heading';

describe('Heading', () => {
  it('should render Heading component', () => {
    const props = { children: 'Something' };
    const { getByText } = render(<Heading {...props} />);
    expect(getByText('Something')).toBeInTheDocument();
  });
});
