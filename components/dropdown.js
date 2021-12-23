/** @format */

import Link from 'next/link';
import React from 'react';
import { Menu, Transition } from '@headlessui/react';

export default function DropDownMenu() {
  return (
    <div className='bg-white flex justify-end-p-4 mt-6 md:hidden'>
      <Menu as='div' className='relative'>
        {({ open }) => (
          <React.Fragment>
            <Menu.Button
              class='block mt-4 text-lg justify-center w-full text-amber-700
                    rounded-md border border-amber-500 
                    shadow-lg px-4 py-2 bg-pink-50 font-medium 
                    focus:outline-none focus:ring-2 focus:ring-offset-2 
                    focus:ring-offset-gray-100 focus:ring-amber-500'
            >
              Menu
            </Menu.Button>
            <Transition
              show={open}
              enter='transform transition duration 100 ease-in'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='transform transition duration-75 ease-out'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Menu.Items
                className='origin-top-right absolute right-0 mt-2 w-56 
                rounded-md shadow-lg 
                bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 
              focus:ring-offset-gray-100 focus:ring-amber-500'
                static
              >
                <div className='py-1'>
                  <Menu.Item>
                    {({ active, disabled }) => (
                      <Link href='/'>
                        <a
                          className={`flex items-center border-2 rounded-md text-sm px-4 py-4 text-orange-600 bg-white font-semibold ${
                            disabled
                              ? 'text-gray-300'
                              : active
                              ? 'bg-orange-600 text-orange-50'
                              : 'text-orange-600'
                          }`}
                        >
                          Home
                        </a>
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item disabled>
                    {({ active, disabled }) => (
                      <Link href='/work'>
                        <a
                          className={`flex items-center border-2 rounded-md text-sm px-4 py-4 text-orange-600 bg-white font-semibold ${
                            disabled
                              ? 'text-gray-300'
                              : active
                              ? 'bg-orange-600 text-orange-50 border-orange-50'
                              : 'text-orange-600'
                          }`}
                        >
                          Work
                        </a>
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active, disabled }) => (
                      <Link href='/sports'>
                        <a
                          className={`flex items-center border-2 rounded-md text-sm px-4 py-4 text-orange-600 bg-white font-semibold ${
                            disabled
                              ? 'text-gray-300'
                              : active
                              ? 'bg-orange-600 text-orange-50 border-orange-50'
                              : 'text-orange-600'
                          }`}
                        >
                          Sports
                        </a>
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active, disabled }) => (
                      <Link href='/fun'>
                        <a
                          className={`flex items-center border-2 rounded-md text-sm px-4 py-4 text-orange-600 bg-white font-semibold ${
                            disabled
                              ? 'text-gray-300'
                              : active
                              ? 'bg-orange-600 text-orange-50 border-orange-50'
                              : 'text-orange-600'
                          }`}
                        >
                          Fun
                        </a>
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active, disabled }) => (
                      <Link href='/kitchen'>
                        <a
                          className={`flex items-center border-2 rounded-md text-sm px-4 py-4 text-orange-600 bg-white font-semibold ${
                            disabled
                              ? 'text-gray-300'
                              : active
                              ? 'bg-orange-600 text-orange-50 border-orange-50'
                              : 'text-orange-600'
                          }`}
                        >
                          Kitchen
                        </a>
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active, disabled }) => (
                      <Link href='/madness'>
                        <a
                          className={`flex items-center border-2 rounded-md text-sm px-4 py-4 text-orange-600 bg-white font-semibold ${
                            disabled
                              ? 'text-gray-300'
                              : active
                              ? 'bg-orange-600 text-orange-50 border-orange-50'
                              : 'text-orange-600'
                          }`}
                        >
                          Madness
                        </a>
                      </Link>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </React.Fragment>
        )}
      </Menu>
    </div>
  );
}
