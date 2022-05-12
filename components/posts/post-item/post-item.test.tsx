import { render } from '@testing-library/react';

import PostItem from '.';

const dummy_post = {
  title: 'dummy_title',
  image: '/dummy_image',
  excerpt: 'dummy_excerpt',
  date: 'October 20, 2020',
  slug: 'dummy_slug',
};

const { title, excerpt, date, slug } = dummy_post;

test('should render the right image', () => {
  const { getByText, getByRole } = render(<PostItem post={dummy_post} />);
  const img = getByRole('img');
  expect(img).toHaveAttribute('src');
  expect(img).toHaveAttribute('alt');
  expect(img).toBeInTheDocument();
  expect(getByText(title)).toBeInTheDocument();
  expect(getByText(excerpt)).toBeInTheDocument();
  expect(getByText(date)).toBeInTheDocument();
});
