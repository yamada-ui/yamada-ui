import { getRegistry, isRegistryTag } from "@/utils/registry"

export const dynamic = "force-dynamic"

export async function GET(
  _request: Request,
  context: { params: Promise<{ path: string[]; tag: string }> },
) {
  const { path, tag } = await context.params

  if (!isRegistryTag(tag)) return new Response(null, { status: 404 })

  try {
    const res = await getRegistry(tag, path.join("/"))

    if (!res)
      return new Response(null, {
        headers: { "Cache-Control": "no-store" },
        status: 404,
      })

    return res
  } catch {
    return new Response(null, {
      headers: { "Cache-Control": "no-store" },
      status: 503,
    })
  }
}
