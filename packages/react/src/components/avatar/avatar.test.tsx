import { a11y, render, renderHook, screen } from "#test"
import { Avatar, AvatarGroup, useAvatar, useAvatarGroup } from "./"

describe("<Avatar />", () => {
  test("passes a11y checks", async () => {
    await a11y(<Avatar name="Hirotomo Yamada" />)
  })

  test("renders an image", () => {
    render(<Avatar name="Hirotomo Yamada" src="https://bit.ly/dan-abramov" />)

    expect(screen.getByAltText("Hirotomo Yamada")).toBeInTheDocument()
  })

  test("renders a name avatar if no src", () => {
    render(<Avatar name="Hirotomo Yamada" />)

    expect(screen.getByText("HY")).toBeInTheDocument()
  })

  test("renders a single character if only one name is passed", () => {
    render(<Avatar name="Hirotomo" />)

    expect(screen.getByText("H")).toBeInTheDocument()
  })

  test("renders initials from first and last name when three or more words are passed", () => {
    render(<Avatar name="Hirotomo React Yamada" />)

    expect(screen.getByText("HY")).toBeInTheDocument()
  })

  test("merges getRootProps values while keeping hook-owned data attributes", () => {
    const restRef = vi.fn()
    const callerRef = vi.fn()
    const restOnClick = vi.fn()
    const callerOnClick = vi.fn()

    const { result } = renderHook(() =>
      useAvatar({
        id: "from-rest",
        ref: (...args) => {
          restRef(...args)
        },
        className: "from-rest",
        style: { backgroundColor: "red", paddingTop: "4px" },
        "data-fallback": "from-rest",
        "data-loaded": "",
        fallback: "fallback",
        onClick: restOnClick,
      }),
    )

    const rootProps = result.current.getRootProps({
      id: "from-caller",
      ref: (...args) => {
        callerRef(...args)
      },
      className: "from-caller",
      style: { color: "blue", paddingTop: "8px" },
      "data-fallback": "from-caller",
      "data-loaded": "",
      onClick: callerOnClick,
    })

    expect(rootProps.className).toContain("from-rest")
    expect(rootProps.className).toContain("from-caller")
    expect(rootProps.style).toMatchObject({
      backgroundColor: "red",
      color: "blue",
      paddingTop: "8px",
    })
    expect(rootProps.id).toBe("from-caller")
    expect(rootProps["data-fallback"]).toBe("")
    expect(rootProps["data-loaded"]).toBeUndefined()

    const rootNode = document.createElement("div")
    if (typeof rootProps.ref === "function") rootProps.ref(rootNode)

    expect(restRef).toHaveBeenCalledTimes(1)
    expect(callerRef).toHaveBeenCalledTimes(1)

    // @ts-expect-error - synthetic click event payload is not read by the spies
    rootProps.onClick?.({})

    expect(restOnClick).toHaveBeenCalledTimes(1)
    expect(callerOnClick).toHaveBeenCalledTimes(1)
  })
})

describe("<AvatarGroup />", () => {
  test("passes a11y checks", async () => {
    await a11y(
      <AvatarGroup.Root>
        <AvatarGroup.Item name="Hirotomo Yamada" />
      </AvatarGroup.Root>,
    )
  })

  test("sets a stable display name for root", () => {
    expect(AvatarGroup.Root.displayName).toBe("AvatarGroup")
  })

  test("renders a number avatar showing count of truncated avatars", () => {
    render(
      <AvatarGroup.Root max={2}>
        <AvatarGroup.Item />
        <AvatarGroup.Item />
        <AvatarGroup.Item />
        <AvatarGroup.Item />
        <AvatarGroup.Item />
      </AvatarGroup.Root>,
    )

    expect(screen.getByText("+3")).toBeInTheDocument()
  })

  test("does not render a number avatar when max equals the number of avatars", () => {
    render(
      <AvatarGroup.Root max={4}>
        <AvatarGroup.Item />
        <AvatarGroup.Item />
        <AvatarGroup.Item />
        <AvatarGroup.Item />
      </AvatarGroup.Root>,
    )

    expect(screen.queryByText(/^\+/)).not.toBeInTheDocument()
  })

  test("does not render a number avatar when max is greater than the number of avatars", () => {
    render(
      <AvatarGroup.Root max={6}>
        <AvatarGroup.Item />
        <AvatarGroup.Item />
        <AvatarGroup.Item />
        <AvatarGroup.Item />
      </AvatarGroup.Root>,
    )

    expect(screen.queryByText(/^\+/)).not.toBeInTheDocument()
  })

  test("merges root props and keeps role fixed to group", () => {
    const hookOnClick = vi.fn()
    const userOnClick = vi.fn()
    const hookRef = vi.fn()
    const userRef = vi.fn()

    const { result } = renderHook(
      () =>
        useAvatarGroup({
          id: "hook-id",
          ref: hookRef,
          className: "hook",
          style: { backgroundColor: "tomato" },
          "data-testid": "group-root",
          children: [],
          role: "presentation",
          onClick: hookOnClick,
        }),
      { withProvider: false },
    )

    const merged = result.current.getRootProps({
      id: "user-id",
      ref: userRef,
      className: "user",
      style: { color: "white" },
      role: "toolbar",
      onClick: userOnClick,
    })

    expect(merged.role).toBe("group")
    expect(merged.id).toBe("user-id")
    expect(String(merged.className)).toContain("hook")
    expect(String(merged.className)).toContain("user")
    expect(merged.style).toMatchObject({
      backgroundColor: "tomato",
      color: "white",
    })
    expect(merged["data-testid"]).toBe("group-root")

    const node = document.createElement("div")

    expect(merged.ref).toBeTypeOf("function")
    if (typeof merged.ref === "function") merged.ref(node)

    expect(hookRef).toHaveBeenCalledWith(node)
    expect(userRef).toHaveBeenCalledWith(node)

    // @ts-expect-error - synthetic click event payload is not read by the spies
    merged.onClick?.({})

    expect(hookOnClick).toHaveBeenCalledTimes(1)
    expect(userOnClick).toHaveBeenCalledTimes(1)
  })
})
