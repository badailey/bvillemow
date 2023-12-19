import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'address',
  title: 'Address',
  type: 'object',
  fields: [
    defineField({
      name: 'businessName',
      type: 'string',
      title: 'Business Name',
    }),
    defineField({
      name: 'street',
      type: 'string',
      title: 'Street name',
    }),
    defineField({
      name: 'city',
      type: 'string',
      title: 'City',
    }),
    defineField({
      name: 'state',
      type: 'string',
      title: 'State',
    }),
    defineField({
      name: 'zip',
      type: 'string',
      title: 'Zip code',
    }),
  ],
})
