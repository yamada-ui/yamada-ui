import type { CSSProperties } from "react"
import { a11y, page, render, renderHook } from "#test/browser"
import { noop } from "../../utils"
import { BoxIcon } from "../icon"
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

  test("sets `className` correctly", async () => {
    await render(
      <Accordion.Root data-testid="root">
        <Accordion.Item data-testid="item" button="Accordion Label" index={0}>
          <Accordion.Panel data-testid="panel">
            This is an accordion item
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion.Root>,
    )

    await expect
      .element(page.getByTestId("root"))
      .toHaveClass("ui-accordion__root")
    await expect
      .element(page.getByTestId("item"))
      .toHaveClass("ui-accordion__item")
    await expect
      .element(page.getByTestId("panel"))
      .toHaveClass("ui-accordion__panel")
    await expect
      .element(page.getByRole("button", { name: /Accordion Label/i }))
      .toHaveClass("ui-accordion__button")
  })

  test("renders HTML tag correctly", async () => {
    await render(
      <Accordion.Root data-testid="root">
        <Accordion.Item data-testid="item" button="Accordion Label" index={0}>
          <Accordion.Panel data-testid="panel">
            This is an accordion item
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion.Root>,
    )

    expect(page.getByTestId("root").element().tagName).toBe("DIV")

    const item = page.getByTestId("item").element()
    expect(item.tagName).toBe("DIV")
    expect(item.children[0]?.tagName).toBe("H3")

    expect(page.getByTestId("panel").element().tagName).toBe("DIV")
    expect(
      page.getByRole("button", { name: /Accordion Label/i }).element().tagName,
    ).toBe("BUTTON")
  })

  test("should render correctly with defaultIndex item expanded", async () => {
    await render(<Accordion.Root defaultIndex={0} items={items} />)

    const button = page.getByRole("button", {
      name: /Accordion Label 1/i,
    })
    await expect.element(button).toHaveAttribute("aria-expanded", "true")
    await expect
      .element(page.getByText("This is an accordion item 1"))
      .toBeVisible()
  })

  test("should work correctly with toggle", async () => {
    const { user } = await render(<Accordion.Root items={items} toggle />)

    const button = page.getByRole("button", { name: /Accordion Label 1/i })

    await user.click(button)
    await expect.element(button).toHaveAttribute("aria-expanded", "true")

    await user.click(button)
    await expect.element(button).toHaveAttribute("aria-expanded", "false")
  })

  test("should show multiple items", async () => {
    const { user } = await render(
      <Accordion.Root defaultIndex={[0, 1]} items={items} multiple />,
    )

    const item1 = page.getByRole("button", { name: /Accordion Label 1/i })
    const item2 = page.getByRole("button", { name: /Accordion Label 2/i })
    const item3 = page.getByRole("button", { name: /Accordion Label 3/i })

    await expect.element(item1).toHaveAttribute("aria-expanded", "true")
    await expect.element(item2).toHaveAttribute("aria-expanded", "true")
    await expect.element(item3).toHaveAttribute("aria-expanded", "false")

    await user.click(item3)
    await expect.element(item3).toHaveAttribute("aria-expanded", "true")
  })

  test("should render a disabled item", async () => {
    await render(
      <Accordion.Root>
        <Accordion.Item button="Accordion Label" disabled index={0}>
          This is an accordion item
        </Accordion.Item>
      </Accordion.Root>,
    )

    const button = page.getByRole("button", { name: /Accordion Label/i })
    await expect.element(button).toBeDisabled()
  })

  test("should render item with panel", async () => {
    await render(
      <Accordion.Root defaultIndex={0}>
        <Accordion.Item button="Accordion Label" index={0}>
          <Accordion.Panel>This is an accordion item</Accordion.Panel>
        </Accordion.Item>
      </Accordion.Root>,
    )

    await expect
      .element(page.getByText("This is an accordion item"))
      .toBeVisible()
  })

  test("should render item with custom icon", async () => {
    const { user } = await render(
      <Accordion.Root
        icon={({ expanded }) => (
          <BoxIcon
            data-icon={!expanded ? "plus" : "minus"}
            data-testid="custom-icon"
          />
        )}
      >
        <Accordion.Item button="Accordion Label" index={0}>
          This is an accordion item
        </Accordion.Item>
      </Accordion.Root>,
    )

    await expect
      .element(page.getByTestId("custom-icon"))
      .toHaveAttribute("data-icon", "plus")

    await user.click(page.getByRole("button", { name: /Accordion Label/i }))

    await expect
      .element(page.getByTestId("custom-icon"))
      .toHaveAttribute("data-icon", "minus")
  })

  test("should render item with custom icon in AccordionItem", async () => {
    const { user } = await render(
      <Accordion.Root>
        <Accordion.Item
          button="Accordion Label"
          icon={({ expanded }) => (
            <BoxIcon
              data-icon={!expanded ? "plus" : "minus"}
              data-testid="custom-icon"
            />
          )}
          index={0}
        >
          This is an accordion item
        </Accordion.Item>
      </Accordion.Root>,
    )

    await expect
      .element(page.getByTestId("custom-icon"))
      .toHaveAttribute("data-icon", "plus")

    await user.click(page.getByRole("button", { name: /Accordion Label/i }))

    await expect
      .element(page.getByTestId("custom-icon"))
      .toHaveAttribute("data-icon", "minus")
  })

  test("should render item with custom icon in AccordionButton", async () => {
    const { user } = await render(
      <Accordion.Root>
        <Accordion.Item index={0}>
          <Accordion.Button
            icon={({ expanded }) => (
              <BoxIcon
                data-icon={!expanded ? "plus" : "minus"}
                data-testid="custom-icon"
              />
            )}
          >
            Accordion Label
          </Accordion.Button>
          This is an accordion item
        </Accordion.Item>
      </Accordion.Root>,
    )

    await expect
      .element(page.getByTestId("custom-icon"))
      .toHaveAttribute("data-icon", "plus")

    await user.click(page.getByRole("button", { name: /Accordion Label/i }))

    await expect
      .element(page.getByTestId("custom-icon"))
      .toHaveAttribute("data-icon", "minus")
  })

  test("should render item with custom label", async () => {
    await render(
      <Accordion.Root>
        <Accordion.Item index={0}>
          <Accordion.Button>Accordion Label</Accordion.Button>
          <Accordion.Panel>This is an accordion item</Accordion.Panel>
        </Accordion.Item>
      </Accordion.Root>,
    )

    await expect
      .element(page.getByRole("button", { name: /Accordion Label/i }))
      .toBeVisible()
  })

  test("should render label with function label", async () => {
    const { user } = await render(
      <Accordion.Root>
        <Accordion.Item
          button={({ disabled, expanded }) => {
            if (disabled) return <p>Is disabled</p>

            if (expanded) return <p>Is expanded</p>
            else return <p>Not expanded</p>
          }}
          index={0}
        >
          This is an accordion item
        </Accordion.Item>
      </Accordion.Root>,
    )

    const button = page.getByRole("button", { name: /Not expanded/i })
    await expect.element(button).toBeVisible()

    await user.click(button)

    await expect
      .element(page.getByRole("button", { name: /Is expanded/i }))
      .toBeVisible()
  })

  test("focus moves correctly on ArrowDown", async () => {
    const { user } = await render(<Accordion.Root items={items} />)

    const item1 = page.getByRole("button", { name: /Accordion Label 1/i })
    const item2 = page.getByRole("button", { name: /Accordion Label 2/i })
    const item3 = page.getByRole("button", { name: /Accordion Label 3/i })

    await user.click(item1)
    await expect.element(item1).toHaveFocus()

    await user.keyboard("{ArrowDown>}")
    await expect.element(item2).toHaveFocus()

    await user.keyboard("{ArrowDown>}")
    await expect.element(item3).toHaveFocus()

    await user.keyboard("{ArrowDown>}")
    await expect.element(item1).toHaveFocus()
  })

  test("focus moves correctly on ArrowUp", async () => {
    const { user } = await render(<Accordion.Root items={items} />)

    const item1 = page.getByRole("button", { name: /Accordion Label 1/i })
    const item2 = page.getByRole("button", { name: /Accordion Label 2/i })
    const item3 = page.getByRole("button", { name: /Accordion Label 3/i })

    await user.click(item1)
    await expect.element(item1).toHaveFocus()

    await user.keyboard("{ArrowUp>}")
    await expect.element(item3).toHaveFocus()

    await user.keyboard("{ArrowUp>}")
    await expect.element(item2).toHaveFocus()
  })

  test("focus moves correctly on Home", async () => {
    const { user } = await render(<Accordion.Root items={items} />)

    const item1 = page.getByRole("button", { name: /Accordion Label 1/i })
    const item3 = page.getByRole("button", { name: /Accordion Label 3/i })

    await user.click(item3)
    await expect.element(item3).toHaveFocus()

    await user.keyboard("{Home>}")
    await expect.element(item1).toHaveFocus()
  })

  test("focus moves correctly on End", async () => {
    const { user } = await render(<Accordion.Root items={items} />)

    const item1 = page.getByRole("button", { name: /Accordion Label 1/i })
    const item3 = page.getByRole("button", { name: /Accordion Label 3/i })

    await user.click(item1)
    await expect.element(item1).toHaveFocus()

    await user.keyboard("{End>}")
    await expect.element(item3).toHaveFocus()
  })

  test("correct warnings should be issued when multiple and toggle", async () => {
    const consoleWarnSpy = vi.spyOn(console, "warn").mockImplementation(noop)

    await render(
      <Accordion.Root multiple toggle>
        <Accordion.Item button="Accordion Label" index={0}>
          This is an accordion item
        </Accordion.Item>
      </Accordion.Root>,
    )

    await vi.waitFor(() =>
      expect(consoleWarnSpy).toHaveBeenLastCalledWith(
        "Accordion: If 'multiple' is passed, 'toggle' will be ignored. Either remove 'toggle' or 'multiple' depending on whether you want multiple accordions visible or not",
      ),
    )

    consoleWarnSpy.mockRestore()
  })

  test("correct warnings should be issued when multiple and defaultIndex is not array", async () => {
    const consoleWarnSpy = vi.spyOn(console, "warn").mockImplementation(noop)

    await render(
      <Accordion.Root defaultIndex={1} multiple>
        <Accordion.Item button="Accordion Label" index={0}>
          This is an accordion item
        </Accordion.Item>
      </Accordion.Root>,
    )

    await vi.waitFor(() =>
      expect(consoleWarnSpy).toHaveBeenLastCalledWith(
        "Accordion: If 'multiple' is passed, then 'index' or 'defaultIndex' must be an array.",
      ),
    )

    consoleWarnSpy.mockRestore()
  })

  test("merges props correctly in `getRootProps`", async () => {
    const restOnClick = vi.fn()
    const argsOnClick = vi.fn()
    const restRef = vi.fn()
    const argsRef = vi.fn()
    const { result } = await renderHook(() =>
      useAccordion({
        id: "rest-id",
        ref: restRef,
        className: "rest-class",
        style: { color: "red" },
        onClick: restOnClick,
      }),
    )

    const rootProps = result.current.getRootProps({
      id: "args-id",
      ref: argsRef,
      className: "args-class",
      style: { backgroundColor: "blue" },
      onClick: argsOnClick,
    })

    expect(rootProps.className).toContain("rest-class")
    expect(rootProps.className).toContain("args-class")
    expect(rootProps.style).toMatchObject({
      backgroundColor: "blue",
      color: "red",
    })
    expect(rootProps.id).toBe("args-id")

    rootProps.onClick?.(new MouseEvent("click") as any)
    expect(restOnClick).toHaveBeenCalledTimes(1)
    expect(argsOnClick).toHaveBeenCalledTimes(1)

    expect(typeof rootProps.ref).toBe("function")

    const node = document.createElement("div")
    ;(rootProps.ref as (node: HTMLDivElement | null) => void)(node)

    expect(restRef).toHaveBeenCalledWith(node)
    expect(argsRef).toHaveBeenCalledWith(node)
  })

  test("merges props correctly in `getItemProps`", async () => {
    const restOnClick = vi.fn()
    const argsOnClick = vi.fn()
    const restRef = vi.fn()
    const argsRef = vi.fn()
    await render(
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

    const item = page.getByTestId("item-probe")
    const itemEl = item.element()

    await expect.element(item).toHaveClass("rest-class")
    await expect.element(item).toHaveClass("args-class")
    expect(itemEl.id).toBe("args-id")
    expect(itemEl).toBeInstanceOf(HTMLElement)
    const htmlItemEl = itemEl as HTMLElement
    expect(htmlItemEl.style.color).toBe("red")
    expect(htmlItemEl.style.backgroundColor).toBe("blue")

    itemEl.dispatchEvent(new MouseEvent("click", { bubbles: true }))
    expect(restOnClick).toHaveBeenCalledTimes(1)
    expect(argsOnClick).toHaveBeenCalledTimes(1)

    expect(restRef).toHaveBeenCalledWith(itemEl)
    expect(argsRef).toHaveBeenCalledWith(itemEl)
  })
})
