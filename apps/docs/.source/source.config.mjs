// source.config.ts
import { z } from "zod";
import {
  applyMdxPreset,
  defineConfig,
  defineDocs,
  frontmatterSchema,
  metaSchema
} from "fumadocs-mdx/config";
var docs = defineDocs({
  dir: "content/docs",
  meta: {
    schema: metaSchema.extend({
      description: z.string().optional()
    })
  },
  docs: {
    schema: frontmatterSchema.extend({
      preview: z.string().optional(),
      index: z.boolean().default(false),
      /**
       * API routes only
       */
      method: z.string().optional()
    }),
    // postprocess: {
    //   includeProcessedMarkdown: true,
    //   extractLinkReferences: true,
    // },
    // async: true,
    async mdxOptions(environment) {
      const { rehypeCodeDefaultOptions } = await import("fumadocs-core/mdx-plugins/rehype-code");
      const { remarkStructureDefaultOptions } = await import("fumadocs-core/mdx-plugins/remark-structure");
      return applyMdxPreset({
        remarkStructureOptions: {
          types: [...remarkStructureDefaultOptions.types, "code"]
        },
        rehypeCodeOptions: {
          langs: ["ts", "js", "html", "tsx", "mdx"],
          inline: "tailing-curly-colon",
          themes: {
            light: "catppuccin-latte",
            dark: "catppuccin-mocha"
          },
          transformers: [
            ...rehypeCodeDefaultOptions.transformers ?? []
            // transformerTwoslash({
            //   typesCache: createFileSystemTypesCache(),
            // }),
            // transformerEscape(),
          ]
        }
        // remarkCodeTabOptions: {
        //   parseMdx: true,
        // },
        // remarkNpmOptions: {
        //   persist: {
        //     id: 'package-manager',
        //   },
        // },
        // remarkPlugins: [
        //   remarkSteps,
        //   // remarkMath,
        //   // [remarkFeedbackBlock, feedbackOptions],
        //   // [
        //   //   remarkAutoTypeTable,
        //   //   {
        //   //     generator,
        //   //   },
        //   // ],
        //   // remarkTypeScriptToJavaScript,
        // ],
        // rehypePlugins: (v) => [rehypeKatex, ...v],
      })(environment);
    }
  }
});
var source_config_default = defineConfig();
export {
  source_config_default as default,
  docs
};
