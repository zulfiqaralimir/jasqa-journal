import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'category',
  title: 'Research Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Category Name',
      type: 'string',
      validation: (Rule) => Rule.required().min(3).max(50),
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
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.max(300),
    }),
    defineField({
      name: 'parent',
      title: 'Parent Category',
      type: 'reference',
      to: [{ type: 'category' }],
      description: 'Leave empty for top-level categories',
    }),
    defineField({
      name: 'color',
      title: 'Category Color',
      type: 'string',
      description: 'Hex color code for visual identification',
      validation: (Rule) => Rule.regex(/^#[0-9A-Fa-f]{6}$/, {
        name: 'hex color',
      }).error('Must be a valid hex color (e.g., #1E40AF)'),
      initialValue: '#1E40AF',
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
      description: 'Icon name or emoji',
      initialValue: '📚',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first',
      initialValue: 100,
    }),
    defineField({
      name: 'featured',
      title: 'Featured Category',
      type: 'boolean',
      initialValue: false,
      description: 'Display on homepage',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      parent: 'parent.title',
      icon: 'icon',
      order: 'order',
    },
    prepare(selection) {
      const { title, parent, icon, order } = selection
      return {
        title: `${icon} ${title}`,
        subtitle: parent ? `Subcategory of ${parent} (Order: ${order})` : `Top Level (Order: ${order})`,
      }
    },
  },
})
