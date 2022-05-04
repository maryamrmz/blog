import { FC } from 'react';

import PostGrid from 'components/posts/posts-grid';
import { postType } from 'shared/postType';

interface FeaturedPostsProps {
  posts: postType[];
}

const FeaturedPosts: FC<FeaturedPostsProps> = ({ posts }) => {
  return (
    <section className="my-16 mx-auto w-11/12 max-w-7xl">
      <h2 className="mb-16 text-center text-3xl text-gray-800 md:text-4xl">
        Featured Posts
      </h2>
      <PostGrid posts={posts} />
    </section>
  );
};

export default FeaturedPosts;
