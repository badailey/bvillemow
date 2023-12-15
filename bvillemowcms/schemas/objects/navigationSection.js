import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'navigation.section',
    type: 'object',
    title: 'Navigation Item',
    fields: [
      defineField({
        type: 'string',
        name: 'title',
        title: 'Title',
      }),
      defineField({
        type: 'reference',
        name: 'target',
        title: 'Takes you to this page',
        to: [{type: 'page'}],
        options: {
          disableNew: true,
        },
      }),
      defineField({
        type: 'array',
        name: 'links',
        title: '... Or displays a dropdown of links',
        of: [{type: 'navigation.link'}],
        hidden: ({parent}) => parent?.target !== undefined,
      }),
    ],
  
    preview: {
      select: {
        title: 'title',
        links: 'links',
        slug: 'target.slug',
      },
      prepare(selection) {
        const {title, links, slug} = selection
        let subtitle = ''
        if (slug || links) {
          subtitle = slug ? `/${slug.current}` : `${links.length} link${links.length > 1 ? 's' : ''}`
        }
        return {
          title: title,
          subtitle: subtitle,
        }
      },
    },
  })