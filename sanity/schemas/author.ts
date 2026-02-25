import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Academic Title',
      type: 'string',
      placeholder: 'e.g., Dr., Prof., Ph.D.',
    }),
    defineField({
      name: 'image',
      title: 'Profile Photo',
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
      name: 'affiliation',
      title: 'Primary Affiliation',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'department',
      title: 'Department',
      type: 'string',
    }),
    defineField({
      name: 'secondaryAffiliations',
      title: 'Secondary Affiliations',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
      validation: (Rule) => Rule.email(),
    }),
    defineField({
      name: 'bio',
      title: 'Biography',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          lists: [],
        },
      ],
    }),
    defineField({
      name: 'researchInterests',
      title: 'Research Interests',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'orcid',
      title: 'ORCID ID',
      type: 'string',
      placeholder: 'e.g., 0000-0002-1825-0097',
      validation: (Rule) => Rule.regex(/^\d{4}-\d{4}-\d{4}-\d{3}[0-9X]$/, {
        name: 'ORCID format',
      }).error('Must be valid ORCID format: 0000-0002-1825-0097'),
    }),
    defineField({
      name: 'googleScholar',
      title: 'Google Scholar Profile',
      type: 'url',
      validation: (Rule) => Rule.uri({
        scheme: ['http', 'https']
      }),
    }),
    defineField({
      name: 'researchGate',
      title: 'ResearchGate Profile',
      type: 'url',
    }),
    defineField({
      name: 'linkedIn',
      title: 'LinkedIn Profile',
      type: 'url',
    }),
    defineField({
      name: 'website',
      title: 'Personal Website',
      type: 'url',
    }),
    defineField({
      name: 'twitter',
      title: 'Twitter/X Handle',
      type: 'string',
      placeholder: '@username',
    }),
    defineField({
      name: 'hIndex',
      title: 'h-index',
      type: 'number',
      description: 'Academic citation index',
    }),
    defineField({
      name: 'totalCitations',
      title: 'Total Citations',
      type: 'number',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'affiliation',
      media: 'image',
    },
  },
})
