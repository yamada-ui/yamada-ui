import path from "path"

export const PATH = {
  ROOT: path.resolve(process.cwd(), ".."),
  ENV: path.resolve(process.cwd(), "..", ".env"),
}
