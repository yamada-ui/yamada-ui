import { act } from "@testing-library/react"

export async function wait(ms = 16) {
  await act(async () => new Promise((resolve) => setTimeout(resolve, ms)))

  await act(
    async () =>
      new Promise((resolve) => requestAnimationFrame(() => resolve(void 0))),
  )
}
