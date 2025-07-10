import type { NextApiRequest, NextApiResponse } from "next"
import httpMocks from "node-mocks-http"
import { generateSignature } from "utils/github"
import handler from "./index.api"

describe("updateIssues", () => {
  test("responds 200 to GET", async () => {
    const body = {
      octokit: false,
      owner: "yamada-ui",
      publish: false,
      pullRequest: false,
      repo: "yamada-ui",
    }

    const signature = generateSignature(body)

    const req = httpMocks.createRequest<NextApiRequest>({
      body,
      headers: {
        "x-hub-signature-256": signature,
      },
    })
    const res = httpMocks.createResponse<NextApiResponse>()

    await handler(req, res)

    expect(res.statusCode).toBe(200)
  })
})
