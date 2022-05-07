import { FC } from 'react';
import Head from 'next/head';

import AllPosts from 'components/posts/all-posts';
import { getAllPosts } from 'lib/posts-util';
import { postType } from 'shared/postType';

interface AllPostsPageProps {
  posts: postType[];
}

const AllPostsPage: FC<AllPostsPageProps> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>All Posts</title>
        <meta
          name="description"
          content="A list of all programming-related tutorials and posts!"
        />
      </Head>
      <AllPosts posts={posts} />;
    </>
  );
};

export const getStaticProps = () => {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
};

export default AllPostsPage;
