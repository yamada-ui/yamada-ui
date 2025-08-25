import { HttpsProxyAgent } from "https-proxy-agent"

export const agent = process.env.https_proxy
  ? new HttpsProxyAgent(process.env.https_proxy)
  : undefined
