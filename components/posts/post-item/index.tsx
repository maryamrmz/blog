import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { postType } from 'shared/postType';

interface PostsItemProps {
  post: postType;
}

const PostsItem: FC<PostsItemProps> = ({ post }) => {
  const { title, slug, image, excerpt, date } = post;
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const imagePath = `/images/posts/${slug}/${image}`;
  const linkPath = `/posts/${slug}`;

  return (
    <li className="bg-gray-800 text-center">
      <Link href={linkPath}>
        <a className="text-gray-100">
          <div className="max-h-[20rem] w-full overflow-hidden">
            <Image
              src={imagePath}
              alt={title}
              width={300}
              height={200}
              layout="responsive"
              className="object-cover"
            />
          </div>
          <div className="p-8">
            <h3 className="my-2 text-xl">{title}</h3>
            <time className="italic text-gray-300">{formattedDate}</time>
            <p className="text-lg">{excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  );
};

export default PostsItem;
