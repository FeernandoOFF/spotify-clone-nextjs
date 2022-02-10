import Sidebar from '@/components/Sidebar';
import { NextSeo } from 'next-seo';
import { useState } from 'react';

export default function Home() {
  return (
    <>
      <NextSeo title="Home" />

      <MainComponent />
    </>
  );
}
function MainComponent() {
  return (
    <div className="flex flex-col h-[120vh]  w-full">
      <div className="search flex w-full justify-around">
        <input
          type="text"
          placeholder="Search..."
          className="w-10/11 bg-white rounded-md m-4 p-4 shadow-md"
        />
        <div className="flex switch">
          <p>Dark Mode</p>
          <input type="checkbox" name="" id="" />
        </div>
      </div>

      <div className="artist">
        <h1>Welcome</h1>
      </div>
    </div>
  );
}
