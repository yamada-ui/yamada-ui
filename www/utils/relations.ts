import type { Relations } from "@/data"

export async function getRelations(cwd = "@") {
  const data = (
    await import(`${cwd}/data/relations.json`, {
      with: { type: "json" },
    })
  ).default as Relations

  return data
}
