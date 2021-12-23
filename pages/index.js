/** @format */
import { sanityClient, urlFor } from '../lib/sanity';

const kitchenQuery = `*[_type == "recipe"] {
  _id,
  name,
  slug,
  mainImage
}`;

export default function Home() {
  return (
    <body className='bg-gray-50 p-0'>
      <div className='h-80'>
        <img
          src='/sanity.jpeg'
          alt='sanity-next-tailwind-logo'
          className='w-full h-full object-cover'
        />
      </div>
      <div className='text-center pt-8 px-4'>
        <h1 className='text-4xl text-gray-900 font-extrabold tracking-tight'>
          Welcome to the
          <span className='block text-amber-800'>Playground</span>
        </h1>
        <p className='text-lg text-gray-500 mt-3 max-w-md mx-auto'>
          This is where I hone my skills and practice new stuff.
        </p>
      </div>
    </body>
  );
}

export async function getStaticProps() {
  const kitchen = await sanityClient.fetch(kitchenQuery);

  return { props: { kitchen } };
}
