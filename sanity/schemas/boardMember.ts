import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'boardMember',
  title: 'Editorial Board Member',
  type: 'document',
  fields: [
    defineField({
      name: 'author',
      title: 'Author Profile',
      type: 'reference',
      to: { type: 'author' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Editorial Role',
      type: 'string',
      options: {
        list: [
          { title: 'Editor-in-Chief', value: 'editor-in-chief' },
          { title: 'Co-Editor-in-Chief', value: 'co-editor-in-chief' },
          { title: 'Associate Editor', value: 'associate-editor' },
          { title: 'Managing Editor', value: 'managing-editor' },
          { title: 'Section Editor', value: 'section-editor' },
          { title: 'Editorial Board Member', value: 'board-member' },
          { title: 'Advisory Board Member', value: 'advisory-member' },
          { title: 'Guest Editor', value: 'guest-editor' },
        ],
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'section',
      title: 'Section',
      type: 'string',
      description: 'Specific section or area of responsibility',
      hidden: ({ document }) => document?.role !== 'section-editor',
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
      name: 'responsibilities',
      title: 'Key Responsibilities',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'date',
      description: 'Leave empty for current members',
    }),
    defineField({
      name: 'termLength',
      title: 'Term Length (years)',
      type: 'number',
      initialValue: 3,
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first (Editor-in-Chief should be 1)',
      initialValue: 100,
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: 'active',
      title: 'Currently Active',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'featured',
      title: 'Featured Member',
      type: 'boolean',
      initialValue: false,
      description: 'Display with photo on main editorial page',
    }),
    defineField({
      name: 'bio',
      title: 'Editorial Biography',
      type: 'text',
      rows: 4,
      description: 'Specific bio for editorial role (optional, uses author bio if empty)',
    }),
  ],
  preview: {
    select: {
      name: 'author.name',
      role: 'role',
      affiliation: 'author.affiliation',
      active: 'active',
      order: 'order',
    },
    prepare(selection) {
      const { name, role, affiliation, active, order } = selection
      return {
        title: `${order}. ${name}`,
        subtitle: `${role} - ${affiliation} ${active ? '✓' : '(Inactive)'}`,
      }
    },
  },
})
