import type { ExecOptions } from "child_process"
import { exec } from "child_process"
import { HttpsProxyAgent } from "https-proxy-agent"

export const agent = process.env.https_proxy
  ? new HttpsProxyAgent(process.env.https_proxy)
  : undefined

export async function execAsync(command: string, options: ExecOptions = {}) {
  return new Promise<string>((resolve, reject) => {
    exec(command, options, function (e, stdout) {
      return e ? reject(e) : resolve(stdout)
    })
  })
}
