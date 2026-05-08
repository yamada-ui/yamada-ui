import type { ReactNode } from "react"
import { a11y, render, renderHook } from "#test"
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

  test("merges getRootProps values and keeps hook precedence", () => {
    const restRef = vi.fn()
    const callerRef = vi.fn()
    const restOnClick = vi.fn()
    const callerOnClick = vi.fn()

    const { result } = renderHook(() =>
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

  test("merges getItemProps values and keeps caller precedence", () => {
    const restRef = vi.fn()
    const callerRef = vi.fn()
    const restOnToggle = vi.fn()
    const callerOnToggle = vi.fn()

    const wrapper = ({ children }: { children: ReactNode }) => (
      <NativeAccordionContext value={{ name: "from-context" }}>
        {children}
      </NativeAccordionContext>
    )

    const { result } = renderHook(
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

  test("applies root `name` to items", () => {
    const { container } = render(
      <NativeAccordion.Root name="native-accordion" items={items} />,
    )

    const item = container.querySelectorAll("details")[0]
    expect(item).toHaveAttribute("name", "native-accordion")
  })

  test("applies shared generated `name` to all items when multiple is false", () => {
    const { container } = render(<NativeAccordion.Root items={items} />)
    const renderedItems = Array.from(container.querySelectorAll("details"))

    const generatedName = renderedItems[0]?.getAttribute("name")

    expect(generatedName).toBeTruthy()

    for (const item of renderedItems) {
      expect(item).toHaveAttribute("name", generatedName)
    }
  })

  test("preserves empty string `name` on all items", () => {
    const { container } = render(<NativeAccordion.Root name="" items={items} />)
    const renderedItems = Array.from(container.querySelectorAll("details"))

    for (const item of renderedItems) {
      expect(item).toHaveAttribute("name", "")
    }
  })
})
