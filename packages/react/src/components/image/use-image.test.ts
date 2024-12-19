import { shouldShowFallbackImage } from "./use-image"

describe("useImage", () => {
  test.each<{
    result: boolean
    status: "failed" | "loaded" | "loading" | "pending"
    strategy: "beforeLoadOrError" | "onError"
  }>([
    { result: true, status: "loading", strategy: "beforeLoadOrError" },
    { result: false, status: "loaded", strategy: "beforeLoadOrError" },
    { result: true, status: "failed", strategy: "beforeLoadOrError" },
    { result: true, status: "pending", strategy: "beforeLoadOrError" },
    { result: false, status: "loading", strategy: "onError" },
    { result: false, status: "loaded", strategy: "onError" },
    { result: true, status: "failed", strategy: "onError" },
    { result: false, status: "pending", strategy: "onError" },
  ])(
    "shouldShowFallbackImage with status: $status strategy:$strategy returns $result",
    ({ result, status, strategy }) => {
      expect(shouldShowFallbackImage(status, strategy)).toBe(result)
    },
  )
})
