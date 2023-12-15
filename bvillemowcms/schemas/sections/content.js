import {BlockContentIcon} from '@sanity/icons'

export default {
  name: 'content',
  icon: BlockContentIcon,
  title: 'Content',
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
      name: 'content',
      title: 'Content',
      type: 'blockContent',
    },
    {
      name: 'component',
      title: 'Component',
      description: 'a list of eligible components for this section',
      type: 'string',
      initialValue: 'Content',
      options: {
        list: [
          {title: 'Default Component', value: 'Content'},
          {title: 'No Padding Content', value: 'FullWidthContent'}
        ],
      },
    },
  ],
  preview: {
    select: {
      title: 'internalTitle',
      subtitle: 'component',
    },
  },
}