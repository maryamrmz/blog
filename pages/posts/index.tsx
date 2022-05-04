import { FC } from 'react';

import AllPosts from 'components/posts/all-posts';

const DUMMY_POSTS = [
  {
    title: 'NextJS',
    image: 'next.png',
    excerpt: 'NextJS is a React framework for production',
    date: '2022-04-22',
    slug: 'nextJS',
  },
];

const AllPostsPage: FC = () => {
  return <AllPosts posts={DUMMY_POSTS} />;
};

export default AllPostsPage;
