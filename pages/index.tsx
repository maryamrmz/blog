import type { NextPage } from 'next';

import Hero from 'components/home/hero';
import FeaturedPosts from 'components/home/featured-posts';
import { getFeaturedPosts } from 'lib/posts-util';
import { postType } from 'shared/postType';

interface HomeProps {
  posts: postType[];
}

const Home: NextPage<HomeProps> = ({ posts }) => {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
};

export const getStaticProps = () => {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
};

export default Home;
