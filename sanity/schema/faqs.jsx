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
               title: 'Slug',
               name: 'slug',
               type: 'slug',
               options: {
                 source: 'question',
                 maxLength: 200, // will be ignored if slugify is set
                 slugify: input => input
                                      .toLowerCase()
                                      .replace(/\s+/g, '-')
                                      .slice(0, 200)
               }
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
          },
          {
               name: 'issue',
               type: 'array',
               title: 'Issue',
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