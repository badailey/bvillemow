import {CreditCardIcon} from '@sanity/icons'

export default {
  name: 'donation',
  title: 'Donation',
  icon: CreditCardIcon,
  type: 'object',
  fields: [
    {
      name: 'internalTitle',
      title: 'Internal Title (does not display)',
      type: 'string',
    },
    {
      name: 'donationPartner',
      title: 'Donation Partner (optional)',
      type: 'string',
    },
    {
      name: 'donationScript',
      title: 'Donation Script',
      type: 'string',
    },
    {
      name: 'component',
      title: 'Component',
      description: 'a list of eligible components for this section',
      type: 'string',
      initialValue: 'Donation',
      options: {
        list: [{title: 'Default Component', value: 'Donation'}],
      },
      hidden: true,
    },
  ],
  preview: {
    select: {
      title: 'internalTitle',
      subtitle: 'component',
    },
  },
}