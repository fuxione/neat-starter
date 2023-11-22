import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "src",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "src",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "src/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
      {
        name: "chain",
        label: "Chains",
        path: "src/chains",
        templates: [
          {
            name: "basic",
            label: "Basic Template",
            defaultItem: () => {
              return {
                layout: 'basic',
                
              }
            },
            fields: [
              {
                type: "string",
                name: "title",
                label: "Title",
                isTitle: true,
                required: true,
              },
              {
                type: "string",
                name: "headline",
                label: "Headline",
                required: true,
              },
              {
                type: "string",
                name: "subheadline",
                label: "Subheadline",
                required: true,
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                required: true,
              },
              {
                type: "string",
                name: "question",
                label: "Question",
                required: true,
              },
              {
                type: "string",
                name: "answer_1",
                label: "Answer 1",
                required: true,
              },
              {
                type: "string",
                name: "answer_2",
                label: "Answer 2",
                required: true,
              }, 

              {
                type: "string",
                name: "layout",
                label: "Layout",
                required: true,
              }, 
             



            ]
          }
        ]
      }



    ],
  },
});
