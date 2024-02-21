import { defineType, defineField } from "sanity";

export default {
  title: "Software",
  name: "software",
  type: "document",
  fields: [
    defineField({
      title: "Title",
      name: "title",
      type: "string",
    }),
    defineField({
      title: "File",
      name: "file",
      type: "file",
    }),
    {
     title: 'Category',
     name: 'category',
     type: 'string',
     // of: [{type: 'string'}],
     options: {
       list: [
         {title: 'Password Tool', value: 'passwordtool'},
         {title: 'Transport Agent', value: 'transportagent'},
         {title: 'Agent for Windows', value: 'agentforwindows'},
       ],
       layout: "radio",
       direction: "horizontal"
     }
   }
  ],
}
