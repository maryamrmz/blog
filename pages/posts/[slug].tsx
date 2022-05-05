import { FC } from 'react';

import PostContent from 'components/posts/post-detail/post-content';
import { getPostData, getPostsFiles } from 'lib/posts-util';
import { postType } from 'shared/postType';

interface PostDetailProps {
  post: postType;
}

const PostDetail: FC<PostDetailProps> = ({ post }) => {
  return <PostContent post={post} />;
};

export const getStaticProps = (context: { params: { slug: string } }) => {
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
};

export const getStaticPaths = () => {
  const postFilenames = getPostsFiles();

  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ''));

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
};

export default PostDetail;
