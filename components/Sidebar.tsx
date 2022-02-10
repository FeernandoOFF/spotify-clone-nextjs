import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

type Props = {};

function Sidebar({}: Props) {
  return (
    <aside className="h-full bg-white dark:bg-gray-800 w-[15vw] shadow-lg flex-col flex ">
      <Logo />
      <div className="menu sidebar-section">
        <span className="menu-title">Menu</span>
        <nav className="pt-3 flex flex-col">
          <LinkComponent title="Home" href="/" />
          <LinkComponent title="Albums" href="/albums" />
          <LinkComponent title="Artist" href="/artist" />
          <LinkComponent title="Discover" href="/discover" />
        </nav>
      </div>
      <div className="menu sidebar-section">
        <span className="menu-title">Playlist</span>
        <nav className="pt-3 flex-col flex">
          <LinkComponent title="Recent" href="/recent" />
          <LinkComponent title="Favorites" href="/favorites" />
          <LinkComponent title="MyPop" href="/me" />
          <LinkComponent title="Hits Update" href="/hits" />
        </nav>
      </div>
    </aside>
  );
}

function LinkComponent({ title, href }: { title: string; href: string }) {
  const router = useRouter();
  return (
    <span
      className={`${
        router.pathname == href ? 'textGradient link-active' : ''
      } font-bold  text-base pl-6 my-4`}
    >
      <Link href={href}>{title}</Link>
    </span>
  );
}

function Logo() {
  return (
    <div className="logo my-10 text-center font-bold">
      <h1 className="textGradient text-xl pointer-events-none">SpotifyClone</h1>
    </div>
  );
}

export default Sidebar;
