import { source } from '@/lib/source';
import { DocsBody, DocsDescription, DocsPage, DocsTitle } from 'fumadocs-ui/layouts/docs/page';
import { notFound } from 'next/navigation';
import { getMDXComponents } from '@/mdx-components';
import type { Metadata } from 'next';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import { Installation } from '@/app/components/preview/installation'
import { Callout } from 'fumadocs-ui/components/callout'
import * as Preview from '@/app/components/preview'
import { type ComponentProps, type FC, type ReactNode } from 'react'
import { Card, Cards } from 'fumadocs-ui/components/card'

import { findSiblings } from 'fumadocs-core/page-tree'

function PreviewRenderer({ preview }: { preview: string }): ReactNode {
  if (preview && preview in Preview) {
    const Comp = Preview[preview as keyof typeof Preview]
    return <Comp />
  }

  return null
}

export default async function Page(props: PageProps<'/docs/[[...slug]]'>) {
  const params = await props.params
  const page = source.getPage(params.slug)
  if (!page) notFound()

  const MDX = page.data.body

  return (
    <DocsPage
      toc={page.data.toc}
      tableOfContent={{
        style: 'clerk',
      }}
      full={page.data.full}
    >
      <h1 className="text-[1.75em] font-semibold">{page.data.title}</h1>
      <p className="text-lg text-fd-muted-foreground mb-2">
        {page.data.description}
      </p>

      <div className="prose flex-1 text-fd-foreground/90">
        {page.data.preview && <PreviewRenderer preview={page.data.preview} />}
        <MDX
          components={getMDXComponents({
            // this allows you to link to other pages with relative file paths
            DocsCategory: ({ url }) => {
              return <DocsCategory url={url ?? page.url} />
            },
            blockquote: Callout as unknown as FC<ComponentProps<'blockquote'>>,
            a: createRelativeLink(source, page),
            Installation,
          })}
        />
        {page.data.index ? <DocsCategory url={page.url} /> : null}
      </div>
    </DocsPage>
  )
}

function DocsCategory({ url }: { url: string }) {
  return (
    <Cards>
      {findSiblings(source.getPageTree(), url).map((item) => {
        if (item.type === 'separator') return
        if (item.type === 'folder') {
          if (!item.index) return
          item = item.index
        }

        return (
          <Card key={item.url} title={item.name} href={item.url}>
            {item.description}
          </Card>
        )
      })}
    </Cards>
  )
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: PageProps<'/docs/[[...slug]]'>): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}