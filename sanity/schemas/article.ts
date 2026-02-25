import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Article Title',
      type: 'string',
      validation: (Rule) => Rule.required().min(10).max(250),
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
      name: 'articleType',
      title: 'Article Type',
      type: 'string',
      options: {
        list: [
          { title: 'Research Article', value: 'research' },
          { title: 'Review Article', value: 'review' },
          { title: 'Technical Note', value: 'technical-note' },
          { title: 'Case Study', value: 'case-study' },
          { title: 'Short Communication', value: 'short-communication' },
          { title: 'Letter to Editor', value: 'letter' },
        ],
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'authors',
      title: 'Authors',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'author' } }],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'correspondingAuthor',
      title: 'Corresponding Author',
      type: 'reference',
      to: { type: 'author' },
      description: 'Main contact person for this article',
    }),
    defineField({
      name: 'abstract',
      title: 'Abstract',
      type: 'text',
      rows: 8,
      validation: (Rule) => Rule.required().min(150).max(500),
      description: 'Maximum 500 words',
    }),
    defineField({
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
      validation: (Rule) => Rule.required().min(4).max(8),
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
      validation: (Rule) => Rule.min(1).max(3),
    }),
    defineField({
      name: 'content',
      title: 'Article Content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' },
            { title: 'Quote', value: 'blockquote' },
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              { title: 'Code', value: 'code' },
              { title: 'Underline', value: 'underline' },
              { title: 'Strike', value: 'strike-through' },
              { title: 'Subscript', value: 'sub' },
              { title: 'Superscript', value: 'sup' },
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
                    validation: (Rule) => Rule.uri({
                      scheme: ['http', 'https', 'mailto']
                    })
                  },
                ],
              },
              {
                name: 'internalLink',
                type: 'object',
                title: 'Internal Link',
                fields: [
                  {
                    name: 'reference',
                    type: 'reference',
                    to: [{ type: 'article' }],
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
              validation: (Rule) => Rule.required(),
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
      name: 'issue',
      title: 'Journal Issue',
      type: 'reference',
      to: { type: 'issue' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'pages',
      title: 'Page Numbers',
      type: 'string',
      placeholder: 'e.g., 1-15 or 234-256',
      validation: (Rule) => Rule.regex(/^\d+-\d+$/, {
        name: 'page range',
        invert: false,
      }).error('Must be in format: 1-15'),
    }),
    defineField({
      name: 'doi',
      title: 'DOI',
      type: 'string',
      placeholder: 'e.g., 10.1000/jasqa.2024.1.1.001',
    }),
    defineField({
      name: 'manuscriptId',
      title: 'Manuscript ID',
      type: 'string',
      description: 'Internal tracking number',
    }),
    defineField({
      name: 'pdfFile',
      title: 'Full Text PDF',
      type: 'file',
      options: {
        accept: 'application/pdf',
      },
    }),
    defineField({
      name: 'supplementaryFiles',
      title: 'Supplementary Materials',
      type: 'array',
      of: [
        {
          type: 'file',
          fields: [
            {
              name: 'title',
              type: 'string',
              title: 'File Title',
            },
            {
              name: 'description',
              type: 'text',
              title: 'Description',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'submittedAt',
      title: 'Submission Date',
      type: 'datetime',
    }),
    defineField({
      name: 'acceptedAt',
      title: 'Acceptance Date',
      type: 'datetime',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Publication Date',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'status',
      title: 'Publication Status',
      type: 'string',
      options: {
        list: [
          { title: 'Draft', value: 'draft' },
          { title: 'Under Review', value: 'review' },
          { title: 'Accepted', value: 'accepted' },
          { title: 'Published', value: 'published' },
          { title: 'Retracted', value: 'retracted' },
        ],
      },
      initialValue: 'draft',
    }),
    defineField({
      name: 'featured',
      title: 'Featured Article',
      type: 'boolean',
      initialValue: false,
      description: 'Display on homepage',
    }),
    defineField({
      name: 'openAccess',
      title: 'Open Access',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'citations',
      title: 'Citation Count',
      type: 'number',
      initialValue: 0,
    }),
    defineField({
      name: 'views',
      title: 'View Count',
      type: 'number',
      initialValue: 0,
    }),
    defineField({
      name: 'downloads',
      title: 'Download Count',
      type: 'number',
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      authors: 'authors',
      status: 'status',
    },
    prepare(selection) {
      const { title, status } = selection
      return {
        title,
        subtitle: `Status: ${status || 'draft'}`,
      }
    },
  },
})
