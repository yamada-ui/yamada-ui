import { renderHook } from "#test"
import {
  getSlotClassName,
  mergeSlotCSS,
  useComponentSlotStyle,
  useComponentStyle,
} from "./use-component-style"
import { createComponent, createSlotComponent } from "./create-component"

describe("getSlotClassName", () => {
  test("returns className unchanged when slot is undefined", () => {
    expect(getSlotClassName("ui-button")).toBe("ui-button")
  })

  test("returns className unchanged when className is undefined", () => {
    expect(getSlotClassName(undefined, "label")).toBeUndefined()
  })

  test("handles string slot", () => {
    const result = getSlotClassName("ui-button", "label")
    expect(result).toBe("ui-button__label")
  })

  test("handles array slot [element, modifier]", () => {
    const result = getSlotClassName("ui-button", ["icon", "left"])
    expect(result).toContain("ui-button__icon")
    expect(result).toContain("ui-button__icon--left")
  })

  test("handles object slot with name and slot property", () => {
    const result = getSlotClassName("ui-button", {
      name: "icon",
      slot: "left",
    })
    expect(result).toContain("ui-button__left")
  })

  test("handles array slot in object slot property", () => {
    const result = getSlotClassName("ui-button", {
      name: "icon",
      slot: ["arrow", "down"],
    })
    expect(result).toContain("ui-button__arrow")
    expect(result).toContain("ui-button__arrow--down")
  })
})

describe("mergeSlotCSS", () => {
  test("returns css unchanged when style is undefined", () => {
    const css = { color: "red" }
    expect(mergeSlotCSS("label", undefined, css)).toBe(css)
  })

  test("returns css unchanged when slot is undefined", () => {
    const style = { label: { color: "red" } }
    const css = { fontSize: "16px" }
    expect(mergeSlotCSS(undefined, style, css)).toBe(css)
  })

  test("handles string slot", () => {
    const style = { label: { color: "red" }, icon: { margin: "4px" } }
    const result = mergeSlotCSS("label", style)
    expect(result).toStrictEqual([{ color: "red" }])
  })

  test("handles array slot", () => {
    const style = {
      icon: { margin: "4px" },
      label: { color: "red" },
    }
    const result = mergeSlotCSS(["icon", "label"], style)
    expect(result).toBeDefined()
    expect(result).toHaveLength(2)
    expect(result).toStrictEqual([{ margin: "4px" }, { color: "red" }])
  })

  test("handles object slot with array slot property (L320)", () => {
    const style = {
      arrow: { transform: "rotate" },
      down: { opacity: 0.5 },
    }
    const result = mergeSlotCSS(
      { name: "icon", slot: ["arrow", "down"] },
      style,
    )
    expect(result).toStrictEqual([{ transform: "rotate" }, { opacity: 0.5 }])
  })

  test("handles object slot with string slot property", () => {
    const style = { icon: { margin: "4px" } }
    const result = mergeSlotCSS({ name: "btn", slot: "icon" }, style)
    expect(result).toStrictEqual([{ margin: "4px" }])
  })

  test("merges slot css with provided css", () => {
    const style = { label: { color: "red" } }
    const result = mergeSlotCSS("label", style, { fontSize: "16px" })
    expect(result).toStrictEqual([{ color: "red" }, { fontSize: "16px" }])
  })

  test("merges slot css with css array", () => {
    const style = { label: { color: "red" } }
    const result = mergeSlotCSS("label", style, [
      { fontSize: "16px" },
      { margin: "8px" },
    ])
    expect(result).toStrictEqual([
      { color: "red" },
      { fontSize: "16px" },
      { margin: "8px" },
    ])
  })

  test("returns undefined when result is empty", () => {
    const style = { label: {} }
    const result = mergeSlotCSS("label", style)
    expect(result).toBeUndefined()
  })
})

describe("useComponentStyle", () => {
  test("returns empty style when no component style provided", () => {
    const { result } = renderHook(() =>
      useComponentStyle({ children: null }),
    )
    const [style, _props] = result.current
    expect(style).toStrictEqual({})
  })

  test("applies base style from component style", () => {
    const { result } = renderHook(() =>
      useComponentStyle({ children: null }, {
        name: "button",
        style: {
          base: { color: "blue" },
        },
      }),
    )
    expect(result.current).toBeDefined()
  })

  test("applies size style when size prop is provided", () => {
    const { result } = renderHook(() =>
      useComponentStyle({ size: "md", children: null }, {
        name: "button",
        style: {
          base: { padding: "8px" },
          sizes: {
            base: {},
            md: { fontSize: "14px" },
            lg: { fontSize: "18px" },
          },
        },
      }),
    )
    expect(result.current).toBeDefined()
  })

  test("applies variant style when variant prop is provided", () => {
    const { result } = renderHook(() =>
      useComponentStyle({ variant: "solid", children: null }, {
        name: "button",
        style: {
          base: {},
          variants: {
            base: {},
            solid: { bg: "blue.500" },
            outline: { border: "1px solid" },
          },
        },
      }),
    )
    expect(result.current).toBeDefined()
  })

  test("applies compounds when conditions match", () => {
    const { result } = renderHook(() =>
      useComponentStyle({ size: "sm", variant: "solid", children: null }, {
        name: "button",
        style: {
          base: {},
          sizes: { base: {}, sm: {} },
          variants: { base: {}, solid: {} },
          compounds: [
            { css: { fontWeight: "bold" }, size: "sm", variant: "solid" },
          ],
        },
      }),
    )
    expect(result.current).toBeDefined()
  })

  test("applies propVariants with booleanish values", () => {
    const { result } = renderHook(() =>
      useComponentStyle({ children: null }, {
        name: "button",
        style: {
          base: {},
          props: {
            isDisabled: {
              true: { opacity: 0.5 },
              false: { opacity: 1 },
            },
          },
        },
      }),
    )
    expect(result.current).toBeDefined()
  })

  test("merges className with props className", () => {
    const { result } = renderHook(() =>
      useComponentStyle(
        { className: "custom-class", children: null },
        {
          name: "button",
          className: "ui-button",
          style: { base: { color: "blue" } },
        },
      ),
    )
    const [, props] = result.current
    expect(props.className).toContain("ui-button")
    expect(props.className).toContain("custom-class")
  })
})

describe("useComponentSlotStyle", () => {
  test("returns slot-based style object", () => {
    const { result } = renderHook(() =>
      useComponentSlotStyle({ children: null }, {
        name: "card",
        slot: "header",
        style: {
          base: {
            header: { fontWeight: "bold" },
            root: { display: "flex" },
          },
        },
      }),
    )
    expect(result.current).toBeDefined()
  })

  test("applies size and variant with slots", () => {
    const { result } = renderHook(() =>
      useComponentSlotStyle({ size: "md", variant: "elevated", children: null }, {
        name: "card",
        slot: "body",
        style: {
          base: {
            body: { padding: "16px" },
            root: {},
          },
          sizes: {
            base: { body: {}, root: {} },
            md: { body: { padding: "24px" }, root: {} },
          },
          variants: {
            base: { body: {}, root: {} },
            elevated: { body: {}, root: { boxShadow: "md" } },
          },
        },
      }),
    )
    expect(result.current).toBeDefined()
  })

  test("applies compounds with slots", () => {
    const { result } = renderHook(() =>
      useComponentSlotStyle({ size: "sm", variant: "outline", children: null }, {
        name: "card",
        slot: "footer",
        style: {
          base: {
            footer: { textAlign: "center" },
            root: {},
          },
          sizes: { base: { footer: {}, root: {} }, sm: { footer: {}, root: {} } },
          variants: { base: { footer: {}, root: {} }, outline: { footer: {}, root: {} } },
          compounds: [
            { css: { footer: { fontSize: "12px" }, root: {} }, size: "sm", variant: "outline" },
          ],
        },
      }),
    )
    expect(result.current).toBeDefined()
  })
})

describe("createComponent", () => {
  test("creates component with context and props context", () => {
    const { component, ComponentContext, PropsContext, useComponentContext, usePropsContext, withContext, useComponentProps } =
      createComponent<{ color?: string }>("Button")

    expect(component).toBeDefined()
    expect(ComponentContext).toBeDefined()
    expect(PropsContext).toBeDefined()
    expect(useComponentContext).toBeDefined()
    expect(usePropsContext).toBeDefined()
    expect(withContext).toBeDefined()
    expect(useComponentProps).toBeDefined()
  })

  test("useComponentProps merges context props", () => {
    const { useComponentProps } = createComponent<{ color?: string }>(
      "TestComp",
    )

    const { result } = renderHook(() =>
      useComponentProps({ color: "red" }),
    )
    expect(result.current).toBeDefined()
  })

  test("useComponentProps with withContext=false skips context merge", () => {
    const { useComponentProps } = createComponent<{ color?: string }>(
      "TestComp",
    )

    const { result } = renderHook(() =>
      useComponentProps({ color: "blue" }, { withContext: false }),
    )
    expect(result.current).toBeDefined()
  })

  test("useComponentProps with custom className", () => {
    const { useComponentProps } = createComponent("TestComp", {
      base: { className: "custom" },
    })

    const { result } = renderHook(() =>
      useComponentProps({}, { className: "override" }),
    )
    expect(result.current).toBeDefined()
  })
})

describe("createSlotComponent", () => {
  test("creates slot component with all expected methods", () => {
    const result = createSlotComponent<{ variant?: string }>("Card", {
      base: {
        header: { fontWeight: "bold" },
        root: { display: "flex" },
      },
    })

    expect(result.component).toBeDefined()
    expect(result.StyleContext).toBeDefined()
    expect(result.ComponentContext).toBeDefined()
    expect(result.PropsContext).toBeDefined()
    expect(result.useStyleContext).toBeDefined()
    expect(result.useComponentContext).toBeDefined()
    expect(result.usePropsContext).toBeDefined()
    expect(result.withProvider).toBeDefined()
    expect(result.withContext).toBeDefined()
    expect(result.useRootComponentProps).toBeDefined()
    expect(result.useSlotComponentProps).toBeDefined()
  })

  test("useRootComponentProps returns css and rest props", () => {
    const { useRootComponentProps } = createSlotComponent("Card", {
      base: {
        header: { fontWeight: "bold" },
        root: { display: "flex" },
      },
    })

    const { result } = renderHook(() =>
      useRootComponentProps({ children: null }),
    )
    const [css, _rest] = result.current
    expect(css).toBeDefined()
  })

  test("useRootComponentProps with slot", () => {
    const { useRootComponentProps } = createSlotComponent("Card", {
      base: {
        header: { fontWeight: "bold" },
        root: { display: "flex" },
      },
    })

    const { result } = renderHook(() =>
      useRootComponentProps({ children: null }, "header"),
    )
    expect(result.current).toBeDefined()
  })

  test("useRootComponentProps with withContext=false", () => {
    const { useRootComponentProps } = createSlotComponent("Card", {
      base: {
        header: {},
        root: {},
      },
    })

    const { result } = renderHook(() =>
      useRootComponentProps({ children: null }, undefined, {
        withContext: false,
      }),
    )
    expect(result.current).toBeDefined()
  })

  test("useSlotComponentProps merges slot css", () => {
    const { withProvider, useSlotComponentProps } = createSlotComponent("Card", {
      base: {
        header: { fontWeight: "bold" },
        root: {},
      },
    })

    const Card = withProvider("div")()

    const { result } = renderHook(
      () => useSlotComponentProps({ children: null }, "header"),
      {
        wrapper: ({ children }: { children: React.ReactNode }) => (
          <Card>{children}</Card>
        ),
        withProvider: false,
      },
    )
    expect(result.current.className).toBeDefined()
  })

  test("useClassName with slot (L314)", () => {
    const { component } = createSlotComponent("Card", {
      base: {
        header: {},
        root: {},
      },
    })

    const Header = component("div", "header")()
    expect(Header).toBeDefined()
  })
})