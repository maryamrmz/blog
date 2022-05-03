import { FC } from 'react';
import Image from 'next/image';

const Hero: FC = () => {
  return (
    <section className="w-full bg-gradient-to-t from-gray-500 to-gray-800 py-8 text-center">
      <div className="m-auto h-72 w-72 overflow-hidden rounded-[50%]">
        <Image
          src="/images/site/avatar.jpg"
          alt="An image showing Maryam"
          width={300}
          height={300}
          className="h-full w-full object-cover object-top"
        />
      </div>
      <h1 className="my-6 text-4xl text-gray-300">Hi, I'm Maryam</h1>
      <p className="m-auto w-11/12 max-w-2xl text-lg text-gray-200">
        I blog about Front-end Web Development
      </p>
    </section>
  );
};

export default Hero;
