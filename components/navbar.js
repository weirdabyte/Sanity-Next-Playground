/** @format */
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import DropDownMenu from './dropdown';

export default function Navbar() {
  return (
    <nav className='bg-white shadow-lg'>
      <div className='max-w-6x1 mx-auto'>
        <div>
          <div className='flex justify-between mr-2'>
            <div>
              <div className='flex'>
                <Link href='/'>
                  <img
                    src='/logo-pyramid.jpeg'
                    alt='Logo of weridabyte - text over pink background'
                    className='object-fit object-bottom h-32 w-full shadow-lg rounded-lg cursor-pointer'
                  />
                </Link>
                <div>
                  <div className='md:flex mt-3 items-center hidden space-x-3'>
                    <Link href='/'>
                      <a className='navlink'>Home</a>
                    </Link>
                    <Link href='/work'>
                      <a className='navlink'>Work</a>
                    </Link>
                    <Link href='/sports'>
                      <a className='navlink'>Sports</a>
                    </Link>
                    <Link href='/fun'>
                      <a className='navlink'>Fun</a>
                    </Link>
                    <Link href='/kitchen'>
                      <a className='navlink'>Kitchen</a>
                    </Link>
                    <Link href='/madness'>
                      <a className='navlink'>Madness</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex'>
              <div>
                <div>
                  <DropDownMenu />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
