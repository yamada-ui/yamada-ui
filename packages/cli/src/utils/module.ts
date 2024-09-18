import { realpathSync } from "fs"
import { Script } from "vm"
import { build } from "esbuild"
import nodeEval from "node-eval"

export const getModule = async (file: string, cwd: string) => {
  const result = await build({
    platform: "node",
    format: "cjs",
    mainFields: ["module", "main"],
    absWorkingDir: cwd,
    entryPoints: [file],
    outfile: "out.js",
    write: false,
    bundle: true,
    sourcemap: false,
    metafile: true,
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

    return { mod, code, dependencies }
  } catch {
    const mod = nodeEval(code)

    return { mod, code, dependencies }
  }
}
