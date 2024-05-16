import path from "path"
import { CONSTANT } from "constant"

export const getResolvedPath = (targetPath: string) =>
  path.join(
    /^\/?docs\//.test(targetPath) ? CONSTANT.PATH.ROOT : process.cwd(),
    targetPath,
  )
