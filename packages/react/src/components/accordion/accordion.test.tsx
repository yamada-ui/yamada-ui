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
    onClick: restOnClick,
  })

  return (
    <div
      {...getRootProps({
        id: argsId,
        ref: argsRef,
        className: argsClassName,
        style: argsStyle,
        "data-testid": "root-probe",
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

  test("should render correctly with defaultIndex item expanded", () => {
    render(<Accordion.Root defaultIndex={0} items={items} />)

    const button = screen.getByRole("button", { name: /Accordion Label 1/i })
    expect(button).toHaveAttribute("aria-expanded", "true")
    expect(screen.getByText("This is an accordion item 1")).toBeInTheDocument()
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
