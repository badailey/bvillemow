import {defineType, defineField} from 'sanity'
import {MasterDetailIcon} from '@sanity/icons'

export default defineType({
  name: 'twoColumnContent',
  title: 'Two Column Content',
  icon: MasterDetailIcon,
  type: 'object',
  fields: [
    defineField({
      name: 'internalTitle',
      title: 'Internal Title (does not display)',
      type: 'string',
    }),
    defineField({
      name: 'title',
      title: 'Page Title (displays above columns, optional)',
      type: 'string',
    }),
    defineField({
      name: 'columns',
      title: 'Columns',
      type: 'array',
      validation: (Rule) => Rule.length(2),
      options: {
        sortable: true,
        layout: 'grid',
      },
      of: [{type: 'content'}, {type: 'inlineImage'}],
    }),
    defineField({
      name: 'mobileDisplay',
      title: 'Mobile Size Option',
      type: 'string',
      description: 'How to display the two columns on mobile size',
      initialValue: 'leftTop',
      options: {
        list: [
          {title: 'Left on Top', value: 'leftTop'},
          {title: 'Right on Top', value: 'rightTop'},
          {title: 'Hide Left', value: 'hideLeft'},
          {title: 'Hide Right', value: 'hideRight'},
        ],
      },
    }),
    defineField({
      name: 'component',
      title: 'Component',
      description: 'a list of eligible components for this section',
      type: 'string',
      initialValue: 'TwoColumns',
      options: {
        list: [
          {title: 'Equal width columns', value: 'TwoColumnContent'},
          {title: 'Left is Wider', value: 'TwoColumnContentLeftWider'},
          {title: 'Right is Wider', value: 'TwoColumnContentRightWider'},
        ],
      },
    }),
  ],
  preview: {
    select: {
      title: 'internalTitle',
      subtitle: 'component',
    },
  },
})
