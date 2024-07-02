import {
  a11y,
  fireEvent,
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@yamada-ui/test"
import { Tooltip } from "../src/tooltip"

describe("<Tooltip />", () => {
  test("should pass a11y test", async () => {
    await a11y(
      <Tooltip label="Tooltip hover">
        <span>Hover</span>
      </Tooltip>,
    )
  })

  test("should render correctly", () => {
    render(
      <Tooltip label="Tooltip hover">
        <span>Hover</span>
      </Tooltip>,
    )

    expect(screen.getByText("Hover")).toBeInTheDocument()
  })

  test("should render label text when hover", async () => {
    render(
      <Tooltip label="Tooltip hover">
        <span>Hover</span>
      </Tooltip>,
    )

    fireEvent.pointerEnter(screen.getByText("Hover"))

    await waitFor(() => {
      expect(screen.getByText("Tooltip hover")).toBeInTheDocument()
    })
  })

  test("should not render label text when pointer leave", async () => {
    render(
      <Tooltip label="Tooltip hover">
        <span>Hover</span>
      </Tooltip>,
    )

    fireEvent.pointerEnter(screen.getByText("Hover"))

    await waitFor(() => {
      expect(screen.getAllByText("Tooltip hover")[1]).toBeInTheDocument()
    })

    fireEvent.pointerLeave(screen.getByText("Hover"))

    await waitFor(() => {
      expect(screen.queryByRole("tooltip")).toBeNull()
    })
  })

  test("should always display", () => {
    render(
      <Tooltip label="Tooltip hover" isOpen>
        <span>Hover</span>
      </Tooltip>,
    )

    expect(screen.getAllByText("Tooltip hover")[1]).toBeInTheDocument()
  })

  test("should disable even if hover", async () => {
    const { user } = render(
      <Tooltip label="Tooltip hover" isDisabled>
        <span>Hover</span>
      </Tooltip>,
    )

    const tooltipTriggerElement = await screen.findByText("Hover")
    await user.hover(tooltipTriggerElement)

    const tooltip = screen.queryByRole("tooltip")
    expect(tooltip).toBeNull()
  })

  test("should not render label text when `Escape` pressed", async () => {
    render(
      <Tooltip label="Tooltip hover">
        <span>Hover</span>
      </Tooltip>,
    )

    fireEvent.pointerEnter(screen.getByText("Hover"))

    await waitFor(() => {
      expect(screen.getAllByText("Tooltip hover")[1]).toBeInTheDocument()
    })

    fireEvent.keyDown(screen.getByText("Hover"), { key: "Escape" })

    await waitFor(() => {
      expect(screen.queryByRole("tooltip")).toBeNull()
    })
  })

  test("When `isOpen` is true, the tooltip should be displayed", async () => {
    const { user } = render(
      <Tooltip label="Tooltip hover" isOpen>
        <span>Hover</span>
      </Tooltip>,
    )

    const tooltipTriggerElement = await screen.findByText("Hover")
    await user.hover(tooltipTriggerElement)

    const tooltip = await screen.findByRole("tooltip", {
      name: /Tooltip hover/i,
    })
    expect(tooltip).toBeVisible()
  })

  test("When `closeOnEsc` is false, the tooltip should not be closed when `Escape` pressed", async () => {
    const { user } = render(
      <Tooltip label="Tooltip hover" closeOnEsc={false}>
        <span>Hover</span>
      </Tooltip>,
    )

    const tooltipTriggerElement = await screen.findByText("Hover")
    await user.hover(tooltipTriggerElement)

    const tooltip = await screen.findByRole("tooltip", {
      name: /Tooltip hover/i,
    })
    expect(tooltip).toBeVisible()

    await user.keyboard("{escape}")

    expect(tooltip).toBeVisible()
  })

  test("When `closeOnClick` is true, the tooltip should be closed when clicked", async () => {
    const { user } = render(
      <Tooltip label="Tooltip hover" closeOnClick>
        <span>Hover</span>
      </Tooltip>,
    )

    const tooltipTriggerElement = await screen.findByText("Hover")
    await user.hover(tooltipTriggerElement)

    const tooltip = await screen.findByRole("tooltip", {
      name: /Tooltip hover/i,
    })
    expect(tooltip).toBeVisible()

    await user.click(tooltipTriggerElement)

    const queryTooltip = () =>
      screen.queryByRole("tooltip", { name: /Tooltip hover/i })
    await waitForElementToBeRemoved(queryTooltip())
    expect(queryTooltip()).toBeNull()
  })

  test.each([
    { key: "{enter}" },
    { key: "{arrowUp}" },
    { key: "{arrowDown}" },
    { key: "{arrowLeft}" },
    { key: "{arrowRight}" },
    { key: "{space}" },
  ])(
    "When pressed the `%s`, the tooltip should not be hidden",
    async ({ key }) => {
      const { user } = render(
        <Tooltip label="Tooltip hover">
          <span>Hover</span>
        </Tooltip>,
      )

      const tooltipTriggerElement = await screen.findByText("Hover")
      await user.hover(tooltipTriggerElement)

      const tooltip = await screen.findByRole("tooltip", {
        name: /Tooltip hover/i,
      })
      expect(tooltip).toBeVisible()

      await user.keyboard(`${key}`)

      expect(tooltip).toBeVisible()
    },
  )

  test.each([
    {
      closeOnMouseDown: false,
      closeOnPointerDown: true,
    },
    {
      closeOnMouseDown: true,
      closeOnPointerDown: false,
    },
    {
      closeOnMouseDown: true,
      closeOnPointerDown: true,
    },
  ])(
    "Tooltip should be hidden (when `closeOnMouseDown` is $closeOnMouseDown and `closeOnPointerDown` is $closeOnPointerDown)",
    async ({ closeOnMouseDown, closeOnPointerDown }) => {
      const { user } = render(
        <Tooltip
          label="Tooltip hover"
          closeOnMouseDown={closeOnMouseDown}
          closeOnPointerDown={closeOnPointerDown}
        >
          <span>Hover</span>
        </Tooltip>,
      )

      const tooltipTriggerElement = await screen.findByText("Hover")
      await user.hover(tooltipTriggerElement)

      const tooltip = await screen.findByRole("tooltip", {
        name: /Tooltip hover/i,
      })
      expect(tooltip).toBeVisible()

      await user.pointer({ target: tooltipTriggerElement, keys: "[MouseLeft]" })
      await waitFor(() => {
        expect(
          screen.queryByRole("tooltip", { name: /Tooltip hover/i }),
        ).toBeNull()
      })
    },
  )

  test("When triggered `touchStart`, the tooltip should be toggle", async () => {
    render(
      <Tooltip label="Tooltip hover">
        <span>Hover</span>
      </Tooltip>,
    )

    const tooltipTriggerElement = await screen.findByText("Hover")

    fireEvent.touchStart(tooltipTriggerElement)

    const tooltip = await screen.findByRole("tooltip", {
      name: /Tooltip hover/i,
    })

    expect(tooltip).toBeVisible()

    fireEvent.touchStart(tooltipTriggerElement)

    const queryTooltip = () =>
      screen.queryByRole("tooltip", { name: /Tooltip hover/i })
    await waitForElementToBeRemoved(queryTooltip())
    expect(queryTooltip()).toBeNull()
  })

  test("When clicked outside of the tooltip, it should be closed", async () => {
    const { user } = render(
      <Tooltip label="Tooltip hover">
        <span>Hover</span>
      </Tooltip>,
    )

    const tooltipTriggerElement = await screen.findByText("Hover")
    await user.hover(tooltipTriggerElement)

    const tooltip = await screen.findByRole("tooltip", {
      name: /Tooltip hover/i,
    })
    expect(tooltip).toBeVisible()

    await user.click(document.body)

    const queryTooltip = () =>
      screen.queryByRole("tooltip", { name: /Tooltip hover/i })

    await waitForElementToBeRemoved(queryTooltip())
    expect(queryTooltip()).toBeNull()
  })

  test.each<{ animation: "top" | "left" | "bottom" | "right" }>([
    {
      animation: "top",
    },
    {
      animation: "left",
    },
    {
      animation: "bottom",
    },
    {
      animation: "right",
    },
  ])(
    "When `animation` is %s, the tooltip should be displayed",
    async ({ animation }) => {
      const { user } = render(
        <Tooltip label="Tooltip hover" animation={animation}>
          <span>Hover</span>
        </Tooltip>,
      )

      const tooltipTriggerElement = await screen.findByText("Hover")
      await user.hover(tooltipTriggerElement)

      const tooltip = await screen.findByRole("tooltip", {
        name: /Tooltip hover/i,
      })

      expect(tooltip).toBeVisible()
    },
  )
})
