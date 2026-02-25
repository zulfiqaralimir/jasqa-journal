import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './sanity/schemas'

export default defineConfig({
  name: 'default',
  title: 'JASQA Journal - Content Management',

  projectId: 'yhv6w713',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('JASQA Journal')
          .items([
            // Main content
            S.listItem()
              .title('Articles')
              .icon(() => '📄')
              .child(S.documentTypeList('article').title('Articles')),

            S.listItem()
              .title('Issues')
              .icon(() => '📚')
              .child(S.documentTypeList('issue').title('Issues')),

            S.divider(),

            // People
            S.listItem()
              .title('Authors')
              .icon(() => '👤')
              .child(S.documentTypeList('author').title('Authors')),

            S.listItem()
              .title('Editorial Board')
              .icon(() => '👥')
              .child(S.documentTypeList('boardMember').title('Board Members')),

            S.divider(),

            // Organization
            S.listItem()
              .title('Categories')
              .icon(() => '🏷️')
              .child(S.documentTypeList('category').title('Categories')),

            S.listItem()
              .title('Announcements')
              .icon(() => '📢')
              .child(S.documentTypeList('announcement').title('Announcements')),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },

  basePath: '/studio',
})
