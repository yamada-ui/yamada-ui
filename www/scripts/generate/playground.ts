import fs from "fs"
import path from "path"

function main() {
  fs.copyFileSync(
    path.join(process.cwd(), "node_modules/esbuild-wasm/esbuild.wasm"),
    path.join(process.cwd(), "public/esbuild.wasm"),
  )
}

main()
