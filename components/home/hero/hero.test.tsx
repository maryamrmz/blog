import { render } from '@testing-library/react';

import Hero from '.';

test('should render right image', () => {
  const { getByRole } = render(<Hero />);
  const img = getByRole('img');
  expect(img).toHaveAttribute('src');
  expect(img).toHaveAttribute('alt');
  expect(img).toBeInTheDocument();
});
