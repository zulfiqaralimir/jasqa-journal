import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'announcement',
  title: 'Announcement',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Announcement Title',
      type: 'string',
      validation: (Rule) => Rule.required().min(10).max(150),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Announcement Type',
      type: 'string',
      options: {
        list: [
          { title: 'Call for Papers', value: 'call-for-papers' },
          { title: 'Special Issue', value: 'special-issue' },
          { title: 'Achievement', value: 'achievement' },
          { title: 'New Feature', value: 'new-feature' },
          { title: 'Editorial', value: 'editorial' },
          { title: 'Publication', value: 'publication' },
          { title: 'Event', value: 'event' },
          { title: 'Conference', value: 'conference' },
          { title: 'Award', value: 'award' },
          { title: 'General', value: 'general' },
        ],
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'priority',
      title: 'Priority Level',
      type: 'string',
      options: {
        list: [
          { title: 'High (Urgent)', value: 'high' },
          { title: 'Medium (Normal)', value: 'medium' },
          { title: 'Low (Info)', value: 'low' },
        ],
      },
      initialValue: 'medium',
    }),
    defineField({
      name: 'excerpt',
      title: 'Short Summary',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required().min(50).max(200),
      description: 'Brief summary for listing pages (max 200 characters)',
    }),
    defineField({
      name: 'content',
      title: 'Full Content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'Quote', value: 'blockquote' },
          ],
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Numbered', value: 'number' },
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'External Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                  },
                ],
              },
            ],
          },
        },
        {
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
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'relatedIssue',
      title: 'Related Issue',
      type: 'reference',
      to: { type: 'issue' },
      description: 'Link to related journal issue if applicable',
    }),
    defineField({
      name: 'externalLink',
      title: 'External Link',
      type: 'url',
      description: 'Link to external resource (e.g., conference website)',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Publication Date',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'expiresAt',
      title: 'Expiration Date',
      type: 'datetime',
      description: 'Hide announcement after this date (optional)',
    }),
    defineField({
      name: 'featured',
      title: 'Featured Announcement',
      type: 'boolean',
      initialValue: false,
      description: 'Display prominently on homepage',
    }),
    defineField({
      name: 'pinned',
      title: 'Pin to Top',
      type: 'boolean',
      initialValue: false,
      description: 'Keep at top of announcements list',
    }),
    defineField({
      name: 'showOnHomepage',
      title: 'Show on Homepage',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      type: 'type',
      date: 'publishedAt',
      featured: 'featured',
      pinned: 'pinned',
    },
    prepare(selection) {
      const { title, type, featured, pinned } = selection
      let prefix = ''
      if (pinned) prefix += '📌 '
      if (featured) prefix += '⭐ '

      return {
        title: `${prefix}${title}`,
        subtitle: type,
      }
    },
  },
})
