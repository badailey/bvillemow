import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'teamMember',
  title: 'Team Member',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      title: 'Name(s)',
      type: 'string',
      description: 'Please use "Firstname Lastname" format',
    }),
    defineField({
      name: 'role',
      title: 'Role (optional)',
      type: 'string',
      description: 'what do you do say you do here?',
    }),
    defineField({
      name: 'description',
      title: 'Bio',
      type: 'blockContent',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
    }),
  ],
  preview: {
    select: {title: 'name', media: 'image', subtitle: 'role'},
  },
})