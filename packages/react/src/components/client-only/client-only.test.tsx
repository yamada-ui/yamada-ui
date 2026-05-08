import type * as UseMounted from "../../hooks/use-mounted"
import { render, screen } from "#test"
import { ClientOnly } from "."
import { useMounted } from "../../hooks/use-mounted"

const mockState = vi.hoisted(() => {
  return { mounted: true }
})

vi.mock("../../hooks/use-mounted", async (importOriginal) => {
  const actual = await importOriginal<typeof UseMounted>()

  return {
    ...actual,
    useMounted: vi.fn(() => mockState.mounted),
  }
})

describe("<ClientOnly />", () => {
  beforeEach(() => {
    mockState.mounted = true
    vi.mocked(useMounted).mockImplementation(() => mockState.mounted)
  })

  test("renders children after mount", () => {
    render(<ClientOnly>Hello</ClientOnly>)

    expect(screen.getByText("Hello")).toBeInTheDocument()
  })

  test("renders fallback when provided", () => {
    mockState.mounted = false

    render(<ClientOnly fallback={<span>Loading...</span>}>Hello</ClientOnly>)

    expect(screen.getByText("Loading...")).toBeInTheDocument()
    expect(screen.queryByText("Hello")).not.toBeInTheDocument()
  })

  test("supports function children", () => {
    render(<ClientOnly>{() => "Hello from function"}</ClientOnly>)

    expect(screen.getByText("Hello from function")).toBeInTheDocument()
  })
})
