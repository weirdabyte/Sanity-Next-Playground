/** @format */
import { sanityClient, urlFor } from '../../lib/sanity';
import Link from 'next/link';
import React from 'react';

const kitchenQuery = `*[_type == "recipe"] {
  _id,
  name,
  slug,
  mainImage
}`;

export default function Kitchen({ kitchen }) {
  return (
    <main>
      <div className='text-center pt-8 px-4'>
        <h1 className='text-6xl text-gray-900 font-extra-bold tracking-tight'>
          Welcome to
          <span className='block text-amber-700'>le kitchen.</span>
        </h1>
      </div>
      <ul
        className='mt-28 px-5 mx-auto sm:max-w-2x1 md:mt-36 
      lg:mt-32 lg:max-w-5x1 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-12 lg-space-y-0'
      >
        {kitchen?.length > 0 &&
          kitchen.map((kitchen) => (
            <li key={kitchen._id}>
              <div class='space-y-4 sm:grid sm:grid-col-3 sm-gap-6 sm-space-y-0 lg:gap-8'>
                <Link href={`/kitchen/${kitchen.slug.current}`}>
                  <a>
                    <div className='aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-2'>
                      <img
                        src={urlFor(kitchen.mainImage).url()}
                        alt='Recipe'
                        className='object-cover object-bottom shadow-lg rounded-lg sm:object-center'
                      />
                    </div>

                    <div clasname='space-y-4 sm:col-span-2'>
                      <div className='text-lg text-center leading-6 font-medium space-y-1'>
                        <h3 className='text-3xl text-amber-700'>
                          {kitchen.name}
                        </h3>
                        <p classNameP='text-base'>bla bla bla..</p>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            </li>
          ))}
      </ul>
    </main>
  );
}

export async function getStaticProps() {
  const kitchen = await sanityClient.fetch(kitchenQuery);

  return { props: { kitchen } };
}
