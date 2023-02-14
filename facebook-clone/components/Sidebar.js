import Image from 'next/image'
import React from 'react'
import { ImUsers, ImUser } from 'react-icons/im'
import SidebarItem from './SidebarItem'
import {
  MdGroups,
  MdOutlineOndemandVideo,
  MdOutlineExpandMore,
} from 'react-icons/md'
import { AiOutlineShop } from 'react-icons/ai'
import { BsStopwatch } from 'react-icons/bs'

const Sidebar = () => {
  return (
    <div className="hidden lg:inline-flex flex-col py-2 pl-2 max-w-xl lg:min-w-[302px]">
      <div className="flex items-center space-x-2 py-3 pl-4 hover:bg-gray-200 rounded-l-xl cursor-pointer">
        <ImUser
          className="h-8 w-8 text-blue-500 cursor-pointer"
          height={40}
          width40
        />
        <p className="hidden sm:inline-flex font-medium">Rudney</p>
      </div>
      <SidebarItem Icon={ImUsers} value="Friends" />
      <SidebarItem Icon={MdGroups} value="Groups" />
      <SidebarItem Icon={AiOutlineShop} value="Marketplace" />
      <SidebarItem Icon={MdOutlineOndemandVideo} value="Watch" />
      <SidebarItem Icon={BsStopwatch} value="Memories" />
      <SidebarItem Icon={MdOutlineExpandMore} value="See More" />
    </div>
  )
}

export default Sidebar
