import { detect } from "@antfu/ni"

export async function getPackageManager(
  targetDir: string,
): Promise<"bun" | "deno" | "npm" | "pnpm" | "yarn"> {
  const packageManager = await detect({ cwd: targetDir, programmatic: true })

  switch (packageManager) {
    case "yarn@berry":
      return "yarn"
    case "yarn":
      return "yarn"
    case "pnpm":
      return "pnpm"
    case "pnpm@6":
      return "pnpm"
    case "bun":
      return "bun"
    case "deno":
      return "deno"
    default:
      return "npm"
  }
}
