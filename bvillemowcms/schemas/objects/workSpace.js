import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'workSpace',
  title: 'Work Space',
  type: 'object',
  fields: [
    defineField({
      name: 'businessName',
      title: 'Business Name',
      type: 'string',
    }),
    defineField({
      name: 'street',
      title: 'Street',
      type: 'string',
    }),
    defineField({
      name: 'city',
      title: 'City',
      type: 'string',
    }),
    defineField({
      name: 'state',
      title: 'State',
      type: 'string',
    }),
    defineField({
      name: 'zipCode',
      title: 'Zip Code',
      type: 'string',
    }),
    defineField({
      name: 'phoneNumber',
      title: 'Phone Number',
      type: 'string',
    }),
  ],
})