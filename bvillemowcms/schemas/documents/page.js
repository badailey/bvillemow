import {defineField, defineType} from 'sanity'
import {DocumentsIcon} from '@sanity/icons'

export default {
  name: 'page',
  title: 'Pages',
  icon: DocumentsIcon,
  type: 'document',
  groups: [
    {
      name: 'sections',
      title: 'Page Sections',
      default: true,
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  fields: [
    {
      name: 'internalTitle',
      title: 'Internal Title (used in page title for search engines)',
      type: 'string',
      group: 'seo',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'title',
      title: 'Page Title (optional)',
      type: 'string',
      group: 'sections',
    },
    {
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'string',
      group: 'seo',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'sections',
      title: 'Sections',
      type: 'array',
      group: 'sections',
      sortable: true,
      of: [
        {type: 'content'},
        {type: 'donation'},
        {type: 'facebook'},
        {type: 'faq'},
        {type: 'hero'},
        {type: 'inlineImage'},
        {type: 'teamMembers'},
        {type: 'testimonials'},
        {type: 'twoColumnContent'},
      ],
    },
  ],
  orderings: [
    {
      title: 'Path',
      name: 'pathAsc',
      by: [{field: 'slug.current', direction: 'asc'}],
    },
  ],
  preview: {
    select: {
      title: 'internalTitle',
      slug: 'slug.current',
    },
    prepare(selection) {
      const {title, slug} = selection
      return {
        title: title,
        subtitle: slug === '/' ? slug : `/${slug}`,
      }
    },
  },
}
