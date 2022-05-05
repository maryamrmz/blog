import { FC } from 'react';
import ReactMarkdown from 'react-markdown';

import PostHeader from './post-header';
import { postType } from 'shared/postType';

interface PostContentProps {
  post: postType;
}

const PostContent: FC<PostContentProps> = ({ post }) => {
  const { title, image, slug, content } = post;

  const imagePath = `/images/posts/${slug}/${image}`;

  return (
    <article className="my-8 mx-auto w-11/12 max-w-5xl rounded-md p-4 text-lg md:p-8">
      <PostHeader title={title} image={imagePath} />
      {content && <ReactMarkdown>{content}</ReactMarkdown>}
    </article>
  );
};

export default PostContent;
