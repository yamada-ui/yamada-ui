import { a11y, render, screen } from "@yamada-ui/test"
import { Avatar, AvatarGroup } from "../src"

describe("<AvatarGroup />", () => {
  test("passes a11y test", async () => {
    await a11y(
      <AvatarGroup>
        <Avatar />
      </AvatarGroup>,
      {
        axeOptions: {
          rules: {
            "svg-img-alt": { enabled: false },
          },
        },
      },
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

  test("does not render a number avatar showing count of truncated avatars if max is equal to avatars given", async () => {
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

  test("does not render a number avatar showing count of truncated avatars if max is more than avatars given", async () => {
    const tools = render(
      <AvatarGroup max={6}>
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
      </AvatarGroup>,
    )
    const moreLabel = tools.container.querySelector(".ui-avatar__excess")
    expect(moreLabel).not.toBeInTheDocument()
  })
})
