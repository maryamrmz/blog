import { FC } from 'react';
import Image from 'next/image';

interface PostHeaderProps {
  title: string;
  image: string;
}

const PostHeader: FC<PostHeaderProps> = ({ title, image }) => {
  return (
    <header className="my-4 flex flex-col-reverse items-center justify-between gap-4 border-b-8 border-b-gray-100 pb-8 md:flex-row md:items-center">
      <h1 className="text-center text-4xl text-gray-500 md:text-left md:text-2xl">
        {title}
      </h1>
      <Image
        className="h-32 w-52 object-cover"
        src={image}
        alt={title}
        width={200}
        height={150}
      />
    </header>
  );
};

export default PostHeader;
