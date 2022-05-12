import { render } from '@testing-library/react';

import PostHeader from '.';

const dummy_data = {
  title: 'dummy_title',
  image: '/dummy_image',
};

const { title, image } = dummy_data;

test('should render the right image', () => {
  const { getByText, getByRole } = render(
    <PostHeader title={title} image={image} />
  );
  const img = getByRole('img');
  expect(img).toHaveAttribute('src');
  expect(img).toHaveAttribute('alt');
  expect(img).toBeInTheDocument();
  expect(getByText(title)).toBeInTheDocument();
});
