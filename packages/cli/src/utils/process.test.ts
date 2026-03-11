import { describe, expect, test } from "vitest"
import { agent } from "./process"

describe("agent", () => {
  test("should match proxy environment", () => {
    const expected = process.env.https_proxy ? "defined" : "undefined"

    expect(agent === undefined ? "undefined" : "defined").toBe(expected)
  })
})
