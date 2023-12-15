import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'company',
    title: 'Company',
    type: 'object',
    fields: [
      defineField({
        name: 'companyName',
        title: 'Company Name',
        type: 'string',
      }),
      defineField({
        name: 'projectCoordinator',
        title: 'Project Coordinator',
        type: 'reference',
        to: [{type: 'person'}],
      }),
      defineField({
        name: 'email',
        title: 'Email',
        type: 'string',
      }),
      defineField({
        name: 'postalAddress',
        title: 'Postal Address',
        type: 'address',
      }),
      defineField({
        name: 'workSpace',
        title: 'Work Space',
        type: 'workSpace',
      }),
      defineField({
        type: 'array',
        name: 'socialMediaList',
        title: 'Social Media',
        of: [{type: 'socialMedia'}],
      }),
    ],
  })