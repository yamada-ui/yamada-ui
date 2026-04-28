import { a11y, page, render } from "#test/browser"
import { Avatar, AvatarGroup } from "./"

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
