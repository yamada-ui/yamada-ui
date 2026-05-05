import type { FC } from "react"
import { a11y, render, renderHook, screen } from "#test"
import { Button } from "../button"
import { Modal } from "./"
import { useModal } from "./use-modal"

const TestComponent: FC<Modal.RootProps> = (props) => {
  return (
    <Modal.Root data-testid="root" {...props}>
      <Modal.OpenTrigger>
        <Button data-testid="openTrigger">Open Modal</Button>
      </Modal.OpenTrigger>

      <Modal.Overlay data-testid="overlay" />

      <Modal.Content data-testid="content">
        <Modal.CloseButton data-testid="closeButton" />

        <Modal.Header data-testid="header">
          <Modal.Title data-testid="title">ドラゴンボール</Modal.Title>
        </Modal.Header>

        <Modal.Body data-testid="body">Body</Modal.Body>

        <Modal.Footer data-testid="footer">
          <Modal.CloseTrigger>
            <Button variant="ghost" data-testid="closeTrigger">
              とじる
            </Button>
          </Modal.CloseTrigger>
          <Button>Wikipedia</Button>
        </Modal.Footer>
      </Modal.Content>
    </Modal.Root>
  )
}

describe("<Modal />", () => {
  test("passes a11y check", async () => {
    await a11y(<TestComponent />)
  })

  test("sets aria attributes correctly", () => {
    render(<TestComponent open />)
    expect(screen.getByTestId("openTrigger")).toHaveAttribute("aria-controls")
    expect(screen.getByTestId("openTrigger")).toHaveAttribute(
      "aria-expanded",
      "true",
    )
    expect(screen.getByTestId("openTrigger")).toHaveAttribute(
      "aria-haspopup",
      "dialog",
    )
    expect(screen.getByTestId("openTrigger")).toHaveAttribute(
      "aria-label",
      "Open modal",
    )
    expect(screen.getByTestId("overlay")).toHaveAttribute("aria-hidden", "true")
    expect(screen.getByTestId("content")).toHaveAttribute("aria-describedby")
    expect(screen.getByTestId("content")).toHaveAttribute("aria-labelledby")
    expect(screen.getByTestId("content")).toHaveAttribute("aria-modal", "true")
    expect(screen.getByTestId("content")).toHaveAttribute("role", "dialog")
    expect(screen.getByTestId("closeButton")).toHaveAttribute(
      "aria-label",
      "Close modal",
    )
    expect(screen.getByTestId("closeTrigger")).toHaveAttribute(
      "aria-label",
      "Close modal",
    )
    expect(screen.getByTestId("title")).toHaveAttribute("id")
    expect(screen.getByTestId("body")).toHaveAttribute("id")
  })

  test("renders shorthand content with title, body, and footer buttons", () => {
    render(
      <Modal.Root
        body={<p data-testid="shorthand-body">Body content</p>}
        cancel={<>Cancel</>}
        open
        success={<>OK</>}
        title={<>Modal Title</>}
      />,
    )
    expect(screen.getByText("Modal Title")).toBeInTheDocument()
    expect(screen.getByTestId("shorthand-body")).toBeInTheDocument()
    expect(screen.getByText("Cancel")).toBeInTheDocument()
    expect(screen.getByText("OK")).toBeInTheDocument()
  })

  test("renders shorthand content with middle button", () => {
    render(<Modal.Root middle={<>Middle</>} open success={<>OK</>} />)
    expect(screen.getByText("Middle")).toBeInTheDocument()
    expect(screen.getByText("OK")).toBeInTheDocument()
  })

  test("renders shorthand content with header and footer as props objects", () => {
    render(
      <Modal.Root
        body={{ children: "Body text" }}
        footer={{ children: "Footer text" }}
        header={{ children: "Header text" }}
        open
      />,
    )
    expect(screen.getByText("Header text")).toBeInTheDocument()
    expect(screen.getByText("Body text")).toBeInTheDocument()
    expect(screen.getByText("Footer text")).toBeInTheDocument()
  })

  test("renders overlay without animation when `animationScheme` is `none`", () => {
    render(<TestComponent animationScheme="none" open />)
    expect(screen.getByTestId("overlay")).toBeInTheDocument()
  })

  test("renders without overlay when `withOverlay` is false", () => {
    render(
      <Modal.Root open withOverlay={false}>
        <Modal.Content data-testid="content">
          <Modal.Body>Content</Modal.Body>
        </Modal.Content>
      </Modal.Root>,
    )
    expect(screen.queryByRole("presentation")).not.toBeInTheDocument()
  })

  test("renders without close button when `withCloseButton` is false", () => {
    render(
      <Modal.Root open withCloseButton={false}>
        <Modal.Content data-testid="content">
          <Modal.Body>Content</Modal.Body>
        </Modal.Content>
      </Modal.Root>,
    )
    expect(screen.queryByLabelText("Close modal")).not.toBeInTheDocument()
  })

  test("renders with custom trigger prop", () => {
    render(
      <Modal.Root trigger={<Button data-testid="custom-trigger">Open</Button>}>
        <Modal.Content>
          <Modal.Body>Content</Modal.Body>
        </Modal.Content>
      </Modal.Root>,
    )
    expect(screen.getByTestId("custom-trigger")).toBeInTheDocument()
  })
})

describe("useModal", () => {
  test("merges hook rest with user props via mergeProps in getRootProps", () => {
    const { result } = renderHook(() =>
      useModal({
        id: "hook-id",
        className: "hook",
        "data-testid": "modal-root",
      }),
    )

    const merged = result.current.getRootProps({
      id: "user-id",
      className: "user",
    })

    expect(merged.id).toBe("user-id")
    expect(String(merged.className)).toContain("hook")
    expect(String(merged.className)).toContain("user")
    expect(merged["data-testid"]).toBe("modal-root")
  })

  test("treats null props as empty object in getRootProps", () => {
    const { result } = renderHook(() =>
      useModal({
        className: "hook",
      }),
    )

    const merged = result.current.getRootProps(
      null as unknown as Parameters<typeof result.current.getRootProps>[0],
    )

    expect(String(merged.className)).toContain("hook")
  })
})
