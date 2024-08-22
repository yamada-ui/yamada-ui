import path from "path"
import { copy } from "../../fs"
import type { InstallTemplate } from "../index.types"
import { templatePath } from "../utils"

export const install: InstallTemplate<"next"> = async (
  projectPath,
  _projectName,
  _typescript,
  { appRouter },
) => {
  const patterns = ["**"]
  const cwd = path.join(templatePath, "next", appRouter ? "app" : "pages")

  await copy(patterns, projectPath, {
    parents: true,
    cwd,
  })
}
