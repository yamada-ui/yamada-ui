import { image } from "@yamada-ui/test"
import { act, render, screen } from "../../../test"
import { Avatar, AvatarBadge } from "./"

describe("<Avatar />", () => {
  beforeEach(() => {
    vi.useFakeTimers({ shouldAdvanceTime: true })
  })

  afterEach(() => {
    vi.useRealTimers()
    image().restore()
  })

  test("renders an image", async () => {
    const mock = image()
    mock.simulate("loaded")
    render(<Avatar name="Hirotomo Yamada" src="https://bit.ly/dan-abramov" />)

    act(() => {
      vi.runAllTimers()
    })

    const img = await screen.findByAltText("Hirotomo Yamada")
    expect(img).toBeInTheDocument()
  })

  test("fires onError if image fails to load", () => {
    const mock = image()
    mock.simulate("error")

    const src = "https://bit.ly/dan-abramov"
    const name = "Hirotomo Yamada"
    const onErrorFn = vi.fn()
    render(<Avatar name={name} src={src} onError={onErrorFn} />)

    act(() => {
      vi.runAllTimers()
    })

    expect(onErrorFn).toHaveBeenCalledTimes(1)
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

describe("<AvatarBadge />", () => {
  test("renders at specified placement top-start", async () => {
    render(
      <Avatar
        name="Hirotomo Yamada"
        src="https://avatars.githubusercontent.com/u/84060430?v=4"
      >
        <AvatarBadge
          aria-label="This is the avatar badge of Hirotomo Yamada."
          bg="primary"
          placement="top-start"
        />
      </Avatar>,
    )

    const avatarBadge = await screen.findByLabelText(
      /This is the avatar badge of Hirotomo Yamada\./i,
    )
    expect(avatarBadge).toHaveStyle({
      "inset-inline-start": "0px",
      top: "0px",
      transform: "translate(-25%, -25%)",
    })
  })

  test("renders at specified placement top-end", async () => {
    render(
      <Avatar
        name="Hirotomo Yamada"
        src="https://avatars.githubusercontent.com/u/84060430?v=4"
      >
        <AvatarBadge
          aria-label="This is the avatar badge of Hirotomo Yamada."
          bg="primary"
          placement="top-end"
        />
      </Avatar>,
    )

    const avatarBadge = await screen.findByLabelText(
      /This is the avatar badge of Hirotomo Yamada\./i,
    )
    expect(avatarBadge).toHaveStyle({
      "inset-inline-end": "0px",
      top: "0px",
      transform: "translate(25%, -25%)",
    })
  })

  test("renders at specified placement bottom-start", async () => {
    render(
      <Avatar
        name="Hirotomo Yamada"
        src="https://avatars.githubusercontent.com/u/84060430?v=4"
      >
        <AvatarBadge
          aria-label="This is the avatar badge of Hirotomo Yamada."
          bg="primary"
          placement="bottom-start"
        />
      </Avatar>,
    )
    const avatarBadge = await screen.findByLabelText(
      /This is the avatar badge of Hirotomo Yamada\./i,
    )

    expect(avatarBadge).toHaveStyle({
      bottom: "0px",
      "inset-inline-start": "0px",
      transform: "translate(-25%, 25%)",
    })
  })

  test("renders at specified placement bottom-end", async () => {
    render(
      <Avatar
        name="Hirotomo Yamada"
        src="https://avatars.githubusercontent.com/u/84060430?v=4"
      >
        <AvatarBadge
          aria-label="This is the avatar badge of Hirotomo Yamada."
          bg="primary"
          placement="bottom-end"
        />
      </Avatar>,
    )
    const avatarBadge = await screen.findByLabelText(
      /This is the avatar badge of Hirotomo Yamada\./i,
    )
    expect(avatarBadge).toHaveStyle({
      bottom: "0px",
      "inset-inline-end": "0px",
      transform: "translate(25%, 25%)",
    })
  })

  test("renders with ping animation", async () => {
    render(
      <Avatar
        name="Hirotomo Yamada"
        src="https://avatars.githubusercontent.com/u/84060430?v=4"
      >
        <AvatarBadge
          aria-label="This is the avatar badge of Hirotomo Yamada."
          bg="primary"
          ping
          pingColor="rgb(255, 0, 0)"
        />
      </Avatar>,
    )

    const badge = await screen.findByLabelText(
      /This is the avatar badge of Hirotomo Yamada\./i,
    )

    const pingEl = badge.querySelector(".ui-avatar__badge__ping")
    expect(pingEl).toBeInTheDocument()

    expect(pingEl).toHaveStyle({ background: "rgb(255, 0, 0)" })

    const style = window.getComputedStyle(pingEl!)
    expect(style.animation).toMatch(
      /animation-.* 1.4s cubic-bezier\(0,0,0.2,1\) 0s infinite normal forwards running/,
    )
  })

  test("should have the correct displayName and __ui__", () => {
    expect(Avatar.displayName).toBe("Avatar")
    expect(Avatar.__ui__).toBe("Avatar")
  })
})
