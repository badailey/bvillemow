export default {
    name: 'menu',
    title: 'Menu',
    type: 'document',
    fields: [
      {
        name: 'meal',
        title: 'Meal',
        type: 'string',
      },
      {
        name: 'publishedAt',
        title: 'Published at',
        type: 'datetime',
      },
      {
        name: 'body',
        title: 'Body',
        type: 'blockContent',
      },
    ],
  
    // preview: {
    //   select: {
    //     title: 'title',
    //     author: 'author.name',
    //     media: 'mainImage',
    //   },
    //   prepare(selection) {
    //     const {author} = selection
    //     return Object.assign({}, selection, {
    //       subtitle: author && `by ${author}`,
    //     })
    //   },
    // },
  }
  
