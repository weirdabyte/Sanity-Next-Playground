/** @format */

export default {
  name: 'chef',
  title: 'Chef',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Chefs/Recipe source name',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image of the chef/source',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [
        {
          title: 'block',
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          lists: [],
        },
      ],
    },
  ],
};
