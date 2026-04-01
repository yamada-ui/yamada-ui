export async function deferScreenshotWork(timeout = 120): Promise<void> {
  await waitForNextFrame()

  if (typeof window.requestIdleCallback === "function") {
    await new Promise<void>((resolve) => {
      window.requestIdleCallback(() => resolve(), { timeout })
    })
  } else {
    await new Promise<void>((resolve) => {
      window.setTimeout(resolve, 0)
    })
  }
}

function waitForNextFrame(): Promise<void> {
  return new Promise<void>((resolve) => {
    window.requestAnimationFrame(() => resolve())
  })
}
