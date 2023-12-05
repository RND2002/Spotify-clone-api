import React from 'react'
import { IoMdHome } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import logo from "../assets/spotify-download-logo-30.png";
import { VscLibrary } from "react-icons/vsc";
import { LuPlus } from "react-icons/lu";
import { TbWorld } from "react-icons/tb";

const LeftLandingPage = () => {
  return (
    <div>
        
        <div className="     h-56 bg-gray-900 shadow-lg border border-gray-800 p-4 m-4 rounded-lg">
          <div className="flex">
            <span>
              <img className="h-8 ml-4 mt-2   " src={logo} alt="" />
            </span>
            <span className="text-white font-bold text-lg mt-2">Spotify</span>
          </div>
          <div className="flex mt-4">
            <span className="ml-4">
              <IoMdHome style={{ fontSize: "2.5em", color: "white" }} />
            </span>
            <span className="ml-5 mt-2 text-white font-bold text-lg">Home</span>
          </div>
          <div className="flex mt-4">
            <span className="ml-4">
              <IoSearch style={{ fontSize: "2.5em", color: "white" }} />
            </span>
            <span className="ml-5 mt-2 text-white font-bold text-lg">
              Search
            </span>
          </div>
        </div>

        <div className="h-24 bg-gray-900 shadow-lg border border-gray-800 p-4 m-4 rounded-lg">
          <div className="flex mt-3">
            <span className="ml-4">
              <VscLibrary style={{ fontSize: "2.5em", color: "white" }} />
            </span>
            <span className="ml-5 mt-2 text-white font-bold text-lg">
              Your Library
            </span>
            <span className="ml-32 mt-2">
              <LuPlus style={{ fontSize: "1.5em", color: "white" }} />
            </span>
          </div>
        </div>
        <main className="flex flex-row ">
          <div className="w-1/3 h-full flex max-h-screen overflow-y-auto flex-col flex-grow">
            <div
              className="h-52  shadow-lg  p-4  overflow-y-auto pr-4"
              style={{ scrollbarColor: "black", scrollbarWidth: "none" }}
            >
              <div className="h-36 bg-gray-900 shadow-lg border border-gray-800 p-4  rounded-lg">
                <div className=" ">
                  <span className="text-white font-semibold text-lg">
                    Create Your First Playlist
                  </span>
                </div>
                <div className="mt-1 ">
                  <span className="text-white font-semibold text-sm">
                    It's easy we will help you
                  </span>
                </div>
                <div className="mt-4">
                  <button class="bg-white hover:bg-slate-200 text-black font-bold py-2 px-4 rounded-full">
                    Create Playlist
                  </button>
                </div>
              </div>
              <div className="h-36 bg-gray-900 shadow-lg border border-gray-800 p-4 mt-4 rounded-lg">
                <div className=" ">
                  <span className="text-white font-semibold text-lg">
                    Let's find some podcast to follow
                  </span>
                </div>
                <div className="mt-1 ">
                  <span className="text-white font-semibold text-sm">
                    We will keep you updated on new episodes
                  </span>
                </div>
                <div className="mt-4">
                  <button class="bg-white hover:bg-slate-200 text-black font-bold py-2 px-4 rounded-full">
                    Browse Podcasts
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
        <div>
          <div className="flex justify-evenly mt-8">
            <span className="text-white font-normal text-sm">Legal</span>
            <span className="text-white font-normal text-sm">
              privacy Center
            </span>
            <span className="text-white font-normal text-sm">
              Privacy policy
            </span>
            <span className="text-white font-normal text-sm">Cookies</span>
          </div>
          <div className="flex mt-4">
            <span className="text-white font-normal text-sm ml-8">
              About ads
            </span>
            <span className="text-white font-normal text-sm ml-4">
              Accessibility
            </span>
          </div>
          <div className="mt-4">
            <span className="text-white font-normal text-sm ml-8">Cookies</span>
          </div>
        </div>
        <div className="mt-6 ml-5 flex justify-items-center bg-black border border-white rounded-full w-32">
          <div className="ml-2 mt-1">
            <span>
              <TbWorld style={{ fontSize: "2em", color: "white" }} />
            </span>
          </div>
          <div>
            <button class=" hover:bg-slate-200 text-white font-bold mt-2 text-md ml-2 ">
              English
            </button>
          </div>
        </div>
      </div>
    
  )
}

export default LeftLandingPage