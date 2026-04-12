import { a11y, fireEvent, render, screen, waitFor } from "#test"
import { useRef } from "react"
import { Sidebar } from "."
import { Button } from "../button"

const navItems: Sidebar.ItemType[] = [
  {
    children: [
      { label: "1-1", value: "/1/1" },
      { disabled: true, label: "1-2", value: "/1/2" },
    ],
    label: "1",
    value: "/1",
  },
  {
    children: [
      { label: "2-1", value: "/2/1" },
      { label: "2-2", value: "/2/2" },
    ],
    disabled: true,
    label: "2",
    value: "/2",
  },
  { label: "3", value: "/3" },
  { disabled: true, label: "4", value: "/4" },
]

const navItemsWithGroup: Sidebar.ItemType[] = [
  {
    children: [
      { label: "1-1", value: "/1/1" },
      {
        children: [
          { label: "1-2-1", value: "/1/2/1" },
          { label: "1-2-2", value: "/1/2/2" },
        ],
        label: "1-2",
        value: "/1/2",
      },
    ],
    group: true,
    label: "1",
  },
  {
    children: [
      { label: "2-1", value: "/2/1" },
      { label: "2-2", value: "/2/2" },
    ],
    group: true,
    label: "2",
  },
  {
    children: [
      { label: "3-1", value: "/3/1" },
      { label: "3-2", value: "/3/2" },
    ],
    group: true,
    label: "3",
  },
]

describe("<Sidebar />", () => {
  test("renders component correctly", async () => {
    await a11y(
      <Sidebar.Root defaultExpandedValue={["/get-started/frameworks"]}>
        <Sidebar.SidePanel
          footer={<Sidebar.MenuButton>Footer</Sidebar.MenuButton>}
          header={<Sidebar.MenuButton>Header</Sidebar.MenuButton>}
          items={navItemsWithGroup}
        />

        <Sidebar.MainPanel p="md">
          <Sidebar.Trigger>
            <Button>Toggle</Button>
          </Sidebar.Trigger>
        </Sidebar.MainPanel>
      </Sidebar.Root>,
    )
  })

  test("sets `displayName` correctly", () => {
    expect(Sidebar.Root.displayName).toBe("SidebarRoot")
    expect(Sidebar.Trigger.displayName).toBe("SidebarTrigger")
    expect(Sidebar.SidePanel.displayName).toBe("SidebarSidePanel")
    expect(Sidebar.MainPanel.displayName).toBe("SidebarMainPanel")
    expect(Sidebar.Header.displayName).toBe("SidebarHeader")
    expect(Sidebar.Content.displayName).toBe("SidebarContent")
    expect(Sidebar.Footer.displayName).toBe("SidebarFooter")
    expect(Sidebar.Group.displayName).toBe("SidebarGroup")
    expect(Sidebar.GroupLabel.displayName).toBe("SidebarGroupLabel")
    expect(Sidebar.GroupContent.displayName).toBe("SidebarGroupContent")
    expect(Sidebar.Item.displayName).toBe("SidebarItem")
    expect(Sidebar.ItemTrigger.displayName).toBe("SidebarItemTrigger")
    expect(Sidebar.ItemLink.displayName).toBe("SidebarItemLink")
    expect(Sidebar.ItemContent.displayName).toBe("SidebarItemContent")
    expect(Sidebar.ItemLabel.displayName).toBe("SidebarItemLabel")
    expect(Sidebar.ItemStartElement.displayName).toBe("SidebarItemStartElement")
    expect(Sidebar.ItemEndElement.displayName).toBe("SidebarItemEndElement")
    expect(Sidebar.ItemIndicator.displayName).toBe("SidebarItemIndicator")
    expect(Sidebar.Menu.displayName).toBe("SidebarMenu")
    expect(Sidebar.MenuButton.displayName).toBe("SidebarMenuButton")
    expect(Sidebar.Handle.displayName).toBe("SidebarHandle")
  })

  test("sets `className` correctly", () => {
    const { container } = render(
      <Sidebar.Root defaultExpandedValue={["/1"]}>
        <Sidebar.SidePanel
          footer={<Sidebar.MenuButton>Footer</Sidebar.MenuButton>}
          header={<Sidebar.MenuButton>Header</Sidebar.MenuButton>}
          items={navItems}
        />
      </Sidebar.Root>,
    )

    expect(container.querySelector(".ui-sidebar__root")).toBeInTheDocument()
    expect(
      container.querySelector(".ui-sidebar__side-panel"),
    ).toBeInTheDocument()
    expect(container.querySelector(".ui-sidebar__header")).toBeInTheDocument()
    expect(container.querySelector(".ui-sidebar__footer")).toBeInTheDocument()
    expect(container.querySelector(".ui-sidebar__content")).toBeInTheDocument()
    expect(container.querySelector(".ui-sidebar__item")).toBeInTheDocument()
    expect(
      container.querySelector(".ui-sidebar__item-link"),
    ).toBeInTheDocument()
    expect(
      container.querySelector(".ui-sidebar__item-trigger"),
    ).toBeInTheDocument()
    expect(
      container.querySelector(".ui-sidebar__item-content"),
    ).toBeInTheDocument()
    expect(container.querySelector(".ui-sidebar__handle")).toBeInTheDocument()
  })

  test("renders HTML tag correctly", () => {
    const { container } = render(
      <Sidebar.Root defaultExpandedValue={["/1"]}>
        <Sidebar.SidePanel
          footer={<Sidebar.MenuButton>Footer</Sidebar.MenuButton>}
          header={<Sidebar.MenuButton>Header</Sidebar.MenuButton>}
          items={navItems}
        />
        <Sidebar.MainPanel>
          <Sidebar.Trigger>
            <Button data-testid="trigger">Toggle</Button>
          </Sidebar.Trigger>
        </Sidebar.MainPanel>
      </Sidebar.Root>,
    )

    expect(container.querySelector(".ui-sidebar__root")?.tagName).toBe("DIV")
    expect(container.querySelector(".ui-sidebar__side-panel")?.tagName).toBe(
      "ASIDE",
    )
    expect(container.querySelector(".ui-sidebar__header")?.tagName).toBe(
      "HEADER",
    )
    expect(container.querySelector(".ui-sidebar__footer")?.tagName).toBe(
      "FOOTER",
    )
    expect(container.querySelector(".ui-sidebar__content")?.tagName).toBe("UL")
    expect(container.querySelector(".ui-sidebar__item")?.tagName).toBe("LI")
    expect(container.querySelector(".ui-sidebar__item-link")?.tagName).toBe("A")
    expect(container.querySelector(".ui-sidebar__item-trigger")?.tagName).toBe(
      "BUTTON",
    )
    expect(container.querySelector(".ui-sidebar__item-content")?.tagName).toBe(
      "UL",
    )
    expect(container.querySelector(".ui-sidebar__main-panel")?.tagName).toBe(
      "DIV",
    )
  })

  test("should select leaf item on click", async () => {
    const onSelectedChange = vi.fn()

    const { user } = render(
      <Sidebar.Root
        defaultExpandedValue={["/1"]}
        onSelectedChange={onSelectedChange}
      >
        <Sidebar.SidePanel items={navItems} />
      </Sidebar.Root>,
    )

    const link = screen.getByRole("link", { name: "1-1" })

    await user.click(link)

    expect(onSelectedChange).toHaveBeenCalledWith("/1/1")
  })

  test("should expand and collapse group on trigger click", async () => {
    const onExpandedChange = vi.fn()

    const { user } = render(
      <Sidebar.Root onExpandedChange={onExpandedChange}>
        <Sidebar.SidePanel items={navItems} />
      </Sidebar.Root>,
    )

    const trigger = screen.getByRole("button", { name: /1/ })

    await user.click(trigger)

    expect(onExpandedChange).toHaveBeenCalledWith(["/1"])
    expect(trigger).toHaveAttribute("data-expanded")

    await user.click(trigger)

    expect(onExpandedChange).toHaveBeenLastCalledWith([])
  })

  test("should not expand disabled group on click", async () => {
    const onExpandedChange = vi.fn()

    const { user } = render(
      <Sidebar.Root onExpandedChange={onExpandedChange}>
        <Sidebar.SidePanel items={navItems} />
      </Sidebar.Root>,
    )

    const trigger = screen.getByRole("button", { name: /2/ })

    await user.click(trigger)

    expect(onExpandedChange).not.toHaveBeenCalled()
  })

  test("should not select disabled leaf item", async () => {
    const onSelectedChange = vi.fn()

    const { user } = render(
      <Sidebar.Root onSelectedChange={onSelectedChange}>
        <Sidebar.SidePanel items={navItems} />
      </Sidebar.Root>,
    )

    const link = screen.getByRole("link", { name: "4" })

    await user.click(link)

    expect(onSelectedChange).not.toHaveBeenCalled()
  })

  test("should toggle sidebar via Trigger", async () => {
    const { user } = render(
      <Sidebar.Root>
        <Sidebar.SidePanel items={navItems} />
        <Sidebar.MainPanel>
          <Sidebar.Trigger>
            <Button data-testid="trigger">Toggle</Button>
          </Sidebar.Trigger>
        </Sidebar.MainPanel>
      </Sidebar.Root>,
    )

    const trigger = screen.getByTestId("trigger")

    expect(trigger).toHaveAttribute("aria-expanded", "true")

    await user.click(trigger)

    expect(trigger).toHaveAttribute("aria-expanded", "false")

    await user.click(trigger)

    expect(trigger).toHaveAttribute("aria-expanded", "true")
  })

  test("should toggle sidebar with Cmd/Ctrl+B", () => {
    render(
      <Sidebar.Root>
        <Sidebar.SidePanel items={navItems} />
        <Sidebar.MainPanel>
          <Sidebar.Trigger>
            <Button data-testid="trigger">Toggle</Button>
          </Sidebar.Trigger>
        </Sidebar.MainPanel>
      </Sidebar.Root>,
    )

    const trigger = screen.getByTestId("trigger")

    expect(trigger).toHaveAttribute("aria-expanded", "true")

    fireEvent.keyDown(window, { key: "b", ctrlKey: true })

    expect(trigger).toHaveAttribute("aria-expanded", "false")

    fireEvent.keyDown(window, { key: "b", metaKey: true })

    expect(trigger).toHaveAttribute("aria-expanded", "true")
  })

  test("should ignore keydown when key is not `b` or modifier is missing", () => {
    render(
      <Sidebar.Root>
        <Sidebar.SidePanel items={navItems} />
        <Sidebar.MainPanel>
          <Sidebar.Trigger>
            <Button data-testid="trigger">Toggle</Button>
          </Sidebar.Trigger>
        </Sidebar.MainPanel>
      </Sidebar.Root>,
    )

    const trigger = screen.getByTestId("trigger")

    fireEvent.keyDown(window, { key: "a", ctrlKey: true })
    expect(trigger).toHaveAttribute("aria-expanded", "true")

    fireEvent.keyDown(window, { key: "b" })
    expect(trigger).toHaveAttribute("aria-expanded", "true")
  })

  test("should support controlled selectedValue", () => {
    render(
      <Sidebar.Root defaultExpandedValue={["/1"]} selectedValue="/1/1">
        <Sidebar.SidePanel items={navItems} />
      </Sidebar.Root>,
    )

    const link = screen.getByRole("link", { name: "1-1" })

    expect(link).toHaveAttribute("data-selected")
    expect(link.closest("li")).toHaveAttribute("aria-current", "page")
  })

  test("should support controlled expandedValue", () => {
    render(
      <Sidebar.Root expandedValue={["/1"]}>
        <Sidebar.SidePanel items={navItems} />
      </Sidebar.Root>,
    )

    const trigger = screen.getByRole("button", { name: /1/ })

    expect(trigger).toHaveAttribute("data-expanded")
  })

  test("should support controlRef expand and collapse", async () => {
    const Controlled = () => {
      const controlRef = useRef<Sidebar.Control>(null)

      return (
        <>
          <button
            data-testid="expand-all"
            onClick={() => controlRef.current?.expand()}
          >
            Expand
          </button>
          <button
            data-testid="collapse-all"
            onClick={() => controlRef.current?.collapse()}
          >
            Collapse
          </button>
          <Sidebar.Root controlRef={controlRef}>
            <Sidebar.SidePanel items={navItemsWithGroup} />
          </Sidebar.Root>
        </>
      )
    }

    const { user } = render(<Controlled />)

    await user.click(screen.getByTestId("expand-all"))

    await waitFor(() => {
      expect(screen.getByRole("link", { name: "1-1" })).toBeInTheDocument()
    })

    await user.click(screen.getByTestId("collapse-all"))

    await waitFor(() => {
      const trigger = screen.getByRole("button", { name: /1-2/ })
      expect(trigger).not.toHaveAttribute("data-expanded")
    })
  })

  test("should render with header, footer, content, and handle", () => {
    render(
      <Sidebar.Root>
        <Sidebar.SidePanel
          footer={<Sidebar.MenuButton>Footer</Sidebar.MenuButton>}
          header={<Sidebar.MenuButton>Header</Sidebar.MenuButton>}
          items={navItems}
        />
      </Sidebar.Root>,
    )

    expect(screen.getByText("Header")).toBeInTheDocument()
    expect(screen.getByText("Footer")).toBeInTheDocument()
  })

  test("should render with custom children for header/content/footer/handle", () => {
    render(
      <Sidebar.Root>
        <Sidebar.SidePanel>
          <Sidebar.Header>Custom Header</Sidebar.Header>
          <Sidebar.Content items={navItems} />
          <Sidebar.Footer>Custom Footer</Sidebar.Footer>
          <Sidebar.Handle />
        </Sidebar.SidePanel>
      </Sidebar.Root>,
    )

    expect(screen.getByText("Custom Header")).toBeInTheDocument()
    expect(screen.getByText("Custom Footer")).toBeInTheDocument()
    expect(screen.getByRole("link", { name: "3" })).toBeInTheDocument()
  })

  test("should hide indicator when `indicatorHidden` is true", () => {
    const { container } = render(
      <Sidebar.Root>
        <Sidebar.SidePanel indicatorHidden items={navItems} />
      </Sidebar.Root>,
    )

    expect(
      container.querySelector(".ui-sidebar__item-indicator"),
    ).not.toBeInTheDocument()
  })

  test("should render group items with labels", () => {
    render(
      <Sidebar.Root>
        <Sidebar.SidePanel items={navItemsWithGroup} />
      </Sidebar.Root>,
    )

    expect(screen.getByText("1")).toBeInTheDocument()
    expect(screen.getByText("2")).toBeInTheDocument()
    expect(screen.getByText("3")).toBeInTheDocument()
  })

  test("should call disclosure callbacks", async () => {
    const onOpen = vi.fn()
    const onClose = vi.fn()

    const { user } = render(
      <Sidebar.Root disclosure={{ desktop: { onClose, onOpen } }}>
        <Sidebar.SidePanel items={navItems} />
        <Sidebar.MainPanel>
          <Sidebar.Trigger>
            <Button data-testid="trigger">Toggle</Button>
          </Sidebar.Trigger>
        </Sidebar.MainPanel>
      </Sidebar.Root>,
    )

    const trigger = screen.getByTestId("trigger")

    await user.click(trigger)
    expect(onClose).toHaveBeenCalledTimes(1)

    await user.click(trigger)
    expect(onOpen).toHaveBeenCalledTimes(1)
  })

  test("should load async children on group expand", async () => {
    const asyncChildren = vi.fn(() =>
      Promise.resolve([
        { label: "async-1", value: "/async/1" },
        { label: "async-2", value: "/async/2" },
      ]),
    )

    const { user } = render(
      <Sidebar.Root>
        <Sidebar.SidePanel>
          <Sidebar.Content>
            <Sidebar.Item
              asyncChildren={asyncChildren}
              label="parent"
              value="/parent"
            />
          </Sidebar.Content>
        </Sidebar.SidePanel>
      </Sidebar.Root>,
    )

    const trigger = screen.getByRole("button", { name: /parent/ })

    await user.click(trigger)

    await waitFor(() => {
      expect(asyncChildren).toHaveBeenCalledTimes(1)
    })

    await waitFor(() => {
      expect(screen.getByRole("link", { name: "async-1" })).toBeInTheDocument()
      expect(screen.getByRole("link", { name: "async-2" })).toBeInTheDocument()
    })
  })

  test("should prevent navigation when clicking disabled link", async () => {
    const { user } = render(
      <Sidebar.Root>
        <Sidebar.SidePanel items={navItems} />
      </Sidebar.Root>,
    )

    const link = screen.getByRole("link", { name: "4" })
    const clickEvent = new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    })
    const preventDefaultSpy = vi.spyOn(clickEvent, "preventDefault")

    await user.click(link)
    link.dispatchEvent(clickEvent)

    expect(preventDefaultSpy).toHaveBeenCalledTimes(1)
  })

  test("should render with start and end elements per item/group", () => {
    render(
      <Sidebar.Root>
        <Sidebar.SidePanel
          endElement={<span data-testid="end" />}
          items={navItems}
          startElement={{
            group: <span data-testid="start-group" />,
            item: <span data-testid="start-item" />,
          }}
        />
      </Sidebar.Root>,
    )

    expect(screen.getAllByTestId("start-group").length).toBeGreaterThan(0)
    expect(screen.getAllByTestId("start-item").length).toBeGreaterThan(0)
    expect(screen.getAllByTestId("end").length).toBeGreaterThan(0)
  })

  test("should render with custom item render function", () => {
    render(
      <Sidebar.Root>
        <Sidebar.SidePanel
          items={[{ label: "custom", value: "/custom" }]}
          render={{
            item: ({ label, value }) => (
              <li data-testid="custom-item">
                {label}-{value}
              </li>
            ),
          }}
        />
      </Sidebar.Root>,
    )

    expect(screen.getByTestId("custom-item")).toHaveTextContent(
      "custom-/custom",
    )
  })

  test("should render with custom link and trigger render functions", () => {
    render(
      <Sidebar.Root defaultExpandedValue={["/1"]}>
        <Sidebar.SidePanel
          items={navItems}
          render={{
            link: ({ label, value }) => (
              <a href={value} data-testid="custom-link">
                {label}
              </a>
            ),
            trigger: ({ label }) => (
              <button data-testid="custom-trigger">{label}</button>
            ),
          }}
        />
      </Sidebar.Root>,
    )

    expect(screen.getAllByTestId("custom-link").length).toBeGreaterThan(0)
    expect(screen.getAllByTestId("custom-trigger").length).toBeGreaterThan(0)
  })

  test("should support `external` prop for links", () => {
    render(
      <Sidebar.Root>
        <Sidebar.SidePanel>
          <Sidebar.Content>
            <Sidebar.Item
              external
              label="external"
              value="https://example.com"
            />
          </Sidebar.Content>
        </Sidebar.SidePanel>
      </Sidebar.Root>,
    )

    const link = screen.getByRole("link", { name: "external" })

    expect(link).toHaveAttribute("target", "_blank")
    expect(link).toHaveAttribute("rel", "noopener")
  })

  test("should render Sidebar.Menu and Sidebar.MenuButton", () => {
    render(
      <Sidebar.Root>
        <Sidebar.SidePanel>
          <Sidebar.Menu>
            <Sidebar.MenuButton>Menu Item</Sidebar.MenuButton>
          </Sidebar.Menu>
        </Sidebar.SidePanel>
      </Sidebar.Root>,
    )

    expect(
      screen.getByRole("button", { name: "Menu Item" }),
    ).toBeInTheDocument()
  })

  test("should render Tooltip wrapper in non-offcanvas mode when collapsed", () => {
    render(
      <Sidebar.Root
        disclosure={{ desktop: { defaultOpen: false } }}
        mode="icon"
      >
        <Sidebar.SidePanel items={navItems} />
      </Sidebar.Root>,
    )

    expect(screen.getByRole("link", { name: "3" })).toBeInTheDocument()
  })

  test("should merge `tooltipProps` from side panel and item without overwriting user props", async () => {
    const onSidePanelClick = vi.fn()
    const onItemClick = vi.fn()

    render(
      <Sidebar.Root
        disclosure={{ desktop: { defaultOpen: false } }}
        mode="icon"
      >
        <Sidebar.SidePanel
          tooltipProps={{
            className: "from-side-panel",
            style: { color: "red" },
            onClick: onSidePanelClick,
          }}
        >
          <Sidebar.Content>
            <Sidebar.Item
              label="tooltip-item"
              value="/tooltip-item"
              tooltipProps={{
                className: "from-item",
                style: { backgroundColor: "blue" },
                onClick: onItemClick,
              }}
            />
          </Sidebar.Content>
        </Sidebar.SidePanel>
      </Sidebar.Root>,
    )

    fireEvent.pointerEnter(screen.getByRole("link", { name: "tooltip-item" }), {
      pointerType: "mouse",
    })

    await waitFor(() => {
      expect(screen.getByRole("tooltip")).toBeInTheDocument()
    })

    const tooltip = screen.getByRole("tooltip")

    expect(tooltip).toHaveClass("from-side-panel", "from-item")
    expect(tooltip).toHaveStyle({ color: "rgb(255, 0, 0)" })
    expect(tooltip).toHaveStyle({ backgroundColor: "rgb(0, 0, 255)" })

    fireEvent.click(tooltip)

    expect(onSidePanelClick).toHaveBeenCalledTimes(1)
    expect(onItemClick).toHaveBeenCalledTimes(1)
  })

  test("should load async children when defaultExpandedValue triggers later", async () => {
    const asyncChildren = vi.fn(() =>
      Promise.resolve([{ label: "lazy-1", value: "/lazy/1" }]),
    )

    const Controlled = () => {
      const controlRef = useRef<Sidebar.Control>(null)

      return (
        <>
          <button
            data-testid="expand-all"
            onClick={() => controlRef.current?.expand()}
          >
            Expand
          </button>
          <Sidebar.Root controlRef={controlRef}>
            <Sidebar.SidePanel>
              <Sidebar.Content>
                <Sidebar.Item
                  asyncChildren={asyncChildren}
                  label="parent"
                  value="/parent"
                />
              </Sidebar.Content>
            </Sidebar.SidePanel>
          </Sidebar.Root>
        </>
      )
    }

    const { user } = render(<Controlled />)

    await user.click(screen.getByTestId("expand-all"))

    await waitFor(() => {
      expect(asyncChildren).toHaveBeenCalledTimes(1)
    })

    await waitFor(() => {
      expect(screen.getByRole("link", { name: "lazy-1" })).toBeInTheDocument()
    })
  })

  test("should support default selectedValue", () => {
    render(
      <Sidebar.Root defaultExpandedValue={["/1"]} defaultSelectedValue="/1/1">
        <Sidebar.SidePanel items={navItems} />
      </Sidebar.Root>,
    )

    const link = screen.getByRole("link", { name: "1-1" })

    expect(link).toHaveAttribute("data-selected")
  })
})
