import type { CSSProperties } from "react"
import { a11y, fireEvent, render, screen } from "#test"
import { noop } from "../../utils"
import { Accordion } from "./"
import { useAccordion, useAccordionItem } from "./use-accordion"

const items = [
  {
    button: "Accordion Label 1",
    children: "This is an accordion item 1",
  },
  {
    button: "Accordion Label 2",
    children: "This is an accordion item 2",
  },
  {
    button: "Accordion Label 3",
    children: "This is an accordion item 3",
  },
]

interface RootPropsMergeProbeProps {
  argsClassName: string
  argsId: string
  argsStyle: CSSProperties
  restClassName: string
  restDataTestId: string
  restId: string
  restStyle: CSSProperties
  argsOnClick: () => void
  argsRef: (node: HTMLDivElement | null) => void
  restOnClick: () => void
  restRef: (node: HTMLDivElement | null) => void
}

const RootPropsMergeProbe = ({
  argsClassName,
  argsId,
  argsOnClick,
  argsRef,
  argsStyle,
  restClassName,
  restDataTestId,
  restId,
  restOnClick,
  restRef,
  restStyle,
}: RootPropsMergeProbeProps) => {
  const { getRootProps } = useAccordion({
    id: restId,
    ref: restRef,
    className: restClassName,
    style: restStyle,
    "data-testid": restDataTestId,
    onClick: restOnClick,
  })

  return (
    <div
      {...getRootProps({
        id: argsId,
        ref: argsRef,
        className: argsClassName,
        style: argsStyle,
        onClick: argsOnClick,
      })}
    />
  )
}

interface ItemPropsMergeProbeProps {
  argsClassName: string
  argsId: string
  argsStyle: CSSProperties
  restClassName: string
  restId: string
  restStyle: CSSProperties
  argsOnClick: () => void
  argsRef: (node: HTMLDivElement | null) => void
  restOnClick: () => void
  restRef: (node: HTMLDivElement | null) => void
}

const ItemPropsMergeProbe = ({
  argsClassName,
  argsId,
  argsOnClick,
  argsRef,
  argsStyle,
  restClassName,
  restId,
  restOnClick,
  restRef,
  restStyle,
}: ItemPropsMergeProbeProps) => {
  const { getItemProps } = useAccordionItem({
    id: restId,
    ref: restRef,
    className: restClassName,
    style: restStyle,
    index: 0,
    onClick: restOnClick,
  })

  return (
    <div
      {...getItemProps({
        id: argsId,
        ref: argsRef,
        className: argsClassName,
        style: argsStyle,
        "data-testid": "item-probe",
        onClick: argsOnClick,
      })}
    />
  )
}

describe("<Accordion />", () => {
  test("renders component correctly", async () => {
    await a11y(
      <Accordion.Root>
        <Accordion.Item button="Accordion Label" index={0}>
          This is an accordion item
        </Accordion.Item>
      </Accordion.Root>,
    )
  })

  test("sets `displayName` correctly", () => {
    expect(Accordion.Root.displayName).toBe("AccordionRoot")
    expect(Accordion.Item.displayName).toBe("AccordionItem")
    expect(Accordion.Button.displayName).toBe("AccordionButton")
    expect(Accordion.Panel.displayName).toBe("AccordionPanel")
  })

  test("sets `className` correctly", () => {
    render(
      <Accordion.Root data-testid="root">
        <Accordion.Item data-testid="item" button="Accordion Label" index={0}>
          <Accordion.Panel data-testid="panel">
            This is an accordion item
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion.Root>,
    )

    expect(screen.getByTestId("root")).toHaveClass("ui-accordion__root")
    expect(screen.getByTestId("item")).toHaveClass("ui-accordion__item")
    expect(screen.getByTestId("panel")).toHaveClass("ui-accordion__panel")
    expect(
      screen.getByRole("button", { name: /Accordion Label/i }),
    ).toHaveClass("ui-accordion__button")
  })

  test("renders HTML tag correctly", () => {
    render(
      <Accordion.Root data-testid="root">
        <Accordion.Item data-testid="item" button="Accordion Label" index={0}>
          <Accordion.Panel data-testid="panel">
            This is an accordion item
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion.Root>,
    )

    const root = screen.getByTestId("root")
    const item = screen.getByTestId("item")
    const panel = screen.getByTestId("panel")
    const button = screen.getByRole("button", { name: /Accordion Label/i })

    expect(root.tagName).toBe("DIV")
    expect(item.tagName).toBe("DIV")
    expect(item.firstElementChild?.tagName).toBe("H3")
    expect(panel.tagName).toBe("DIV")
    expect(button.tagName).toBe("BUTTON")
  })

  test("should render correctly with defaultIndex item expanded", () => {
    render(<Accordion.Root defaultIndex={0} items={items} />)

    const button = screen.getByRole("button", { name: /Accordion Label 1/i })
    expect(button).toHaveAttribute("aria-expanded", "true")
    expect(screen.getByText("This is an accordion item 1")).toBeInTheDocument()
  })

  test("should render a disabled item", () => {
    render(
      <Accordion.Root>
        <Accordion.Item button="Accordion Label" disabled index={0}>
          This is an accordion item
        </Accordion.Item>
      </Accordion.Root>,
    )

    expect(
      screen.getByRole("button", { name: /Accordion Label/i }),
    ).toBeDisabled()
  })

  test("should render item with panel", () => {
    render(
      <Accordion.Root defaultIndex={0}>
        <Accordion.Item button="Accordion Label" index={0}>
          <Accordion.Panel>This is an accordion item</Accordion.Panel>
        </Accordion.Item>
      </Accordion.Root>,
    )

    expect(screen.getByText("This is an accordion item")).toBeInTheDocument()
  })

  test("should render item with custom label", () => {
    render(
      <Accordion.Root>
        <Accordion.Item index={0}>
          <Accordion.Button>Accordion Label</Accordion.Button>
          <Accordion.Panel>This is an accordion item</Accordion.Panel>
        </Accordion.Item>
      </Accordion.Root>,
    )

    expect(
      screen.getByRole("button", { name: /Accordion Label/i }),
    ).toBeInTheDocument()
  })

  test("correct warnings should be issued when multiple and toggle", () => {
    const consoleWarnSpy = vi.spyOn(console, "warn").mockImplementation(noop)

    render(
      <Accordion.Root multiple toggle>
        <Accordion.Item button="Accordion Label" index={0}>
          This is an accordion item
        </Accordion.Item>
      </Accordion.Root>,
    )

    expect(consoleWarnSpy).toHaveBeenCalledWith(
      "Accordion: If 'multiple' is passed, 'toggle' will be ignored. Either remove 'toggle' or 'multiple' depending on whether you want multiple accordions visible or not",
    )

    consoleWarnSpy.mockRestore()
  })

  test("correct warnings should be issued when multiple and defaultIndex is not array", () => {
    const consoleWarnSpy = vi.spyOn(console, "warn").mockImplementation(noop)

    render(
      <Accordion.Root defaultIndex={1} multiple>
        <Accordion.Item button="Accordion Label" index={0}>
          This is an accordion item
        </Accordion.Item>
      </Accordion.Root>,
    )

    expect(consoleWarnSpy).toHaveBeenCalledWith(
      "Accordion: If 'multiple' is passed, then 'index' or 'defaultIndex' must be an array.",
    )

    consoleWarnSpy.mockRestore()
  })

  test("merges props correctly in `getRootProps`", () => {
    const restOnClick = vi.fn()
    const argsOnClick = vi.fn()
    const restRef = vi.fn()
    const argsRef = vi.fn()
    render(
      <RootPropsMergeProbe
        argsClassName="args-class"
        argsId="args-id"
        argsOnClick={argsOnClick}
        argsRef={argsRef}
        argsStyle={{ backgroundColor: "blue" }}
        restClassName="rest-class"
        restDataTestId="root-probe"
        restId="rest-id"
        restOnClick={restOnClick}
        restRef={restRef}
        restStyle={{ color: "red" }}
      />,
    )

    const root = screen.getByTestId("root-probe")

    expect(root).toHaveClass("rest-class")
    expect(root).toHaveClass("args-class")
    expect(root.id).toBe("args-id")
    expect(root.style.color).toBe("red")
    expect(root.style.backgroundColor).toBe("blue")
    expect(root).toHaveAttribute("data-testid", "root-probe")

    fireEvent.click(root)
    expect(restOnClick).toHaveBeenCalledTimes(1)
    expect(argsOnClick).toHaveBeenCalledTimes(1)

    expect(restRef).toHaveBeenCalledWith(root)
    expect(argsRef).toHaveBeenCalledWith(root)
  })

  test("merges props correctly in `getItemProps`", () => {
    const restOnClick = vi.fn()
    const argsOnClick = vi.fn()
    const restRef = vi.fn()
    const argsRef = vi.fn()
    render(
      <Accordion.Root>
        <ItemPropsMergeProbe
          argsClassName="args-class"
          argsId="args-id"
          argsOnClick={argsOnClick}
          argsRef={argsRef}
          argsStyle={{ backgroundColor: "blue" }}
          restClassName="rest-class"
          restId="rest-id"
          restOnClick={restOnClick}
          restRef={restRef}
          restStyle={{ color: "red" }}
        />
      </Accordion.Root>,
    )

    const item = screen.getByTestId("item-probe")

    expect(item).toHaveClass("rest-class")
    expect(item).toHaveClass("args-class")
    expect(item.id).toBe("args-id")
    expect(item.style.color).toBe("red")
    expect(item.style.backgroundColor).toBe("blue")

    fireEvent.click(item)
    expect(restOnClick).toHaveBeenCalledTimes(1)
    expect(argsOnClick).toHaveBeenCalledTimes(1)

    expect(restRef).toHaveBeenCalledWith(item)
    expect(argsRef).toHaveBeenCalledWith(item)
  })
})
