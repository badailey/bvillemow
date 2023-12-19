import {defineField, defineType} from 'sanity'
import {RemoveIcon} from '@sanity/icons'

export const galleryNewRow = defineType({
  name: 'galleryNewRow',
  title: 'New Row',
  type: 'object',
  fields: [
    defineField({
      name: 'newRow',
      title: 'New Row',
      type: 'string',
      initialValue: 'Start a new row after this image',
      readOnly: true,
    }),
  ],
  preview: {
    prepare(selection) {
      return {
        title: 'new row',
        media: RemoveIcon,
      }
    },
  },
})
export const galleryImage = defineType({
  name: 'galleryImage',
  title: 'Gallery Image',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
        },
      ],
    }),
  ],
  preview: {
    select: {
      image: 'image',
      title: 'image.caption',
    },
    prepare(selection) {
      const {image, title} = selection

      return {
        title: title,
        media: image,
      }
    },
  },
})
