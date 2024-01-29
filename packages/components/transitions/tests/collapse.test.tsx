import { render, waitFor } from "@yamada-ui/test"
import { Collapse } from "../src"

describe("<Collapse />", () => {
  test("renders correctly", () => {
    const { getByText } = render(<Collapse isOpen>Test</Collapse>)

    getByText("Test")
  })

  test("toggles visibility on isOpen change", async () => {
    const { rerender, getByTestId } = render(
      <Collapse isOpen={false} data-testid="collapse" />,
    )

    expect(getByTestId("collapse")).toHaveStyle("display: none")

    rerender(<Collapse isOpen={true} data-testid="collapse" />)

    await waitFor(() => {
      expect(getByTestId("collapse")).toHaveStyle("display: block")
    })

    rerender(<Collapse isOpen={false} data-testid="collapse" />)

    await waitFor(() => {
      expect(getByTestId("collapse")).toHaveStyle("display: none")
    })
  })

  test("animationOpacity set to true by default", () => {
    const { getByTestId } = render(
      <Collapse isOpen animationOpacity={true} data-testid="collapse" />,
    )

    expect(getByTestId("collapse")).toHaveStyle("opacity: 1")
  })

  test("no opacity when animationOpacity set to false", () => {
    const { getByTestId } = render(
      <Collapse isOpen animationOpacity={false} data-testid="collapse" />,
    )

    expect(getByTestId("collapse")).not.toHaveStyle("opacity: 1")
  })

  test("apply correctly opacity with transition, animationOpacity set to true", async () => {
    const baseProps = {
      "data-testid": "collapse",
      startingHeight: 50,
      animationOpacity: true,
      isOpen: false,
    }

    const { getByTestId, rerender } = render(<Collapse {...baseProps} />)

    expect(getByTestId("collapse")).toHaveStyle("opacity: 1")

    rerender(<Collapse {...{ ...baseProps, isOpen: true }} />)

    await waitFor(() => {
      expect(getByTestId("collapse")).toHaveStyle("opacity: 1")
    })
  })

  test("doesn't apply opacity with transition, animationOpacity set to false", async () => {
    const baseProps = {
      "data-testid": "collapse",
      startingHeight: 50,
      animationOpacity: false,
      isOpen: false,
    }

    const { getByTestId, rerender } = render(<Collapse {...baseProps} />)

    const styles = window.getComputedStyle(getByTestId("collapse"))

    expect(styles.opacity).toBe("")

    rerender(<Collapse {...{ ...baseProps, isOpen: true }} />)

    await waitFor(() => {
      const styles = window.getComputedStyle(getByTestId("collapse"))

      expect(styles.opacity).toBe("")
    })
  })

  test("endingHeight is set to auto by default", () => {
    const { getByTestId } = render(<Collapse isOpen data-testid="collapse" />)

    expect(getByTestId("collapse")).toHaveStyle("height: auto")
  })

  test("applies custom endingHeight prop", () => {
    const { getByTestId } = render(
      <Collapse isOpen endingHeight={50} data-testid="collapse" />,
    )

    expect(getByTestId("collapse")).toHaveStyle("height: 50px")
  })

  test("startingHeight is set to 0 by default", () => {
    const { getByTestId } = render(
      <Collapse isOpen={false} data-testid="collapse" />,
    )

    expect(getByTestId("collapse")).toHaveStyle("height: 0")
  })

  test("applies custom startingHeight prop", () => {
    const { getByTestId } = render(
      <Collapse startingHeight={50} data-testid="collapse" />,
    )

    expect(getByTestId("collapse")).toHaveStyle("height: 50px")
  })

  test("height changes correctly after isOpen set to true", async () => {
    const baseProps = {
      startingHeight: 50,
      isOpen: false,
      "data-testid": "collapse",
    }
    const { getByTestId, rerender } = render(<Collapse {...baseProps} />)

    expect(getByTestId("collapse")).toHaveStyle("height: 50px")

    rerender(
      <Collapse {...{ ...baseProps, isOpen: true, endingHeight: 200 }} />,
    )

    await waitFor(() => {
      expect(getByTestId("collapse")).toHaveStyle("height: 200px")
    })
  })
})
