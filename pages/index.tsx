import type { NextPage } from 'next';

import Hero from 'components/home/hero';
import FeaturedPosts from 'components/home/featured-posts';

const DUMMY_POSTS = [
  {
    title: 'NextJS',
    image: 'next.png',
    excerpt: 'NextJS is a React framework for production',
    date: '2022-04-22',
    slug: 'nextJS',
  },
];

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </>
  );
};

export default Home;
