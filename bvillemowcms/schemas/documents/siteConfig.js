import {defineField, defineType} from 'sanity'
import {CogIcon} from '@sanity/icons'

export default defineType({
  name: 'siteConfig',
  type: 'document',
  icon: CogIcon,
  title: 'Site Settings',
  groups: [
    {
      name: 'setup',
      title: 'Setup',
    },
    {
      name: 'navigation',
      title: 'Navigation',
    },
  ],
  fields: [
    // Add mainNav array of page references to siteConfig.js
    defineField({
      title: 'Main Navigation',
      name: 'mainNavigation',
      description: 'Select pages for the top menu',
      type: 'reference',
      to: {type: 'navigation'},
      group: 'navigation',
    }),
    defineField({
      title: 'Footer Navigation',
      name: 'footerNavigation',
      description: 'Select pages for the bottom links',
      type: 'reference',
      to: {type: 'navigation'},
      group: 'navigation',
    }),
    defineField({
      title: 'Company Information',
      name: 'companyInformation',
      description: 'Company contact information',
      type: 'reference',
      to: {type: 'company'},
      group: 'setup',
    }),
    defineField({
      name: 'title',
      type: 'string',
      title: 'Site title',
      group: 'setup',
    }),
    defineField({
      title: 'URL',
      name: 'url',
      type: 'url',
      description: 'The main site url.',
      group: 'setup',
    }),
  ],
})
