import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'editorialBoard',
  title: 'Editorial Board Member',
  type: 'document',
  fields: [
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'author' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
      options: {
        list: [
          { title: 'Editor-in-Chief', value: 'editor-in-chief' },
          { title: 'Associate Editor', value: 'associate-editor' },
          { title: 'Editorial Board Member', value: 'board-member' },
          { title: 'Managing Editor', value: 'managing-editor' },
          { title: 'Section Editor', value: 'section-editor' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'expertise',
      title: 'Areas of Expertise',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first',
      initialValue: 100,
    }),
    defineField({
      name: 'active',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      name: 'author.name',
      role: 'role',
      affiliation: 'author.affiliation',
    },
    prepare(selection) {
      const { name, role, affiliation } = selection
      return {
        title: name,
        subtitle: `${role} - ${affiliation}`,
      }
    },
  },
})
