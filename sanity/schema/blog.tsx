export const blog = {
    name: 'blog',
    type: 'document',
    title: 'Blog',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',   
      },
      
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96,
        },
      },
      // {
      //   name: 'category',
      //   title: 'Category',
      //   type: 'reference',
      //   to:[
      //     {type: 'category'}
      //   ]
      // }, 
      {
        name: 'mainImage',
        title: 'Main image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'short_info',
        title: 'Short Info',
        type: 'text',
      }, 
      
      {
        title: 'Content',
        name: 'content',
        type: 'array',
        of: [
          {
            type: 'block'
          },
          {
            type: 'image',
            options: { hotspot: true },
            fields: [
              {
                name: 'alt',
                type: 'string',
                title: 'Alternative text',
                options: {
                  isHighlighted: true ,
                }
              }
            ]
          }
        ]
      },
      
     
    ],
  };