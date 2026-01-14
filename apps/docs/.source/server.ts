// @ts-nocheck
import * as __fd_glob_7 from "../content/docs/ui/components/accordion.mdx?collection=docs"
import * as __fd_glob_6 from "../content/docs/markdown/mdx.mdx?collection=docs"
import * as __fd_glob_5 from "../content/docs/cli/index.mdx?collection=docs"
import * as __fd_glob_4 from "../content/docs/cli/create-fumadocs-app.mdx?collection=docs"
import * as __fd_glob_3 from "../content/docs/test.mdx?collection=docs"
import * as __fd_glob_2 from "../content/docs/index.mdx?collection=docs"
import { default as __fd_glob_1 } from "../content/docs/ui/meta.json?collection=docs"
import { default as __fd_glob_0 } from "../content/docs/cli/meta.json?collection=docs"
import { server } from 'fumadocs-mdx/runtime/server';
import type * as Config from '../source.config';

const create = server<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>({"doc":{"passthroughs":["extractedReferences"]}});

export const docs = await create.docs("docs", "content/docs", {"cli/meta.json": __fd_glob_0, "ui/meta.json": __fd_glob_1, }, {"index.mdx": __fd_glob_2, "test.mdx": __fd_glob_3, "cli/create-fumadocs-app.mdx": __fd_glob_4, "cli/index.mdx": __fd_glob_5, "markdown/mdx.mdx": __fd_glob_6, "ui/components/accordion.mdx": __fd_glob_7, });