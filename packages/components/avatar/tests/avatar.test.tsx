import { render, mocks, act } from "@yamada-ui/test"
import { Avatar } from "../src"

describe("<Avatar />", () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.useRealTimers()
    mocks.image().restore()
  })

  test("renders an image", async () => {
    const mock = mocks.image()
    mock.simulate("loaded")
    const { getByAltText } = render(
      <Avatar src="https://bit.ly/dan-abramov" name="Dan Abramov" />,
    )

    act(() => {
      jest.runAllTimers()
    })

    const img = getByAltText("Dan Abramov")
    expect(img).toBeInTheDocument()
  })

  test("fires onError if image fails to load", async () => {
    const mock = mocks.image()
    mock.simulate("error")

    const src = "https://bit.ly/dan-abramov"
    const name = "Dan Abramov"
    const onErrorFn = jest.fn()
    render(<Avatar src={src} name={name} onError={onErrorFn} />)

    act(() => {
      jest.runAllTimers()
    })

    expect(onErrorFn).toHaveBeenCalledTimes(1)
  })

  test("renders a name avatar if no src", () => {
    const { queryByText } = render(<Avatar name="Dan Abramov" />)
    const intials = queryByText("DA")
    expect(intials).toBeInTheDocument()
  })

  test("renders a single character if only one name is passed", () => {
    const { queryByText } = render(<Avatar name="Dan" />)
    const intials = queryByText("D")
    expect(intials).toBeInTheDocument()
  })

  test("renders the first characters of the first and last name when more than two names are passed", () => {
    const { queryByText } = render(<Avatar name="Dan React Abramov" />)
    const intials = queryByText("DA")
    expect(intials).toBeInTheDocument()
  })
})
