export default {
     name: 'faqs',
     type: 'document',
     title: 'FAQS',
     fields: [
          {
               name: 'question',
               type: 'string',
               title: 'Question'
          },
          {
               name: 'createdby',
               type: 'string',
               title: 'Created By'
          },
          {
               title: 'Category',
               name: 'ctegory',
               type: 'reference',
               to: [{ type: 'categories' }]
          },
          {
               name: 'answer',
               type: 'array',
               title: 'Answer',
               of: [
                    {
                         type: 'block'
                    },
                    {
                         type: 'image'
                    }
               ]
          }
     ]
}