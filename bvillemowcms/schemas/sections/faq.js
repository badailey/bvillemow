import {HelpCircleIcon} from '@sanity/icons'

export default {
  name: 'faq',
  title: 'FAQ',
  icon: HelpCircleIcon,
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
      name: 'questions_answers',
      title: 'Q/A',
      type: 'array',
      soartable: true,
      of: [{type: 'qa'}],
    },
    {
      name: 'component',
      title: 'Component',
      description: 'a list of eligible components for this section',
      type: 'string',
      initialValue: 'Faq',
      options: {
        list: [{title: 'Default Component', value: 'Faq'}],
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