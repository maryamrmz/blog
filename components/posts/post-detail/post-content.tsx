import { FC, ReactNode } from 'react';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import PostHeader from './post-header';
import { postType } from 'shared/postType';

interface PostContentProps {
  post: postType;
}

const PostContent: FC<PostContentProps> = ({ post }) => {
  const { title, image, slug, content } = post;

  const imagePath = `/images/posts/${slug}/${image}`;

  const customRenderers = {
    p({ node, children }: { node: any; children: ReactNode }) {
      if (node.children[0].tagName === 'img') {
        const image = node.children[0];

        return (
          <div className="my-8 mx-auto w-full max-w-2xl">
            <Image
              src={`/images/posts/${slug}/${image.properties.src}`}
              alt={image.properties.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }
      return <p>{children}</p>;
    },

    code({ className, children }: { className?: string; children?: any }) {
      const language = className?.split('-')[1]; // className is something like language-js => We need the "js" part here
      return (
        <SyntaxHighlighter
          style={atomDark}
          language={language}
          children={children}
        />
      );
    },
  };

  return (
    <article className="my-8 mx-auto w-11/12 max-w-5xl rounded-md p-4 text-lg md:p-8">
      <PostHeader title={title} image={imagePath} />
      {content && (
        <ReactMarkdown components={customRenderers}>{content}</ReactMarkdown>
      )}
    </article>
  );
};

export default PostContent;
