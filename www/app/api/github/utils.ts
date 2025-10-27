import crypto from "crypto"

export function generateSignature(body: any) {
  const hmac = crypto.createHmac("sha256", process.env.GITHUB_API_SECRET!)

  const digest = "sha256=" + hmac.update(JSON.stringify(body)).digest("hex")

  return digest
}

export function verifySignature(signature: null | string, body: any) {
  if (!signature) return false

  const digest = generateSignature(body)

  return signature === digest
}

export function getSignature(req: Request) {
  return (
    req.headers.get("x-hub-signature-256") ||
    req.headers.get("x-signature-256") ||
    req.headers.get("x-signature")
  )
}
