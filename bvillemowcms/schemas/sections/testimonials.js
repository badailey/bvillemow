import {CommentIcon} from '@sanity/icons'

export default {
  name: 'testimonials',
  title: 'Testimonials',
  icon: CommentIcon,
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
      name: 'testimonialList',
      title: 'Testimonial List',
      type: 'array',
      soartable: true,
      of: [{type: 'testimonial'}],
    },
    {
      name: 'component',
      title: 'Component',
      description: 'a list of eligible components for this section',
      type: 'string',
      initialValue: 'Testimonials',
      options: {
        list: [{title: 'Default Component', value: 'Testimonials'}],
      },
      hidden: true,
    },
  ],
  preview: {
    select: {
      title: 'internalTitle',
      subtitle: 'component',
    },
    prepare: ({title, subtitle, internalTitle}) => ({
      title: internalTitle || title,
      subtitle: subtitle,
    }),
  },
}