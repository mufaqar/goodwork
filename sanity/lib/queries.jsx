export const QFaqs = `*[_type == "faqs"] | order(_createdAt desc){
     question,
     createdby,
     _createdAt,
     slug,
     ctegory->{
          name,
          color
     },
     answer
}`

export const QCategories = `*[_type == "categories"] | order(_createdAt desc){
     name, color
}`


export const QSingleFaq = `*[_type == 'faqs' && slug.current == $slug][0]{
     question,
     createdby,
     _createdAt,
     slug,
     ctegory->{
          name,
          color
     },
     answer,
     issue
}`

export const QSoftwares = `*[_type == "software" && category == $category ] | order(_createdAt desc){
     title,
     file{
          asset->{
               url
          }
     }
}`
