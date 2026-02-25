import article from './article'
import author from './author'
import issue from './issue'
import boardMember from './boardMember'
import announcement from './announcement'
import category from './category'

export const schemaTypes = [
  // Core content types
  article,
  author,
  issue,

  // Organizational
  category,
  boardMember,

  // News & updates
  announcement,
]
