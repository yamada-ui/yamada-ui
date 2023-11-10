import * as path from "path"
import chokidar from "chokidar"
import { program } from "commander"
import { generateThemeTypings, themePath } from "./command/tokens"
import { initCLI } from "./utils"
import { bundleNRequire } from "bundle-n-require"

type Options = {
  out?: string
  watch?: string
}

export const run = async () => {
  await initCLI()

  program
    .command("tokens <source>")
    .option("--out <path>", `output file to ${path.join(...themePath)}`)
    .option("--watch [path]", "Watch directory for changes and rebuild")
    .action(
      async (
        themeFile: string,
        { out: outFile, watch: watchFile }: Options,
      ) => {
        const readFile = async () => {
          const filePath = path.resolve(themeFile)
          const { mod: theme, dependencies } = await bundleNRequire(filePath)

          return { theme, dependencies }
        }

        let file = await readFile()

        const buildFile = async () => {
          await generateThemeTypings({ theme: file.theme, outFile })

          if (watchFile) console.log("\n", "⌛️ Watching for changes...")
        }

        if (watchFile) {
          const watchPath =
            typeof watchFile === "string" ? watchFile : file.dependencies

          chokidar
            .watch(watchPath)
            .on("ready", buildFile)
            .on("change", async (filePath) => {
              console.log("📦 File changed", filePath)

              file = await readFile()

              return buildFile()
            })
        } else {
          await buildFile()
        }
      },
    )

  program.on("--help", () => {
    console.info(`\nExample call:\n  $ yamada-cli tokens theme.ts\n`)
  })

  program.parse()
}
