import { a11y, page, render, renderHook } from "#test/browser"
import { Avatar, AvatarGroup, useAvatar } from "./"

describe("<Avatar />", () => {
  test("renders an image", async () => {
    await render(
      <Avatar name="Hirotomo Yamada" src="https://bit.ly/dan-abramov" />,
    )

    await expect
      .element(page.getByAltText("Hirotomo Yamada"))
      .toBeInTheDocument()
  })

  test("renders a name avatar if no src", async () => {
    await render(<Avatar name="Hirotomo Yamada" />)

    await expect.element(page.getByText("HY")).toBeInTheDocument()
  })

  test("renders a single character if only one name is passed", async () => {
    await render(<Avatar name="Hirotomo" />)

    await expect.element(page.getByText("H")).toBeInTheDocument()
  })

  test("renders the first characters of the first and last name when more than two names are passed", async () => {
    await render(<Avatar name="Hirotomo React Yamada" />)

    await expect.element(page.getByText("HY")).toBeInTheDocument()
  })

  test("merges getRootProps values while keeping hook-owned data attributes", async () => {
    const restRef = vi.fn()
    const callerRef = vi.fn()
    const restOnClick = vi.fn()
    const callerOnClick = vi.fn()

    const { result } = await renderHook(() =>
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
    const rootRef = rootProps.ref as (node: HTMLDivElement | null) => void
    rootRef(rootNode)

    expect(restRef).toHaveBeenCalledTimes(1)
    expect(callerRef).toHaveBeenCalledTimes(1)

    rootProps.onClick?.({} as never)

    expect(restOnClick).toHaveBeenCalledTimes(1)
    expect(callerOnClick).toHaveBeenCalledTimes(1)
  })
})

describe("<AvatarGroup />", () => {
  test("renders component correctly", async () => {
    await a11y(
      <AvatarGroup.Root>
        <AvatarGroup.Item name="Hirotomo Yamada" />
      </AvatarGroup.Root>,
    )
  })

  test("renders a number avatar showing count of truncated avatars", async () => {
    await render(
      <AvatarGroup.Root max={2}>
        <AvatarGroup.Item />
        <AvatarGroup.Item />
        <AvatarGroup.Item />
        <AvatarGroup.Item />
        <AvatarGroup.Item />
      </AvatarGroup.Root>,
    )

    await expect.element(page.getByText("+3")).toBeInTheDocument()
  })

  test("does not render a number avatar showing count of truncated avatars if max is equal to avatars given", async () => {
    const { container } = await render(
      <AvatarGroup.Root max={4}>
        <AvatarGroup.Item />
        <AvatarGroup.Item />
        <AvatarGroup.Item />
        <AvatarGroup.Item />
      </AvatarGroup.Root>,
    )

    const moreLabel = container.querySelector(".ui-avatar__excess")
    expect(moreLabel).not.toBeInTheDocument()
  })

  test("does not render a number avatar showing count of truncated avatars if max is more than avatars given", async () => {
    const { container } = await render(
      <AvatarGroup.Root max={6}>
        <AvatarGroup.Item />
        <AvatarGroup.Item />
        <AvatarGroup.Item />
        <AvatarGroup.Item />
      </AvatarGroup.Root>,
    )

    const moreLabel = container.querySelector(".ui-avatar__excess")
    expect(moreLabel).not.toBeInTheDocument()
  })

  test("should have the correct displayName", () => {
    expect(AvatarGroup.Root.displayName).toBe("AvatarGroup")
  })
})
