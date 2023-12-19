import {defineField, defineType} from 'sanity'
import {LinkIcon} from '@sanity/icons'

export default defineType({
  name: 'navigation',
  icon: LinkIcon,
  type: 'document',
  title: 'Navigation',
  fields: [
    defineField({
      type: 'string',
      name: 'name',
      title: 'Name',
    }),
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
    }),
    defineField({
      type: 'array',
      name: 'sections',
      title: 'Navigation Groups',
      of: [{type: 'navigation.section'}, {type: 'navigation.link'}],
    }),
  ],
})
