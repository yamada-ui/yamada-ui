import { build } from "esbuild"
import { realpathSync } from "fs"
import nodeEval from "node-eval"
import { Script } from "vm"

export const getModule = async (file: string, cwd: string) => {
  const result = await build({
    absWorkingDir: cwd,
    bundle: true,
    entryPoints: [file],
    format: "cjs",
    mainFields: ["module", "main"],
    metafile: true,
    outfile: "out.js",
    platform: "node",
    sourcemap: false,
    write: false,
  })
  const { text: code } = result.outputFiles[0]
  const dependencies = result.metafile
    ? Object.keys(result.metafile.inputs)
    : []

  try {
    const realFileName = realpathSync.native(file)

    const script = new Script(code, { filename: realFileName })
    const mod = { exports: {} }
    const require = (id: string): any =>
      id === realFileName ? mod.exports : require(id)

    script.runInThisContext()(mod.exports, require, mod)

    return { code, dependencies, mod }
  } catch {
    const mod = nodeEval(code)

    return { code, dependencies, mod }
  }
}
