type WindowWithEyeDropper = {
  EyeDropper: any
} & typeof globalThis &
  Window

const mockEyeDropperFn = vi.fn()

export const mockEyeDropper = () => {
  ;(window as WindowWithEyeDropper).EyeDropper = mockEyeDropperFn
}

export const resetEyeDropperMock = () => {
  ;(window as WindowWithEyeDropper).EyeDropper = undefined
}
