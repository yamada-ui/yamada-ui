import { a11y, render, screen } from "#test"
import { Avatar, AvatarGroup } from "./"

describe("<Avatar />", () => {
  test("renders an image", async () => {
    render(<Avatar name="Hirotomo Yamada" src="https://bit.ly/dan-abramov" />)

    const img = await screen.findByAltText("Hirotomo Yamada")
    expect(img).toBeInTheDocument()
  })

  test("renders a name avatar if no src", async () => {
    render(<Avatar name="Hirotomo Yamada" />)

    const initials = await screen.findByText("HY")
    expect(initials).toBeInTheDocument()
  })

  test("renders a single character if only one name is passed", async () => {
    render(<Avatar name="Hirotomo" />)

    const initials = await screen.findByText("H")
    expect(initials).toBeInTheDocument()
  })

  test("renders the first characters of the first and last name when more than two names are passed", async () => {
    render(<Avatar name="Hirotomo React Yamada" />)

    const initials = await screen.findByText("HY")
    expect(initials).toBeInTheDocument()
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
    const moreLabel = screen.getByText("+3")
    expect(moreLabel).toBeInTheDocument()
  })

  test("does not render a number avatar showing count of truncated avatars if max is equal to avatars given", () => {
    const { container } = render(
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

  test("does not render a number avatar showing count of truncated avatars if max is more than avatars given", () => {
    const { container } = render(
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

  test("renders child avatars with the given variant", () => {
    const { container: subtleContainer } = render(
      <AvatarGroup.Root variant="subtle">
        <AvatarGroup.Item name="Hirotomo Yamada" />
      </AvatarGroup.Root>,
    )
    const { container: solidContainer } = render(
      <AvatarGroup.Root variant="solid">
        <AvatarGroup.Item name="Hirotomo Yamada" />
      </AvatarGroup.Root>,
    )

    const subtleAvatar = subtleContainer.querySelector(".ui-avatar__root")
    const solidAvatar = solidContainer.querySelector(".ui-avatar__root")

    expect(subtleAvatar?.className).not.toBe(solidAvatar?.className)
  })

  test("renders child avatars with the given size", () => {
    const { container: lgContainer } = render(
      <AvatarGroup.Root size="lg">
        <AvatarGroup.Item name="Hirotomo Yamada" />
      </AvatarGroup.Root>,
    )
    const { container: mdContainer } = render(
      <AvatarGroup.Root size="md">
        <AvatarGroup.Item name="Hirotomo Yamada" />
      </AvatarGroup.Root>,
    )

    const lgAvatar = lgContainer.querySelector(".ui-avatar__root")
    const mdAvatar = mdContainer.querySelector(".ui-avatar__root")

    expect(lgAvatar?.className).not.toBe(mdAvatar?.className)
  })

  test("renders child avatars with the given colorScheme", () => {
    const { container: primaryContainer } = render(
      <AvatarGroup.Root colorScheme="primary">
        <AvatarGroup.Item name="Hirotomo Yamada" />
      </AvatarGroup.Root>,
    )
    const { container: defaultContainer } = render(
      <AvatarGroup.Root>
        <AvatarGroup.Item name="Hirotomo Yamada" />
      </AvatarGroup.Root>,
    )

    const primaryAvatar = primaryContainer.querySelector(".ui-avatar__root")
    const defaultAvatar = defaultContainer.querySelector(".ui-avatar__root")

    expect(primaryAvatar?.className).not.toBe(defaultAvatar?.className)
  })

  test("renders child avatars with the given shape", () => {
    const { container: squareContainer } = render(
      <AvatarGroup.Root shape="square">
        <AvatarGroup.Item name="Hirotomo Yamada" />
      </AvatarGroup.Root>,
    )
    const { container: circleContainer } = render(
      <AvatarGroup.Root shape="circle">
        <AvatarGroup.Item name="Hirotomo Yamada" />
      </AvatarGroup.Root>,
    )

    const squareAvatar = squareContainer.querySelector(".ui-avatar__root")
    const circleAvatar = circleContainer.querySelector(".ui-avatar__root")

    expect(squareAvatar?.className).not.toBe(circleAvatar?.className)
  })
})
