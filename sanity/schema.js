import category from './schema/categories'
import faqs from './schema/faqs'
import software from './schema/software'
import documents from './schema/documents'
import { blog } from './schema/blog'

export const schema = {
  types: [faqs, category, software, documents,blog],
}
