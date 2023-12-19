import {UsersIcon} from '@sanity/icons'

export default {
  name: 'teamMembers',
  title: 'Team Members',
  icon: UsersIcon,
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
      title: 'Description (optional)',
      description: 'this content is displayed above the team list',
      type: 'blockContent',
    },
    {
      name: 'teamMemberList',
      title: 'List of team members',
      type: 'array',
      sortable: true,
      of: [{type: 'teamMember'}],
    },
    {
      name: 'component',
      title: 'Component',
      description: 'a list of eligible components for this section',
      type: 'string',
      initialValue: 'TeamMembers',
      options: {
        list: [{title: 'Default Component', value: 'TeamMembers'}],
      },
      hidden: true,
    },
  ],
  preview: {
    select: {
      internalTitle: 'internalTitle',
      title: 'title',
      subtitle: 'component',
    },
    prepare: ({title, subtitle, internalTitle}) => ({
      title: internalTitle || title,
      subtitle: subtitle,
    }),
  },
}
