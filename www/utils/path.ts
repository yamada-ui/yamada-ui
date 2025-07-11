import { CONSTANT } from "constant"
import path from "path"

export const getResolvedPath = (targetPath: string) =>
  path.join(
    /^\/?www\//.test(targetPath) ? CONSTANT.PATH.ROOT : process.cwd(),
    targetPath,
  )
