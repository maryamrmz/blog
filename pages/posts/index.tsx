import { FC } from 'react';

import AllPosts from 'components/posts/all-posts';
import { getAllPosts } from 'lib/posts-util';
import { postType } from 'shared/postType';

interface AllPostsPageProps {
  posts: postType[];
}

const AllPostsPage: FC<AllPostsPageProps> = ({ posts }) => {
  return <AllPosts posts={posts} />;
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
