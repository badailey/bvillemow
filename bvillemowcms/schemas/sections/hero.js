import {BlockElementIcon} from '@sanity/icons'

export default {
  name: 'hero',
  title: 'Hero',
  icon: BlockElementIcon,
  type: 'object',
  fields: [
    {
      name: 'internalTitle',
      title: 'Internal Title (does not display)',
      type: 'string',
    },
    {
      name: 'title',
      title: 'Display Title (optional)',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'blockContent',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: (Rule) => Rule.required().assetRequired(),
      options: {
        hotspot: true,
      },
    },
    {
      name: 'darken',
      title: 'Darken image amount',
      type: 'string',
      description:
        'text is rendered in white text, darkened backgrounds help make the text legible',
      initialValue: '60',
      options: {
        list: [
          {title: 'Dark', value: '80'},
          {title: 'Normal', value: '60'},
          {title: 'Light', value: '40'},
          {title: 'None', value: '0'},
        ],
      },
    },
    {
      name: 'cta',
      title: 'CTA',
      type: 'navigation.link',
    },
    {
      name: 'component',
      title: 'Component',
      description: 'a list of eligible components for this section',
      type: 'string',
      initialValue: 'Hero',
      options: {
        list: [{title: 'Default Component', value: 'Hero'}],
      },
      hidden: true,
    },
  ],
  preview: {
    select: {
      title: 'internalTitle',
      subtitle: 'component',
    },
  },
}
