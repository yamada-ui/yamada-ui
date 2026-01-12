export function createTable(headers: string[], rows: string[][]) {
  return [
    `| ${headers.join(" | ")} |`,
    `| ${headers.map(() => "----").join(" | ")} |`,
    ...rows.map((columns) => `| ${columns.join(" | ")} |`),
  ].join("\n")
}
