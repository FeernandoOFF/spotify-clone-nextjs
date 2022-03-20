import {
  BookFilled,
  ClockCircleFilled,
  CompassFilled,
  CompassOutlined,
  CustomerServiceFilled,
  HeartFilled,
  HomeFilled,
  NotificationFilled,
  UserOutlined,
} from '@ant-design/icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

type Props = {};

function Sidebar({}: Props) {
  return (
    <aside className="h-full bg-accent dark:bg-accent-darkMode w-[17vw] shadow-lg flex-col flex ">
      <Logo />
      <div className="menu sidebar-section">
        <span className="menu-title">Menu</span>
        <nav className="pt-3 flex flex-col">
          <LinkComponent title="Home" href="/" iconComponent={<HomeFilled />} />
          <LinkComponent
            title="Albums"
            href="/albums"
            iconComponent={<BookFilled />}
          />
          <LinkComponent
            title="Artist"
            href="/artist"
            iconComponent={<UserOutlined />}
          />
          <LinkComponent
            title="Discover"
            href="/discover"
            iconComponent={<CompassFilled />}
          />
        </nav>
      </div>
      <div className="menu sidebar-section">
        <span className="menu-title">Playlist</span>
        <nav className="pt-3 flex-col flex">
          <LinkComponent
            title="Recent"
            href="/recent"
            iconComponent={<ClockCircleFilled />}
          />
          <LinkComponent
            title="Favorites"
            href="/favorites"
            iconComponent={<HeartFilled />}
          />
          <LinkComponent
            title="MyPop"
            href="/me"
            iconComponent={<CustomerServiceFilled />}
          />
          <LinkComponent
            title="Hits Update"
            href="/hits"
            iconComponent={<NotificationFilled />}
          />
        </nav>
      </div>
    </aside>
  );
}

function LinkComponent({
  title,
  href,
  iconComponent,
}: {
  title: string;
  href: string;
  iconComponent?: any;
}) {
  const router = useRouter();
  return (
    <span
      className={`${
        router.pathname == href ? 'textGradient link-active' : ''
      } font-bold  text-base pl-6 my-4 `}
    >
      <Link href={href}>
        <p className="flex items-center cursor-pointer">
          <span
            className={`${
              router.pathname == href && 'text-indigo-500'
            } mr-3 flex items-center `}
          >
            {iconComponent}
          </span>
          {title}
        </p>
      </Link>
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
