import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'issue',
  title: 'Journal Issue',
  type: 'document',
  fields: [
    defineField({
      name: 'volume',
      title: 'Volume Number',
      type: 'number',
      validation: (Rule) => Rule.required().positive().integer(),
    }),
    defineField({
      name: 'issue',
      title: 'Issue Number',
      type: 'number',
      validation: (Rule) => Rule.required().positive().integer(),
    }),
    defineField({
      name: 'year',
      title: 'Publication Year',
      type: 'number',
      validation: (Rule) => Rule.required().min(2020).max(2100),
    }),
    defineField({
      name: 'title',
      title: 'Issue Title',
      type: 'string',
      description: 'Optional custom title for special issues',
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        },
      ],
    }),
    defineField({
      name: 'description',
      title: 'Issue Description',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'publishedDate',
      title: 'Publication Date',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'isSpecialIssue',
      title: 'Special Issue',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'specialIssueTitle',
      title: 'Special Issue Title',
      type: 'string',
      hidden: ({ document }) => !document?.isSpecialIssue,
    }),
    defineField({
      name: 'guestEditors',
      title: 'Guest Editors',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'author' } }],
      hidden: ({ document }) => !document?.isSpecialIssue,
    }),
    defineField({
      name: 'callForPapers',
      title: 'Call for Papers',
      type: 'text',
      rows: 6,
      hidden: ({ document }) => !document?.isSpecialIssue,
    }),
    defineField({
      name: 'submissionDeadline',
      title: 'Submission Deadline',
      type: 'datetime',
      hidden: ({ document }) => !document?.isSpecialIssue,
    }),
    defineField({
      name: 'status',
      title: 'Issue Status',
      type: 'string',
      options: {
        list: [
          { title: 'Planning', value: 'planning' },
          { title: 'Open for Submissions', value: 'open' },
          { title: 'In Production', value: 'production' },
          { title: 'Published', value: 'published' },
        ],
      },
      initialValue: 'planning',
    }),
    defineField({
      name: 'featured',
      title: 'Featured Issue',
      type: 'boolean',
      initialValue: false,
      description: 'Display prominently on homepage',
    }),
  ],
  preview: {
    select: {
      volume: 'volume',
      issue: 'issue',
      year: 'year',
      special: 'isSpecialIssue',
      specialTitle: 'specialIssueTitle',
      media: 'coverImage',
    },
    prepare(selection) {
      const { volume, issue, year, special, specialTitle } = selection
      return {
        title: `Volume ${volume}, Issue ${issue} (${year})`,
        subtitle: special ? `Special Issue: ${specialTitle}` : 'Regular Issue',
        media: selection.media,
      }
    },
  },
})
