import { renderHook } from "#test/browser"
import { useDisclosure } from "./use-disclosure"

describe("useDisclosure", () => {
  test("should initialize with open as false by default", async () => {
    const { result } = await renderHook(() => useDisclosure())

    expect(result.current.open).toBeFalsy()
  })

  test("should initialize with open as true when defaultOpen is true", async () => {
    const { result } = await renderHook(() =>
      useDisclosure({ defaultOpen: true }),
    )

    expect(result.current.open).toBeTruthy()
  })

  test("should set open to true when onOpen is called", async () => {
    const { act, result } = await renderHook(() => useDisclosure())

    expect(result.current.open).toBeFalsy()

    await act(() => {
      result.current.onOpen()
    })

    expect(result.current.open).toBeTruthy()
  })

  test("should set open to false when onClose is called", async () => {
    const { act, result } = await renderHook(() =>
      useDisclosure({ defaultOpen: true }),
    )

    expect(result.current.open).toBeTruthy()

    await act(() => {
      result.current.onClose()
    })

    expect(result.current.open).toBeFalsy()
  })

  test("should toggle open state when onToggle is called", async () => {
    const { act, result } = await renderHook(() => useDisclosure())

    expect(result.current.open).toBeFalsy()

    await act(() => {
      result.current.onToggle()
    })

    expect(result.current.open).toBeTruthy()

    await act(() => {
      result.current.onToggle()
    })

    expect(result.current.open).toBeFalsy()
  })

  test("should not change state in controlled mode", async () => {
    const { act, result } = await renderHook(() =>
      useDisclosure({ open: false }),
    )

    expect(result.current.open).toBeFalsy()

    await act(() => {
      result.current.onOpen()
    })

    expect(result.current.open).toBeFalsy()

    const { act: act2, result: result2 } = await renderHook(() =>
      useDisclosure({ open: true }),
    )

    expect(result2.current.open).toBeTruthy()

    await act2(() => {
      result2.current.onClose()
    })

    expect(result2.current.open).toBeTruthy()
  })

  test("should call onOpen callback when opening", async () => {
    const onOpen = vi.fn()
    const { act, result } = await renderHook(() => useDisclosure({ onOpen }))

    await act(() => {
      result.current.onOpen()
    })

    expect(onOpen).toHaveBeenCalledTimes(1)
  })

  test("should call onClose callback when closing", async () => {
    const onClose = vi.fn()
    const { act, result } = await renderHook(() =>
      useDisclosure({ defaultOpen: true, onClose }),
    )

    await act(() => {
      result.current.onClose()
    })

    expect(onClose).toHaveBeenCalledTimes(1)
  })

  test("should call callback before state change with timing before", async () => {
    let openDuringCallback: boolean | undefined

    const { act, result } = await renderHook(() =>
      useDisclosure({
        timing: "before",
        onOpen: () => {
          openDuringCallback = result.current.open
        },
      }),
    )

    await act(() => {
      result.current.onOpen()
    })

    expect(openDuringCallback).toBeFalsy()
    expect(result.current.open).toBeTruthy()
  })

  test("should call callback after state change with timing after", async () => {
    let closedDuringCallback: boolean | undefined

    const { act, result } = await renderHook(() =>
      useDisclosure({
        defaultOpen: true,
        timing: "after",
        onClose: () => {
          closedDuringCallback = result.current.open
        },
      }),
    )

    expect(result.current.open).toBeTruthy()

    await act(() => {
      result.current.onClose()
    })

    expect(closedDuringCallback).toBeFalsy()
    expect(result.current.open).toBeFalsy()
  })
})
