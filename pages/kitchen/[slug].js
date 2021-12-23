/** @format */
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/router';

import {
  sanityClient,
  urlFor,
  usePreviewSubscription,
  PortableText,
} from '../../lib/sanity';

const kitchenQuery = `*[_type == "recipe" && slug.current == $slug][0]{
    _id,
    name,
    slug,
    mainImage,
    ingredient[]{
        _key,
        unit,
        wholeNumber,
        fraction,
        ingredient->{
            name
        }
    },
    instructions,
    likes
}`;

export default function OneRecipe({ data, preview }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  const { data: recipe } = usePreviewSubscription(kitchenQuery, {
    params: { slug: data.recipe?.slug.current },
    initialData: data,
    enabled: preview,
  });

  const [likes, setLikes] = useState(data?.kitchen?.likes);

  const addLike = async () => {
    const res = await fetch('/api/handle-like', {
      method: 'POST',
      body: JSON.stringify({ _id: kitchen._id }),
    }).catch((error) => console.log(error));

    const data = await res.json();

    setLikes(data.likes);
  };

  const { kitchen } = data;

  return (
    <div className=''>
      <ul>
        <div className=''>
          <img
            src={urlFor(kitchen?.mainImage).url()}
            alt={kitchen.name}
            className=''
          />
        </div>
        <div className=''>
          <h1 className=''>{kitchen.name}</h1>
        </div>
        <div className=''>
          <button onClick={addLike} className=''>
            {likes} 💛
          </button>
        </div>
        {kitchen.ingredient?.map((ingredient) => (
          <li key={ingredient._key} className=''>
            {ingredient?.wholeNumber} {ingredient?.fraction} {ingredient?.unit}{' '}
            of {ingredient?.ingredient?.name}
          </li>
        ))}
      </ul>

      <PortableText blocks={kitchen?.instructions} />
    </div>
  );
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(
    `*[_type == "recipe" && defined(slug.current)]{
          "params": {
              "slug": slug.current
          }
      }`
  );
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  const kitchen = await sanityClient.fetch(kitchenQuery, { slug });

  return { props: { data: { kitchen }, preview: true } };
}
