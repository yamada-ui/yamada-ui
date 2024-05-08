import { act, mocks, render, screen } from "@yamada-ui/test"
import { Avatar, AvatarBadge } from "../src"

describe("<Avatar />", () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
    mocks.image().restore()
  })

  test("renders an image", async () => {
    const mock = mocks.image()
    mock.simulate("loaded")
    const { getByAltText } = render(
      <Avatar src="https://bit.ly/dan-abramov" name="Dan Abramov" />,
    )

    act(() => {
      vi.runAllTimers()
    })

    const img = getByAltText("Dan Abramov")
    expect(img).toBeInTheDocument()
  })

  test("fires onError if image fails to load", async () => {
    const mock = mocks.image()
    mock.simulate("error")

    const src = "https://bit.ly/dan-abramov"
    const name = "Dan Abramov"
    const onErrorFn = vi.fn()
    render(<Avatar src={src} name={name} onError={onErrorFn} />)

    act(() => {
      vi.runAllTimers()
    })

    expect(onErrorFn).toHaveBeenCalledTimes(1)
  })

  test("renders a name avatar if no src", () => {
    const { queryByText } = render(<Avatar name="Dan Abramov" />)
    const initials = queryByText("DA")
    expect(initials).toBeInTheDocument()
  })

  test("renders a single character if only one name is passed", () => {
    const { queryByText } = render(<Avatar name="Dan" />)
    const initials = queryByText("D")
    expect(initials).toBeInTheDocument()
  })

  test("renders the first characters of the first and last name when more than two names are passed", () => {
    const { queryByText } = render(<Avatar name="Dan React Abramov" />)
    const initials = queryByText("DA")
    expect(initials).toBeInTheDocument()
  })
})

describe("<AvatarBadge />", () => {
  test("renders at specified placement top-start", () => {
    render(
      <Avatar
        name="Hirotomo Yamada"
        src="https://avatars.githubusercontent.com/u/84060430?v=4"
      >
        <AvatarBadge
          data-testid="avatar-badge"
          bg="primary"
          placement="top-start"
        />
      </Avatar>,
    )
    const style = window.getComputedStyle(screen.getByTestId("avatar-badge"))

    expect(style["top"]).toBe("0px")
    expect(style.getPropertyValue("inset-inline-start")).toBe("0px")
    expect(style["transform"]).toBe("translate(-25%, -25%)")
  })

  test("renders at specified placement top-end", () => {
    render(
      <Avatar
        name="Hirotomo Yamada"
        src="https://avatars.githubusercontent.com/u/84060430?v=4"
      >
        <AvatarBadge
          data-testid="avatar-badge"
          bg="primary"
          placement="top-end"
        />
      </Avatar>,
    )
    const style = window.getComputedStyle(screen.getByTestId("avatar-badge"))

    expect(style["top"]).toBe("0px")
    expect(style.getPropertyValue("inset-inline-end")).toBe("0px")
    expect(style["transform"]).toBe("translate(25%, -25%)")
  })

  test("renders at specified placement bottom-start", () => {
    render(
      <Avatar
        name="Hirotomo Yamada"
        src="https://avatars.githubusercontent.com/u/84060430?v=4"
      >
        <AvatarBadge
          data-testid="avatar-badge"
          bg="primary"
          placement="bottom-start"
        />
      </Avatar>,
    )
    const style = window.getComputedStyle(screen.getByTestId("avatar-badge"))

    expect(style["bottom"]).toBe("0px")
    expect(style.getPropertyValue("inset-inline-start")).toBe("0px")
    expect(style["transform"]).toBe("translate(-25%, 25%)")
  })

  test("renders at specified placement bottom-end", () => {
    render(
      <Avatar
        name="Hirotomo Yamada"
        src="https://avatars.githubusercontent.com/u/84060430?v=4"
      >
        <AvatarBadge
          data-testid="avatar-badge"
          bg="primary"
          placement="bottom-end"
        />
      </Avatar>,
    )
    const style = window.getComputedStyle(screen.getByTestId("avatar-badge"))

    expect(style["bottom"]).toBe("0px")
    expect(style.getPropertyValue("inset-inline-end")).toBe("0px")
    expect(style["transform"]).toBe("translate(25%, 25%)")
  })

  test("renders with ping animation", () => {
    render(
      <Avatar
        name="Hirotomo Yamada"
        src="https://avatars.githubusercontent.com/u/84060430?v=4"
      >
        <AvatarBadge
          data-testid="avatar-badge"
          bg="primary"
          ping
          pingColor="rgb(255, 0, 0)"
        />
      </Avatar>,
    )
    const pingEl = screen
      .getByTestId("avatar-badge")
      .querySelector(".ui-avatar__ping")
    expect(pingEl).toBeInTheDocument()
    const style = window.getComputedStyle(pingEl!)
    expect(style["background"]).toBe("rgb(255, 0, 0)")
    expect(style["animation"]).toMatch(
      /animation-.* 1.4s cubic-bezier\(0,0,0.2,1\) 0s infinite normal forwards running/,
    )
  })

  test("AvatarBadge has `ui-avatar__ping` class correctly", () => {
    render(
      <Avatar
        name="Hirotomo Yamada"
        src="https://avatars.githubusercontent.com/u/84060430?v=4"
      >
        <AvatarBadge
          data-testid="avatar-badge"
          bg="primary"
          ping
          pingColor="rgb(255, 0, 0)"
        />
      </Avatar>,
    )
    const pingEl = screen
      .getByTestId("avatar-badge")
      .querySelector(".ui-avatar__ping")
    expect(pingEl).toBeInTheDocument()
  })
})
