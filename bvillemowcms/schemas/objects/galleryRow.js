import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'galleryRow',
  title: 'Gallery Row',
  type: 'object',
  fields: [
    defineField({
      name: 'images',
      type: 'array',
      title: 'Images',
      of: [{type: 'galleryImage'}],
      options: {
        layout: 'grid',
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      images: 'images',
      image: '.images.0.image',
    },
    prepare(selection) {
      const {images, image} = selection
      const pluralize = (word) => {
        ;`${word}${Object.keys(images).length > 1 ? 's' : ''}`
      }

      return {
        title: `Row of ${Object.keys(images).length} ${pluralize('image')}`,
        media: image,
      }
    },
  },
})
