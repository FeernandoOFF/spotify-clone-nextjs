import * as ScrollArea from '@radix-ui/react-scroll-area';
import Sidebar from '@/components/Sidebar';
import { AutoComplete, Switch } from 'antd';
import Search from 'antd/lib/input/Search';
import { NextSeo } from 'next-seo';
import { useState } from 'react';
import { useStore } from 'utils/store';
import {
  ArrowRightOutlined,
  CaretRightOutlined,
  ClockCircleOutlined,
  CrownFilled,
  HeartOutlined,
  MenuOutlined,
  StarFilled,
  UserOutlined,
} from '@ant-design/icons';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <NextSeo title="Home" />

      <MainComponent />
    </>
  );
}
function MainComponent() {
  const toggleDarkMode = useStore((store) => store.toggleDarkMode);

  return (
    <div className="flex flex-col min-h-[120vh]  w-[60vw]">
      <div className="search flex w-full min-w-[900px] justify-between px-8 my-8">
        <input
          type="input"
          className="w-full max-w-[700px] min-w-[500px] shadow-lg font-medium rounded-full p-5 px-8 outline-none dark:bg-accent-darkMode"
          placeholder="Search.."
        />
        <div className="flex switch items-center h-full min-w-[120px] justify-between">
          <p className="m-0">Dark Mode</p>
          <Switch onChange={() => toggleDarkMode()} />
        </div>
      </div>

      <section className="content">
        <article className="events flex justify-between flex-nowrap overflow-x-scroll scroll-area">
          <EventItem />
          <EventItem />
          <EventItem />
        </article>
        <div className="ml-8">
          <article className="top-collections my-[5vh]">
            <ShowMoreTitle
              title="Top Collections"
              href="/"
              icon={<StarFilled />}
            />
            <div className="collection-container w-full flex justify-around">
              <CollectionItem />
              <CollectionItem />
              <CollectionItem />
              <CollectionItem />
              <CollectionItem />
            </div>
          </article>
          <article className="trending-music-container">
            <ShowMoreTitle
              title="100 Trending Music"
              href="/"
              icon={<CrownFilled />}
            />
            <div className="song-container flex flex-col items-center mb-4">
              <SongItem />
              <SongItem />
              <SongItem />
              <SongItem />
              <SongItem />
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
function ShowMoreTitle({ title, href, icon }: any) {
  return (
    <div className="show-more-title flex justify-between items-center">
      <h2 className="my-5 font-semibold text-black dark:text-white text-2xl flex">
        <span className="text-indigo-500 flex items-center mr-3">{icon}</span>
        {title}
      </h2>
      <Link href={href} passHref>
        <span className="text-indigo-500 text-lg font-medium flex items-center cursor-pointer">
          <b className="mr-4 text-base">Show More</b>
          <ArrowRightOutlined />
        </span>
      </Link>
    </div>
  );
}

function SongItem() {
  return (
    <div className="song-item w-11/12  min-h-[70px] flex items-center justify-start hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg px-2 my-2">
      <div className="w-1/2 flex items-center">
        <div className="mr-4 text-lg">
          <span className="">#1</span>
          {/* <span className="hidden hover:block">
            <CaretRightOutlined />
          </span> */}
        </div>
        <div className="w-[50px] h-[50px] rounded-lg bg-gray-500  mr-4"></div>
        <h4 className="text-lg font-semibold dark:text-backgroundColor">
          Easy On Me
        </h4>
      </div>
      <div className="w-2/3 flex justify-start items-center justify-between">
        <span className="w-2/4 font-medium text-md flex items-center">
          <b className="flex items-center mr-3">
            <UserOutlined />
          </b>
          Adele
        </span>
        <div className="w-1/3 flex justify-between">
          <span className="flex items-center cursor-pointer">
            <b className="flex items-center mr-3">
              <ClockCircleOutlined />
            </b>
            3:50
          </span>
          <span className="flex items-center cursor-pointer">
            <HeartOutlined />
          </span>
          <span className="flex items-center pr-4 cursor-pointer">
            <MenuOutlined />
          </span>
        </div>
      </div>
    </div>
  );
}

function EventItem() {
  return (
    <div className="event-card inline-block bg-gray-400 min-h-[300px] min-w-[700px] rounded-lg mx-4"></div>
  );
}

function CollectionItem() {
  return (
    <div className="collection my-8 mr-8">
      <div className="w-[170px] h-[170px] bg-gray-400 rounded-md"></div>
      <div>
        <h3 className="mt-3 text-black dark:text-white font-semibold">
          Megamix Music
        </h3>
        <span className="text-textColor font-medium">EDM</span>
      </div>
    </div>
  );
}
