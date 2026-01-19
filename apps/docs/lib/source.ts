import { blog as blogPosts, docs } from 'fumadocs-mdx:collections/server'
import {
  type InferMetaType,
  type InferPageType,
  type LoaderPlugin,
  loader,
  multiple,
} from 'fumadocs-core/source'
import { lucideIconsPlugin } from 'fumadocs-core/source/lucide-icons'
import { toFumadocsSource } from 'fumadocs-mdx/runtime/server'

export const source = loader({
  baseUrl: '/docs',
  source: docs.toFumadocsSource(),
  plugins: [lucideIconsPlugin()],
})

export const blog = loader(toFumadocsSource(blogPosts, []), {
  baseUrl: '/blog',
})

export type Page = InferPageType<typeof source>
export type Meta = InferMetaType<typeof source>
