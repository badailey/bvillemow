import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'menu',
    title: 'Menu',
    type: 'document',
    fields: [
      defineField({
        name: 'meal',
        title: 'Meal',
        type: 'string',
      }),
      defineField({
        name: 'publishedAt',
        title: 'Published at',
        type: 'datetime',
      }),
      defineField({
        name: 'body',
        title: 'Body',
        type: 'blockContent',
      }),
    ],
  })
  
