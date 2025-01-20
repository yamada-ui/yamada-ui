import { defineTokens } from "../../core"

export const durations = defineTokens.durations({
  fastest: "50ms",
  faster: "100ms",
  fast: "150ms",
  moderate: "200ms",
  slow: "300ms",
  slower: "400ms",
  slowest: "500ms",
})
