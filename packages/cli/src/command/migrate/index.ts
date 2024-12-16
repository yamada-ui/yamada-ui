import { Command } from "commander"
import { z } from "zod"
import { migrateDeprecatedProps } from "./migrateDeprecatedProps"

const addOptionsSchema = z.object({
  cwd: z.string().optional(),
  dryRun: z.boolean().optional(),
})

export const migrate = new Command("migrate")
  .description("Migrate deprecated props from v1.7 to v2.0")
  .option("--cwd <path>", "Current working directory", process.cwd())
  .option("--dry-run", "Run migration without saving changes")
  .action(async (opts) => {
    const parseResult = addOptionsSchema.safeParse(opts)

    if (!parseResult.success) {
      const { error } = parseResult
      throw new Error(error.message, { cause: error })
    }

    const { cwd, dryRun } = parseResult.data
    await migrateDeprecatedProps({ cwd: cwd ?? process.cwd(), dryRun })

    console.log("migrate completed")
  })
