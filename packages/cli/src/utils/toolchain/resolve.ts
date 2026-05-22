export type Detection = "config" | "dependency" | false

export async function resolveAdapter<
  Y extends { name: string; detect(cwd: string): Promise<Detection> },
>(adapters: Y[], fallback: Y, cwd: string, tool?: string): Promise<Y> {
  if (tool && tool !== "auto") {
    const named = adapters.find((adapter) => adapter.name === tool)

    if (named) return named
  }

  let dependencyMatch: undefined | Y

  for (const adapter of adapters) {
    const detection = await adapter.detect(cwd)

    if (detection === "config") return adapter
    if (detection === "dependency") dependencyMatch ??= adapter
  }

  return dependencyMatch ?? fallback
}
