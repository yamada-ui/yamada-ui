import { a11y, render, screen } from "#test"
import { Avatar, AvatarGroup } from "./"

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
})

describe("<AvatarGroup />", () => {
  test("passes a11y checks", async () => {
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
})
