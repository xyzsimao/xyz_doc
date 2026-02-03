import { blog as blogPosts, docs } from 'fumadocs-mdx:collections/server'
import {
  type InferMetaType,
  type InferPageType,
  type LoaderPlugin,
  loader,
  multiple,
} from 'xyzdoc-core/source'
import { lucideIconsPlugin } from 'xyzdoc-core/source/lucide-icons'
import { toFumadocsSource } from 'xyzdoc-mdx/runtime/server'

import { openapiPlugin, openapiSource } from 'xyzdoc-openapi/server'

import { openapi } from '@/lib/openapi'
export const source = loader(
  multiple({
    docs: docs.toFumadocsSource(),
    openapi: await openapiSource(openapi, {
      baseDir: 'openapi/(generated)',
    }),
  }),
  {
    baseUrl: '/docs',
    // plugins: [pageTreeCodeTitles(), lucideIconsPlugin(), openapiPlugin()],
    plugins: [lucideIconsPlugin(), openapiPlugin()],
  },
)

// function pageTreeCodeTitles(): LoaderPlugin {
//   return {
//     transformPageTree: {
//       file(node) {
//         if (
//           typeof node.name === 'string' &&
//           (node.name.endsWith('()') || node.name.match(/^<\w+ \/>$/))
//         ) {
//           return {
//             ...node,
//             name: (
//               <code key="0" className="text-[0.8125rem]">
//                 {node.name}
//               </code>
//             ),
//           };
//         }
//         return node;
//       },
//     },
//   };
// }

// export const source = loader({

  
//   baseUrl: '/docs',
//   source: docs.toFumadocsSource(),
//   plugins: [lucideIconsPlugin()],
// })

export const blog = loader(toFumadocsSource(blogPosts, []), {
  baseUrl: '/blog',
})

export type Page = InferPageType<typeof source>
export type Meta = InferMetaType<typeof source>
