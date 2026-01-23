import { source } from '@/lib/source';
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
  PageLastUpdate,
} from 'xyzdoc-ui/layouts/docs/page'
import { notFound } from 'next/navigation'
import { getMDXComponents } from '@/mdx-components'
import type { Metadata } from 'next'
import { createRelativeLink } from 'xyzdoc-ui/mdx'
import { Installation } from '@/components/preview/installation'
import { Callout } from 'xyzdoc-ui/components/callout'
import * as Preview from '@/components/preview'
import { type ComponentProps, type FC, type ReactNode } from 'react'
import { Card, Cards } from 'xyzdoc-ui/components/card'

import { findSiblings } from 'xyzdoc-core/page-tree'

import * as Twoslash from 'fumadocs-twoslash/ui'
import { TypeTable } from 'xyzdoc-ui/components/type-table'
import { Wrapper } from '@/components/preview/wrapper'
import { Mermaid } from '@/components/mdx/mermaid'
import { LLMCopyButton, ViewOptions } from '@/components/ai/page-actions'
import { Feedback, FeedbackBlock } from '@/components/feedback/client'
import {
  onBlockFeedbackAction,
  onPageFeedbackAction,
  owner,
  repo,
} from '@/lib/github'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'
import Link from 'xyzdoc-core/link'
import { Banner } from 'xyzdoc-ui/components/banner'
import { Customisation } from '@/components/preview/customisation'
import { PathUtils } from 'xyzdoc-core/source'

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
        footer: (
          <div className="my-3 space-y-3">
            {/* <LLMCopyButton markdownUrl={`${page.url}.mdx`} /> */}
            {/* <ViewOptions
              markdownUrl={`${page.url}.mdx`}
              githubUrl={`https://github.com/${owner}/${repo}/blob/dev/apps/docs/content/docs/${page.path}`}
            /> */}

            {/* <Separator />
            <CopyPage text={markdown} />
            <EditSource path={page.path} />
            <ScrollTop /> */}
          </div>
        ),
      }}
      full={page.data.full}
    >
      <h1 className="text-[1.75em] font-semibold">{page.data.title}</h1>
      <p className="text-lg text-fd-muted-foreground mb-2">
        {page.data.description}
      </p>
      {/* <div className="flex flex-row gap-2 items-center border-b pt-2 pb-6">
        <LLMCopyButton markdownUrl={`${page.url}.mdx`} />
        <ViewOptions
          markdownUrl={`${page.url}.mdx`}
          githubUrl={`https://github.com/${owner}/${repo}/blob/dev/apps/docs/content/docs/${page.path}`}
        />
      </div> */}
      <div className="prose flex-1 text-fd-foreground/90">
        {page.data.preview && <PreviewRenderer preview={page.data.preview} />}
        <MDX
          components={getMDXComponents({
            ...Twoslash,
            a: ({ href, ...props }) => {
              const found = source.getPageByHref(href ?? '', {
                dir: PathUtils.dirname(page.path),
              })

              if (!found) return <Link href={href} {...props} />

              return (
                <HoverCard>
                  <HoverCardTrigger
                    href={
                      found.hash
                        ? `${found.page.url}#${found.hash}`
                        : found.page.url
                    }
                    {...props}
                  >
                    {props.children}
                  </HoverCardTrigger>
                  <HoverCardContent className="text-sm">
                    <p className="font-medium">{found.page.data.title}</p>
                    <p className="text-fd-muted-foreground">
                      {found.page.data.description}
                    </p>
                  </HoverCardContent>
                </HoverCard>
              )
            },
            FeedbackBlock: ({ children, ...props }) => (
              <FeedbackBlock {...props} onSendAction={onBlockFeedbackAction}>
                {children}
              </FeedbackBlock>
            ),
            Banner,
            Mermaid,
            TypeTable,
            Wrapper,
            blockquote: Callout as unknown as FC<ComponentProps<'blockquote'>>,
            DocsCategory: ({ url }) => {
              return <DocsCategory url={url ?? page.url} />
            },
            Installation,
            Customisation,
          })}
        />
        {page.data.index ? <DocsCategory url={page.url} /> : null}

        <Feedback onSendAction={onPageFeedbackAction} />
        {page.data.lastModified && (
          <PageLastUpdate date={page.data.lastModified} />
        )}
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