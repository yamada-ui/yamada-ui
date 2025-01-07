import { image } from "@yamada-ui/test"
import { act, render, screen } from "../../../test"
import { Avatar } from "./"

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
