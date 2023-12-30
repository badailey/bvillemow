import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'qa',
  title: 'Questions and Answers',
  type: 'object',
  fields: [
    defineField({
      name: 'question',
      title: 'Question',
      type: 'string',
    }),
    defineField({
      name: 'answer',
      title: 'Answer',
      type: 'blockContent',
    }),
  ],
})
