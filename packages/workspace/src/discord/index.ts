export async function sendDiscord(url: string | undefined, content: string) {
  if (!url) throw new Error("Missing Discord Webhook URL\n")

  const data = { content, username: "GitHub" }

  const headers = { "Content-Type": "application/json" }
  const body = JSON.stringify(data)

  const { ok } = await fetch(url, { body, headers, method: "POST" })

  if (!ok) throw new Error("Failed to send message to Discord\n")
}
