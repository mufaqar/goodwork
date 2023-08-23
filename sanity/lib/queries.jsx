export const QFaqs = `*[_type == "faqs"] | order(_createdAt desc){
     question,
     createdby,
     _createdAt,
     ctegory->{
          name,
          color
     },
     answer
}`

export const QCategories = `*[_type == "categories"] | order(_createdAt desc){
     name, color
}`