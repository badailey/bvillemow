import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'testimonial',
    title: 'Testimonial',
    type: 'object',
    fields: [
      defineField({
        name: 'body',
        title: 'Content',
        type: 'blockContent',
      }),
      defineField({
        title: 'Endorser',
        name: 'endorser',
        type: 'reference',
        to: [{type: 'person'}],
      }),
      defineField({
        name: 'endorserDescription',
        title: 'Endorser Description',
        type: 'string',
        description: 'ex. Volunteer, 2017'
      }),
    ],
    preview: {
      select: {
        title: 'endorser.name',
        subtitle: 'description',
        media: 'endorser.image'
      },
    },
  })
  