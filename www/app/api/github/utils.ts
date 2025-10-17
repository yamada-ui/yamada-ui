import crypto from "crypto"

export function generateSignature(body: any) {
  const hmac = crypto.createHmac("sha256", process.env.GITHUB_API_SECRET!)

  const digest = "sha256=" + hmac.update(JSON.stringify(body)).digest("hex")

  return digest
}

export async function verifySignature(req: Request) {
  const signature =
    req.headers.get("x-signature-256") || req.headers.get("x-signature")

  if (!signature) return false

  const body = await req.json()
  const digest = generateSignature(body)

  return signature === digest
}
