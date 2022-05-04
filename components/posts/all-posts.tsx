import { FC } from 'react';

import PostsGrid from './posts-grid';
import { postType } from 'shared/postType';

interface AllPostsProps {
  posts: postType[];
}

const AllPosts: FC<AllPostsProps> = ({ posts }) => {
  return (
    <section className="my-16 mx-auto w-11/12 max-w-5xl">
      <h1 className="mb-16 text-center text-2xl text-gray-800 md:text-4xl">
        All Posts
      </h1>
      <PostsGrid posts={posts} />
    </section>
  );
};

export default AllPosts;
