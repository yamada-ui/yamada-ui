export type Detection = "config" | "dependency" | false

export interface ToolchainAdapter {
  name: string
  detect(cwd: string): Promise<Detection>
}

export async function resolveAdapter<Y extends ToolchainAdapter>(
  adapters: Y[],
  fallback: Y["name"],
  cwd: string,
  tool?: string,
): Promise<Y> {
  if (tool && tool !== "auto") {
    const named = adapters.find((adapter) => adapter.name === tool)

    if (!named) throw new Error(`Tool "${tool}" is not registered.`)

    return named
  }

  const detections = await Promise.all(
    adapters.map((adapter) => adapter.detect(cwd)),
  )

  const configMatch = adapters.find((_, i) => detections[i] === "config")

  if (configMatch) return configMatch

  const dependencyMatch = adapters.find(
    (_, i) => detections[i] === "dependency",
  )

  if (dependencyMatch) return dependencyMatch

  const fallbackAdapter = adapters.find((adapter) => adapter.name === fallback)

  if (!fallbackAdapter)
    throw new Error(`Fallback adapter "${fallback}" not found in adapters.`)

  return fallbackAdapter
}
