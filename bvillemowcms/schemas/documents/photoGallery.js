import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'photoGallery',
  title: 'Photo Galleries',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Gallery name',
      validation: (Rule) => Rule.required(),
    }),
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        // https://www.sanity.io/schemas/easy-peasy-url-slug-d2400b42
        source: 'title',
        maxLength: 100,
        slugify: (input) =>
          input
            .toLowerCase()
            //Remove spaces
            .replace(/\s+/g, '-')
            //Remove special characters
            .replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, ''),
        validation: (Rule) => Rule.required(),
      },
    },
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
      description: 'Description',
    }),
    defineField({
      name: 'year',
      title: 'Event Year',
      type: 'number',
      description: 'YYYY',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'images',
      type: 'array',
      title: 'Images',
      of: [{type: 'galleryImage'}, {type: 'galleryNewRow'}],
    }),
  ],
  orderings: [
    {
      title: 'Newest Galleries',
      name: 'yearDesc',
      by: [{field: 'year', direction: 'desc'}],
    },
    {
      title: 'Oldest Galleries',
      name: 'yearAsc',
      by: [{field: 'year', direction: 'asc'}],
    },
  ],
  preview: {
    select: {title: 'title', allImages: 'images'},
    prepare(selection) {
      const {title, allImages} = selection
      const pluralize = (word, length) => {
        return `${word}${length === 1 ? '' : 's'}`
      }
      let images = allImages ? allImages.filter((image) => image._type === 'galleryImage') : []

      return {
        title: title,
        subtitle: `Gallery with ${images.length} ${pluralize('image', images.length)}`,
        media: images.length > 0 && images[0].image,
      }
    },
  },
})
