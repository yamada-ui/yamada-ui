import path from "path"
import { PATH } from "constant/path"

export const getResolvedPath = (targetPath: string) =>
  path.join(
    /^\/?docs\//.test(targetPath) ? PATH.ROOT : process.cwd(),
    targetPath,
  )
