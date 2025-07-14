import { a11y, render, screen } from "@/test"
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
  test("passes a11y test", async () => {
    await a11y(
      <AvatarGroup>
        <Avatar name="Hirotomo Yamada" />
      </AvatarGroup>,
    )
  })

  test("renders a number avatar showing count of truncated avatars", () => {
    render(
      <AvatarGroup max={2}>
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
      </AvatarGroup>,
    )
    const moreLabel = screen.getByText("+3")
    expect(moreLabel).toBeInTheDocument()
  })

  test("does not render a number avatar showing count of truncated avatars if max is equal to avatars given", () => {
    const { container } = render(
      <AvatarGroup max={4}>
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
      </AvatarGroup>,
    )
    const moreLabel = container.querySelector(".ui-avatar__excess")
    expect(moreLabel).not.toBeInTheDocument()
  })

  test("does not render a number avatar showing count of truncated avatars if max is more than avatars given", () => {
    const { container } = render(
      <AvatarGroup max={6}>
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
      </AvatarGroup>,
    )
    const moreLabel = container.querySelector(".ui-avatar__excess")
    expect(moreLabel).not.toBeInTheDocument()
  })

  test("should have the correct displayName", () => {
    expect(AvatarGroup.displayName).toBe("AvatarGroup")
  })
})
