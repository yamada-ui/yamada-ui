import type { FC, PropsWithChildren } from "react"
import type { UseTabsProps } from "./use-tabs"
import { a11y, act, renderHook } from "#test"
import { Tabs } from "./"
import {
  TabDescendantsContext,
  TabPanelDescendantsContext,
  TabsContext,
  useTab,
  useTabPanel,
  useTabs,
} from "./use-tabs"

const items: Tabs.Item[] = [
  { panel: "This is home tab", tab: "Home" },
  { panel: "This is about tab", tab: "About" },
  { panel: "This is contact tab", tab: "Contact" },
]

interface TestComponentProps extends Tabs.RootProps {}

const TestComponent: FC<TestComponentProps> = (props) => {
  return (
    <Tabs.Root data-testid="tabs" items={items} {...props}>
      <Tabs.List />
      <Tabs.Panels />
    </Tabs.Root>
  )
}

const createTabsWrapper = (props: UseTabsProps = {}): FC<PropsWithChildren> => {
  const Wrapper: FC<PropsWithChildren> = ({ children }) => {
    const {
      id,
      focusedIndex,
      index,
      manual,
      orientation,
      setFocusedIndex,
      setIndex,
      tabDescendants,
      tabPanelDescendants,
      getListProps,
    } = useTabs({ id: "tabs", ...props })

    return (
      <TabDescendantsContext value={tabDescendants}>
        <TabPanelDescendantsContext value={tabPanelDescendants}>
          <TabsContext
            value={{
              id,
              focusedIndex,
              index,
              manual,
              orientation,
              setFocusedIndex,
              setIndex,
              getListProps,
            }}
          >
            {children}
          </TabsContext>
        </TabPanelDescendantsContext>
      </TabDescendantsContext>
    )
  }

  return Wrapper
}

describe("<Tabs />", () => {
  test("passes a11y checks", async () => {
    await a11y(<TestComponent />)
  })
})

describe("useTabs / useTab / useTabPanel", () => {
  test("merges className and style while keeping getter precedence in useTabs.getRootProps", () => {
    const { result } = renderHook(
      () =>
        useTabs({
          className: "from-rest",
          style: { color: "red" },
          "aria-label": "from-rest",
        }),
      { withProvider: false },
    )

    const rootProps = result.current.getRootProps({
      className: "from-props",
      style: { backgroundColor: "blue" },
      "aria-label": "from-props",
    })

    expect(rootProps["aria-label"]).toBe("from-props")
    expect(rootProps.className).toContain("from-rest")
    expect(rootProps.className).toContain("from-props")
    expect(rootProps.style).toStrictEqual({
      backgroundColor: "blue",
      color: "red",
    })
  })

  test("keeps getter precedence and merges refs in useTab.getRootProps", () => {
    const refFromRest = vi.fn()
    const refFromProps = vi.fn()

    const { result } = renderHook(
      () =>
        useTab({
          id: "rest-tab",
          ref: refFromRest,
          className: "from-rest",
          style: { color: "red" },
          "aria-controls": "rest-panel",
          index: 1,
          tabIndex: -1,
        }),
      { wrapper: createTabsWrapper() },
    )

    const tabProps = result.current.getRootProps({
      id: "props-tab",
      ref: refFromProps,
      className: "from-props",
      style: { backgroundColor: "blue" },
      "aria-controls": "props-panel",
      tabIndex: 2,
    })

    expect(tabProps.id).toBe("props-tab")
    expect(tabProps.tabIndex).toBe(2)
    expect(tabProps["aria-controls"]).toBe("props-panel")
    expect(tabProps.className).toContain("from-rest")
    expect(tabProps.className).toContain("from-props")
    expect(tabProps.style).toStrictEqual({
      backgroundColor: "blue",
      color: "red",
    })

    const node = document.createElement("button")

    expect(typeof tabProps.ref).toBe("function")

    act(() => {
      ;(tabProps.ref as (node: HTMLButtonElement | null) => void)(node)
    })

    expect(refFromRest).toHaveBeenCalledWith(node)
    expect(refFromProps).toHaveBeenCalledWith(node)
  })

  test("keeps props -> rest -> internal order for onClick and onFocus in useTab.getRootProps", () => {
    const clickOrder: string[] = []
    const focusOrder: string[] = []

    const onClickFromRest = vi.fn(() => clickOrder.push("rest"))
    const onClickFromProps = vi.fn(() => clickOrder.push("props"))
    const onFocusFromRest = vi.fn(() => focusOrder.push("rest"))
    const onFocusFromProps = vi.fn(() => focusOrder.push("props"))

    const onClickChange = vi.fn(() => clickOrder.push("internal"))
    const onFocusChange = vi.fn(() => focusOrder.push("internal"))

    const clickResult = renderHook(
      () =>
        useTab({
          index: 1,
          onClick: onClickFromRest,
        }),
      {
        wrapper: createTabsWrapper({
          defaultIndex: 0,
          onChange: onClickChange,
        }),
      },
    )

    const clickProps = clickResult.result.current.getRootProps({
      onClick: onClickFromProps,
    })

    act(() => clickProps.onClick?.({} as never))

    expect(clickOrder).toStrictEqual(["props", "rest", "internal"])

    const focusResult = renderHook(
      () =>
        useTab({
          index: 1,
          onFocus: onFocusFromRest,
        }),
      {
        wrapper: createTabsWrapper({
          defaultIndex: 0,
          onChange: onFocusChange,
        }),
      },
    )

    const focusProps = focusResult.result.current.getRootProps({
      onFocus: onFocusFromProps,
    })

    act(() => focusProps.onFocus?.({} as never))

    expect(focusOrder).toStrictEqual(["props", "rest", "internal"])
  })

  test("merges className and style while keeping getter precedence in useTabPanel.getRootProps", () => {
    const { result } = renderHook(
      () =>
        useTabPanel({
          className: "from-rest",
          style: { color: "red" },
          "data-state": "rest",
          index: 0,
        }),
      { wrapper: createTabsWrapper() },
    )

    const panelProps = result.current.getRootProps({
      className: "from-props",
      style: { backgroundColor: "blue" },
      "data-state": "props",
    })

    expect(panelProps["data-state"]).toBe("props")
    expect(panelProps.className).toContain("from-rest")
    expect(panelProps.className).toContain("from-props")
    expect(panelProps.style).toStrictEqual({
      backgroundColor: "blue",
      color: "red",
    })
  })
})
