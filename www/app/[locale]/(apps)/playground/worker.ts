import * as esbuild from "esbuild-wasm"

let initialized = false

self.addEventListener("message", async (event) => {
  const { type, code } = event.data

  if (type === "build") {
    try {
      if (!initialized) {
        await esbuild.initialize({
          wasmURL: new URL("/playground/esbuild.wasm", self.location.origin)
            .href,
        })
        initialized = true
      }

      const result = await esbuild.transform(code, {
        target: "es2020",
        format: "esm",
        jsx: "automatic",
        loader: "tsx",
      })

      self.postMessage({
        type: "transform",
        code: result.code,
      })
    } catch (err) {
      self.postMessage({
        type: "error",
        message: err instanceof Error ? err.message : String(err),
      })
    }
  }
})
