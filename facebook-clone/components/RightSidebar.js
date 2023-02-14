import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { CgMoreAlt } from 'react-icons/cg'
import { RiVideoAddFill } from 'react-icons/ri'
import Contacts from './Contacts'

const RightSidebar = () => {
  return (
    <div className="hidden md:inline-flex flex-col pt-4 max-w-xl md:min-w-[200px] lg:min-w-[250px]">
      <div className="  hidden md:inline-flex flex-col pt-4 max-w-xl md:min-w-[200px] lg:min-w-[250px]">
        <div className="flex items-center text-gray-500">
          <p className="flex text-lg font-semibold flex-grow">Contacts</p>
          <div className="flex space-x-1 px-2">
            <div className="rounded-full p-2 hover:bg-gray-200 cursor-pointer">
              <RiVideoAddFill />
            </div>
            <div className="rounded-full p-2 hover:bg-gray-200 cursor-pointer">
              <BiSearch />
            </div>
            <div className="rounded-full p-2 hover:bg-gray-200 cursor-pointer">
              <CgMoreAlt />
            </div>
          </div>
        </div>
      </div>
      <Contacts
        src="https://mmodnaya.ru/wp-content/uploads/2021/04/foto-prirody.jpg"
        name="Rudney"
        status="online"
      />
      <Contacts
        src="https://fb.ru/media/i/8/4/9/0/i/8490.jpg"
        name="Bob"
        status="offline"
      />
      <Contacts
        src="https://salonfifi.ru/wp-content/uploads/4/c/8/4c85e79df4e324d1f2a61421836cedb8.jpeg"
        name="Tata"
        status="offline"
      />
      <Contacts
        src="https://lisa.ru/wp-content/uploads/2018/07/beautiful-beauty-blurred-background-1239291.jpg"
        name="Abou"
        status="online"
      />
    </div>
  )
}

export default RightSidebar
