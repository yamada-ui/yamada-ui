import type { NextApiRequest, NextApiResponse } from "next"
import httpMocks from "node-mocks-http"
import handler from "./index.api"
import { generateSignature } from "utils/github"

describe("updatePullRequests", () => {
  test("responds 200 to GET", async () => {
    const body = {
      owner: "yamada-ui",
      repo: "yamada-ui",
      publish: false,
      octokit: false,
      issue: false,
    }

    const signature = generateSignature(body)

    const req = httpMocks.createRequest<NextApiRequest>({
      headers: {
        "x-hub-signature-256": signature,
      },
      body,
    })
    const res = httpMocks.createResponse<NextApiResponse>()

    await handler(req, res)

    expect(res.statusCode).toBe(200)
  })
})
