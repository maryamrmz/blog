import { FC } from 'react';
import ReactMarkdown from 'react-markdown';

import PostHeader from './post-header';

const DUMMY_POSTS = {
  title: 'NextJS',
  image: 'next.png',
  excerpt: 'NextJS is a React framework for production',
  date: '2022-04-22',
  slug: 'nextJS',
  content: '* This is',
};

const PostContent: FC = () => {
  const { title, image, slug, content } = DUMMY_POSTS;

  const imagePath = `/images/posts/${slug}/${image}`;

  return (
    <article className="my-8 mx-auto w-11/12 max-w-5xl rounded-md p-4 text-lg md:p-8">
      <PostHeader title={title} image={imagePath} />
      <ReactMarkdown>{content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
