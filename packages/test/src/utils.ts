import { act } from "@testing-library/react"

export const queue = (): Promise<void> => act(() => Promise.resolve())

export const nextTick = (): Promise<any> =>
  act(
    () =>
      new Promise((resolve) => requestAnimationFrame(() => resolve(void 0))),
  )

export const sleep = async (ms = 16): Promise<void> => {
  await act(() => new Promise((resolve) => setTimeout(resolve, ms)))
  await nextTick()
}
