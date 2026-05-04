import type { ReactNode } from "react"
import { a11y, page, render, renderHook } from "#test/browser"
import { BoxIcon } from "../icon"
import { NativeAccordion } from "./"
import {
  NativeAccordionContext,
  useNativeAccordion,
  useNativeAccordionItem,
} from "./use-native-accordion"

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

describe("<NativeAccordion />", () => {
  test("renders component correctly", async () => {
    await a11y(
      <NativeAccordion.Root>
        <NativeAccordion.Item button="Accordion Label">
          This is an accordion item
        </NativeAccordion.Item>
      </NativeAccordion.Root>,
    )
  })

  test("sets `displayName` correctly", () => {
    expect(NativeAccordion.Root.name).toBe("NativeAccordionRoot")
    expect(NativeAccordion.Item.name).toBe("NativeAccordionItem")
    expect(NativeAccordion.Button.name).toBe("NativeAccordionButton")
    expect(NativeAccordion.Icon.name).toBe("NativeAccordionIcon")
    expect(NativeAccordion.Panel.name).toBe("NativeAccordionPanel")
  })

  test("sets `className` correctly", async () => {
    await render(
      <NativeAccordion.Root data-testid="root">
        <NativeAccordion.Item data-testid="item" button="Accordion Label">
          <NativeAccordion.Panel data-testid="panel">
            This is an accordion item
          </NativeAccordion.Panel>
        </NativeAccordion.Item>
      </NativeAccordion.Root>,
    )
    await expect
      .element(page.getByTestId("root"))
      .toHaveClass("ui-native-accordion__root")
    await expect
      .element(page.getByTestId("item"))
      .toHaveClass("ui-native-accordion__item")
    await expect
      .element(page.getByTestId("panel"))
      .toHaveClass("ui-native-accordion__panel")
    await expect
      .element(page.getByText("Accordion Label"))
      .toHaveClass("ui-native-accordion__button")
  })

  test("merges getRootProps values and keeps hook precedence", async () => {
    const restRef = vi.fn()
    const callerRef = vi.fn()
    const restOnClick = vi.fn()
    const callerOnClick = vi.fn()

    const { result } = await renderHook(() =>
      useNativeAccordion({
        id: "from-rest",
        ref: (...args) => {
          restRef(...args)
        },
        className: "from-rest",
        style: { backgroundColor: "red", paddingTop: "4px" },
        title: "from-rest-title",
        onClick: restOnClick,
      }),
    )

    const rootProps = result.current.getRootProps({
      id: "from-caller",
      ref: (...args) => {
        callerRef(...args)
      },
      className: "from-caller",
      style: { color: "blue", paddingTop: "8px" },
      title: "from-caller-title",
      onClick: callerOnClick,
    })

    expect(rootProps.className).toContain("from-rest")
    expect(rootProps.className).toContain("from-caller")
    expect(rootProps.id).toBe("from-rest")
    expect(rootProps.title).toBe("from-rest-title")
    expect(rootProps.style).toMatchObject({
      backgroundColor: "red",
      color: "blue",
      paddingTop: "4px",
    })

    const rootNode = document.createElement("div")
    const rootRef = rootProps.ref as (node: HTMLDivElement | null) => void
    rootRef(rootNode)

    expect(restRef).toHaveBeenCalledTimes(1)
    expect(callerRef).toHaveBeenCalledTimes(1)

    rootProps.onClick?.({} as any)

    expect(restOnClick).toHaveBeenCalledTimes(1)
    expect(callerOnClick).toHaveBeenCalledTimes(1)
  })

  test("merges getItemProps values and keeps caller precedence", async () => {
    const restRef = vi.fn()
    const callerRef = vi.fn()
    const restOnToggle = vi.fn()
    const callerOnToggle = vi.fn()

    const wrapper = ({ children }: { children: ReactNode }) => (
      <NativeAccordionContext value={{ name: "from-context" }}>
        {children}
      </NativeAccordionContext>
    )

    const { result } = await renderHook(
      () =>
        useNativeAccordionItem({
          id: "from-rest",
          ref: (...args) => {
            restRef(...args)
          },
          name: "from-rest-name",
          className: "from-rest",
          style: { backgroundColor: "red", paddingTop: "4px" },
          "data-group": "from-rest-group",
          onToggle: restOnToggle,
        }),
      { wrapper },
    )

    const itemProps = result.current.getItemProps({
      id: "from-caller",
      ref: (...args) => {
        callerRef(...args)
      },
      name: "from-caller-name",
      className: "from-caller",
      style: { color: "blue", paddingTop: "8px" },
      "data-group": "from-caller-group",
      onToggle: callerOnToggle,
    })

    expect(itemProps.className).toContain("from-rest")
    expect(itemProps.className).toContain("from-caller")
    expect(itemProps.id).toBe("from-caller")
    expect(itemProps.name).toBe("from-caller-name")
    expect(itemProps["data-group"]).toBe("from-caller-group")
    expect(itemProps.style).toMatchObject({
      backgroundColor: "red",
      color: "blue",
      paddingTop: "8px",
    })

    const itemNode = document.createElement("details")
    const itemRef = itemProps.ref as (node: HTMLDetailsElement | null) => void
    itemRef(itemNode)

    expect(restRef).toHaveBeenCalledTimes(1)
    expect(callerRef).toHaveBeenCalledTimes(1)

    itemProps.onToggle?.({} as any)

    expect(restOnToggle).toHaveBeenCalledTimes(1)
    expect(callerOnToggle).toHaveBeenCalledTimes(1)
  })

  test("renders HTML tag correctly", async () => {
    await render(
      <NativeAccordion.Root data-testid="root">
        <NativeAccordion.Item data-testid="item" button="Accordion Label">
          <NativeAccordion.Panel data-testid="panel">
            This is an accordion item
          </NativeAccordion.Panel>
        </NativeAccordion.Item>
      </NativeAccordion.Root>,
    )
    expect(page.getByTestId("root").element().tagName).toBe("DIV")
    const item = page.getByTestId("item").element()
    expect(item.tagName).toBe("DETAILS")
    expect(page.getByTestId("panel").element().tagName).toBe("DIV")
    expect(page.getByText("Accordion Label").element().tagName).toBe("SUMMARY")
  })

  test("supports `open` as a native default expanded attribute", async () => {
    await render(
      <NativeAccordion.Root>
        <NativeAccordion.Item button="Accordion Label" open>
          This is an accordion item
        </NativeAccordion.Item>
      </NativeAccordion.Root>,
    )

    const item = page.getByText("Accordion Label").element().closest("details")
    expect(item).toHaveAttribute("open")
    await expect
      .element(page.getByText("This is an accordion item"))
      .toBeInTheDocument()
  })

  test("toggles with native details behavior", async () => {
    const { user } = await render(<NativeAccordion.Root items={items} />)

    const button = page.getByText(/Accordion Label 1/i).element()
    const item = button.closest("details")

    await user.click(button)
    expect(item).toHaveAttribute("open")

    await user.click(button)
    expect(item).not.toHaveAttribute("open")
  })

  test("can open multiple items when `multiple` is true", async () => {
    const { user } = await render(
      <NativeAccordion.Root items={items} multiple />,
    )

    const button1 = page.getByText(/Accordion Label 1/i).element()
    const button2 = page.getByText(/Accordion Label 2/i).element()
    const item1 = button1.closest("details")
    const item2 = button2.closest("details")

    await user.click(button1)
    await user.click(button2)

    expect(item1).toHaveAttribute("open")
    expect(item2).toHaveAttribute("open")
  })

  test("keeps only one item open by default", async () => {
    const { user } = await render(<NativeAccordion.Root items={items} />)

    const button1 = page.getByText(/Accordion Label 1/i).element()
    const button2 = page.getByText(/Accordion Label 2/i).element()
    const item1 = button1.closest("details")
    const item2 = button2.closest("details")

    await user.click(button1)
    expect(item1).toHaveAttribute("open")

    await user.click(button2)
    expect(item1).not.toHaveAttribute("open")
    expect(item2).toHaveAttribute("open")
  })

  test("assigns shared `name` when `multiple` is false", async () => {
    const { container } = await render(
      <NativeAccordion.Root items={items} multiple={false} />,
    )

    const itemsElements = container.querySelectorAll("details")
    const item1 = itemsElements[0]!
    const item2 = itemsElements[1]!

    const name1 = item1.getAttribute("name")
    const name2 = item2.getAttribute("name")

    expect(name1).toBeTruthy()
    expect(name1).toBe(name2)
  })

  test("applies explicit empty `name` when `name` is an empty string", async () => {
    const { container } = await render(
      <NativeAccordion.Root name="" items={items} />,
    )

    const itemsElements = container.querySelectorAll("details")
    const item1 = itemsElements[0]!
    const item2 = itemsElements[1]!

    expect(item1).toHaveAttribute("name", "")
    expect(item2).toHaveAttribute("name", "")
  })

  test("applies root `name` to items", async () => {
    const { container } = await render(
      <NativeAccordion.Root name="native-accordion" items={items} />,
    )

    const item = container.querySelectorAll("details")[0]
    expect(item).toHaveAttribute("name", "native-accordion")
  })

  test("renders a disabled item", async () => {
    const { user } = await render(
      <NativeAccordion.Root>
        <NativeAccordion.Item button="Accordion Label" disabled>
          This is an accordion item
        </NativeAccordion.Item>
      </NativeAccordion.Root>,
    )

    const button = page.getByText(/Accordion Label/i).element()
    const item = button.closest("details")

    await user.click(button)
    expect(item).not.toHaveAttribute("open")
  })

  test("renders item with custom icon", async () => {
    const { user } = await render(
      <NativeAccordion.Root
        icon={<BoxIcon data-icon="custom" data-testid="custom-icon" />}
      >
        <NativeAccordion.Item button="Accordion Label">
          This is an accordion item
        </NativeAccordion.Item>
      </NativeAccordion.Root>,
    )

    await expect
      .element(page.getByTestId("custom-icon"))
      .toHaveAttribute("data-icon", "custom")

    await user.click(page.getByText(/Accordion Label/i).element())
    await expect.element(page.getByTestId("custom-icon")).toBeInTheDocument()
  })
})
