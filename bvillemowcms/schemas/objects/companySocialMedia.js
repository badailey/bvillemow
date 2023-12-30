import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'socialMedia',
  title: 'Social Media',
  type: 'object',
  fields: [
    defineField({
      name: 'socialMediaCompany',
      title: 'Social Media Company',
      type: 'string',
    }),
    defineField({
      name: 'href',
      title: 'URL',
      type: 'url',
    }),
    defineField({
      name: 'blank',
      title: 'Open in new tab',
      type: 'boolean',
      description: 'Read https://css-tricks.com/use-target_blank/',
    }),
  ],
})
