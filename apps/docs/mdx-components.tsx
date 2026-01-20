import defaultMdxComponents from 'xyzdoc-ui/mdx';
import * as FilesComponents from 'xyzdoc-ui/components/files'
import * as TabsComponents from 'xyzdoc-ui/components/tabs'
import type { MDXComponents } from 'mdx/types'
import { Accordion, Accordions } from 'xyzdoc-ui/components/accordion'
import * as icons from 'lucide-react'

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...(icons as unknown as MDXComponents),
    ...defaultMdxComponents,
    ...TabsComponents,
    ...FilesComponents,
    Accordion,
    Accordions,
    ...components,
  }
}