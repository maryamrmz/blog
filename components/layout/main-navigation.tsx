import Link from 'next/link';
import { FC } from 'react';

import Logo from './logo';

const MainNavigation: FC = () => {
  return (
    <header className=" flex h-24 items-center justify-between bg-gray-800 px-4 text-gray-100">
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <nav>
        <ul className="flex items-baseline md:gap-2">
          <li className="mx-4">
            <Link href="/posts">Posts</Link>
          </li>
          <li className="mx-4">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
