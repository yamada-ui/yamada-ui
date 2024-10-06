import path from "path"

export const PATH = {
  ENV: path.resolve(process.cwd(), "..", ".env"),
  ROOT: path.resolve(process.cwd(), ".."),
}
