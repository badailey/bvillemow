import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {media} from 'sanity-plugin-media'

export default defineConfig({
  name: 'default',
  title: 'bvillemowcms',

  projectId: 'f316cf5l',
  dataset: 'production',

  plugins: [
    deskTool(), 
    visionTool(), 
    media()
  ],

  schema: {
    types: schemaTypes,
  },
})

// import {defineConfig, isDev} from 'sanity'
// import {deskTool} from 'sanity/desk'
// import {visionTool} from '@sanity/vision'
// import {schemaTypes} from './schemas'
// import {media} from 'sanity-plugin-media'
// import {BasketIcon, CogIcon, LinkIcon, PresentationIcon} from '@sanity/icons'
// import Logo from './src/components/logo'

// // Define the actions that should be available for singleton documents
// // from https://www.sanity.io/guides/singleton-document
// const singletonActions = new Set(['publish', 'discardChanges', 'restore'])

// // Define the singleton document types
// const singletonTypes = new Set(['settings'])

// export default defineConfig({
//   name: 'default',
//   title: 'bvillemowcms',

//   projectId: 'f316cf5l',
//   dataset: 'production',

//   studio: {
//     components: {
//       logo: Logo,
//     },
//   },

//   plugins: [
//     deskTool({
//       structure: (S) =>
//         S.list()
//           .title('Website Content')
//           .items([
//             // Regular document types
//             S.documentTypeListItem('page').title('Web pages'),
//             S.documentTypeListItem('person').title('People'),
//             S.documentTypeListItem('photoGallery').title('Photo galleries').icon(PresentationIcon),
//             // .defaultOrdering([{field: 'title', direction: 'asc'}]),
//             S.divider(),
//             // Our singleton type has a list item with a custom child
//             S.documentTypeListItem('navigation').title('Navigation').icon(LinkIcon),
//             S.listItem().title('Settings').id('settings').icon(CogIcon).child(
//               // Instead of rendering a list of documents, we render a single
//               // document, specifying the `documentId` manually to ensure
//               // that we're editing the single instance of the document
//               S.document().schemaType('siteConfig').documentId('settings'),
//             ),
//           ]),
//     }), 
//     isDev && visionTool(), 
//     media()
//   ],

//   schema: {
//     types: schemaTypes,
//     // Filter out singleton types from the global “New document” menu options
//     templates: (templates) => templates.filter(({schemaType}) => !singletonTypes.has(schemaType)),
//   },

//   document: {
//     // For singleton types, filter out actions that are not explicitly included
//     // in the `singletonActions` list defined above
//     actions: (input, context) =>
//       singletonTypes.has(context.schemaType)
//         ? input.filter(({action}) => action && singletonActions.has(action))
//         : input,
//   },
// })