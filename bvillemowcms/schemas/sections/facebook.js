import {StackCompactIcon} from '@sanity/icons'

export default {
  name: 'facebook',
  title: 'Facebook',
  icon: StackCompactIcon,
  type: 'object',
  fields: [
    {
      name: 'internalTitle',
      title: 'Internal Title (does not display)',
      type: 'string',
    },
    {
      name: 'facebookTitle',
      title: 'Facebook Title (optional)',
      type: 'string',
    },
    {
      name: 'facebookScriptSmall',
      title: 'Facebook Script Small',
      type: 'string',
    },
    {
      name: 'facebookScriptLarge',
      title: 'Facebook Script Large',
      type: 'string',
    },
    {
      name: 'component',
      title: 'Component',
      description: 'a list of eligible components for this section',
      type: 'string',
      initialValue: 'Facebook',
      options: {
        list: [{title: 'Default Component', value: 'Facebook'}],
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