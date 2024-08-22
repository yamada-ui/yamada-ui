import { execSync } from "child_process"
import dns from "dns/promises"
import { URL } from "url"
import spawn from "cross-spawn"
import validateProjectName from "validate-npm-package-name"
import type { Options } from ".."

export type PackageManager = "npm" | "pnpm" | "yarn" | "bun"

export const getPackageManager = ({
  useNpm,
  usePnpm,
  useYarn,
  useBun,
}: Options): PackageManager => {
  if (useNpm) return "npm"
  if (usePnpm) return "pnpm"
  if (useYarn) return "yarn"
  if (useBun) return "bun"

  const userAgent = process.env.npm_config_user_agent || ""

  if (userAgent.startsWith("yarn")) return "yarn"
  if (userAgent.startsWith("pnpm")) return "pnpm"
  if (userAgent.startsWith("bun")) return "bun"

  return "npm"
}

export const validatePackageName = (name: string) => {
  const nameValidation = validateProjectName(name)

  return [...(nameValidation.errors ?? []), ...(nameValidation.warnings ?? [])]
}

const getProxy = (): string | undefined => {
  if (process.env.https_proxy) return process.env.https_proxy

  try {
    const httpsProxy = execSync("npm config get https-proxy").toString().trim()

    return httpsProxy !== "null" ? httpsProxy : undefined
  } catch {
    return
  }
}

export const isOnline = async (): Promise<boolean> => {
  try {
    await dns.lookup("registry.yarnpkg.com")

    return true
  } catch {
    const proxy = getProxy()

    if (!proxy) return false

    const { hostname } = new URL(proxy)

    if (!hostname) return false

    try {
      await dns.lookup(hostname)

      return true
    } catch {
      return false
    }
  }
}

export const installDependencies = async (
  pkgManager: PackageManager,
  cwd?: string,
) => {
  const isYarn = pkgManager === "yarn"
  const args = ["install"]

  if (isYarn && !(await isOnline())) args.push("--offline")

  return new Promise<void>((resolve, reject) => {
    const child = spawn(pkgManager, args, {
      stdio: "ignore",
      cwd,
      env: {
        ...process.env,
        ADBLOCK: "1",
        NODE_ENV: "development",
        DISABLE_OPENCOLLECTIVE: "1",
      },
    })

    child.on("close", (code) => {
      if (code !== 0) {
        reject({ command: `${pkgManager} ${args.join(" ")}` })
      } else {
        resolve()
      }
    })
  })
}
