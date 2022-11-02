import React from "react";

const HomeStats = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-24 row-gap-8 lg:grid-cols-5">
        <div className="grid gap-8 lg:col-span-2">
          <div>
            <p className="mb-2 text-lg font-bold">Old World</p>
            <p className="text-gray-700">
              Remember,Happiness a Way of Travel... Not A Destination....
            </p>
          </div>
          <div>
            <p className="mb-2 text-lg font-bold">New Thought</p>
            <p className="text-gray-700">
              Riding a bike can be a thrilling and wonderful experience, it can
              symbolize control, can put your mind at ease, and on a more
              practical note, a bike can easily get you out of any traffic jam.
              Plus, imagine all the attention you get if you are riding a great
              vintage bike!
            </p>
          </div>
        </div>
        <div className="grid border divide-y rounded lg:col-span-3 sm:grid-cols-2 sm:divide-y-0 sm:divide-x">
          <div className="flex flex-col justify-between p-10">
            <div>
              <p className="text-lg font-semibold text-gray-800 sm:text-base">
                Auction Funds Raised
              </p>
              <p className="text-2xl font-bold text-deep-purple-accent-400 sm:text-xl">
                $84 000 000
              </p>
            </div>
            <div>
              <p className="text-lg font-semibold text-gray-800 sm:text-base">
                Bikes
              </p>
              <p className="text-2xl font-bold text-deep-purple-accent-400 sm:text-xl">
                Every Vintage types
              </p>
            </div>
            <div>
              <p className="text-lg font-semibold text-gray-800 sm:text-base">
                Daily Visit
              </p>
              <p className="text-2xl font-bold text-deep-purple-accent-400 sm:text-xl">
                186 +
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between p-10">
            <div>
              <p className="text-lg font-semibold text-gray-800 sm:text-base">
                Users
              </p>
              <p className="text-2xl font-bold text-deep-purple-accent-400 sm:text-xl">
                86K
              </p>
            </div>
            <div>
              <p className="text-lg font-semibold text-gray-800 sm:text-base">
                Sells
              </p>
              <p className="text-2xl font-bold text-deep-purple-accent-400 sm:text-xl">
                917 000
              </p>
            </div>
            <div>
              <p className="text-lg font-semibold text-gray-800 sm:text-base">
                Subscribers
              </p>
              <p className="text-2xl font-bold text-deep-purple-accent-400 sm:text-xl">
                213K
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeStats;
