import { FC } from 'react';

import PostItem from '../post-item';
import { postType } from 'shared/postType';

interface PostsGridProps {
  posts: postType[];
}

const PostsGrid: FC<PostsGridProps> = ({ posts }) => {
  return (
    <ul className="grid grid-cols-[repeat(auto-fill,_minmax(20rem,_1fr))] content-center gap-6">
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
};

export default PostsGrid;
