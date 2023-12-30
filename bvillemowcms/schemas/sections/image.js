import {defineType, defineField} from 'sanity'
import {ImageIcon} from '@sanity/icons'

export default defineType({
  name: 'inlineImage',
  title: 'Image',
  icon: ImageIcon,
  type: 'object',
  fields: [
    defineField({
      name: 'internalTitle',
      title: 'Internal Title (does not display)',
      type: 'string',
    }),
    defineField({
      name: 'title',
      title: 'Page Title (displays above image, optional)',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required().assetRequired(),
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
          hidden: ({parent}) => !parent?.asset,
        },
      ],
    }),
    defineField({
      name: 'component',
      title: 'Component',
      description: 'a list of eligible components for this section',
      type: 'string',
      initialValue: 'Image',
      options: {
        list: [{title: 'Default Component', value: 'Image'}],
      },
      hidden: true,
    }),
  ],
  preview: {
    select: {title: 'internalTitle', media: 'image'},
  },
})
