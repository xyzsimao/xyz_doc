import type { Accordion, Accordions } from 'xyzdoc-ui/components/accordion'
import type { Callout } from 'xyzdoc-ui/components/callout'
import type { File, Folder } from 'xyzdoc-ui/components/files'
import type { InlineTOC } from 'xyzdoc-ui/components/inline-toc'
import type { TypeTable } from 'xyzdoc-ui/components/type-table'
import type { Card } from 'xyzdoc-ui/components/card'
import type { DocsLayoutProps } from 'xyzdoc-ui/layouts/docs'
import type { ComponentProps, ComponentPropsWithoutRef } from 'react'
import type { DocsPageProps } from 'xyzdoc-ui/layouts/docs/page'
// import type { AutoTypeTable } from 'xyzdoc-typescript/ui';
import type { RootProviderProps } from 'xyzdoc-ui/provider/base'

export type AccordionsProps = Omit<
  ComponentPropsWithoutRef<typeof Accordions>,
  keyof ComponentPropsWithoutRef<'div'> | 'value' | 'onValueChange'
>

export type AccordionProps = Omit<
  ComponentPropsWithoutRef<typeof Accordion>,
  keyof ComponentPropsWithoutRef<'div'>
>

export type CalloutProps = Omit<
  ComponentPropsWithoutRef<typeof Callout>,
  keyof ComponentPropsWithoutRef<'div'>
>

export type FileProps = Omit<
  ComponentPropsWithoutRef<typeof File>,
  keyof ComponentPropsWithoutRef<'div'>
>

export type FolderProps = Omit<
  ComponentPropsWithoutRef<typeof Folder>,
  keyof ComponentPropsWithoutRef<'div'>
>

export type InlineTOCProps = Omit<
  ComponentPropsWithoutRef<typeof InlineTOC>,
  keyof ComponentPropsWithoutRef<'div'>
>

export type CardProps = Omit<
  ComponentPropsWithoutRef<typeof Card>,
  keyof Omit<ComponentProps<'a'>, 'href'>
>

export type TypeTableProps = ComponentPropsWithoutRef<typeof TypeTable>

export type ObjectTypeProps = ComponentPropsWithoutRef<
  typeof TypeTable
>['type'][string]

export type { DocsLayoutProps }

export type NavbarProps = NonNullable<DocsLayoutProps['nav']>

export type SidebarProps = Omit<
  NonNullable<DocsLayoutProps['sidebar']>,
  keyof ComponentProps<'aside'>
>

export type PageProps = DocsPageProps

export type TOCProps = NonNullable<DocsPageProps['tableOfContent']>
export type TOCPopoverProps = NonNullable<
  DocsPageProps['tableOfContentPopover']
>

export type BreadcrumbProps = Omit<
  NonNullable<DocsPageProps['breadcrumb']>,
  keyof ComponentProps<'div'>
>

export type FooterProps = Omit<
  NonNullable<DocsPageProps['footer']>,
  keyof ComponentProps<'div'>
>

// export type AutoTypeTableProps = ComponentPropsWithoutRef<typeof AutoTypeTable>;

export type SearchProps = Required<RootProviderProps>['search']

export type { BaseLayoutProps } from 'xyzdoc-ui/layouts/shared'
