import { renderHook } from "#test"
import {
  findChild,
  findChildren,
  getValidChildren,
  includesChildren,
  isSomeDisplayName,
  isSomeElement,
  isValidElement,
  omitChildren,
  pickChildren,
  splitChildren,
  useFindChild,
  useFindChildren,
  useIncludesChildren,
  useOmitChildren,
  usePickChildren,
  useSplitChildren,
  useValidChildren,
  wrapOrPassProps,
} from "./children"

describe("getValidChildren", () => {
  test("should filter out non-valid React elements", () => {
    const children = [
      <div key="1">Valid</div>,
      "String",
      null,
      <span key="2">Another Valid</span>,
    ]
    const validChildren = getValidChildren(children)
    expect(validChildren).toHaveLength(2)
    expect(validChildren[0]?.type).toBe("div")
    expect(validChildren[1]?.type).toBe("span")
  })
})

describe("isValidElement", () => {
  test("should return true for valid React elements", () => {
    const validElement = <div>Valid</div>
    expect(isValidElement(validElement)).toBeTruthy()
  })

  test("should return true for string", () => {
    expect(isValidElement("string")).toBeTruthy()
  })

  test("should return true for number", () => {
    expect(isValidElement(123)).toBeTruthy()
  })

  test("should return false for undefined", () => {
    expect(isValidElement(undefined)).toBeFalsy()
  })
})

describe("findChildren", () => {
  test("should find children of specified types", () => {
    const children = [
      <div key="1">Div</div>,
      <span key="2">Span</span>,
      <section key="3">Section</section>,
    ]
    const [foundChild, ...rest] = findChildren(children, "span")
    expect(foundChild?.type).toBe("span")
    expect(rest).toHaveLength(2)
  })
})

describe("includesChildren", () => {
  test("should return true if children include specified types", () => {
    const children = [
      <div key="1">
        <span>Inside Div</span>
      </div>,
      <section key="2">Section</section>,
    ]
    expect(includesChildren(children, "span")).toBeTruthy()
  })

  test("should return false if children do not include specified types", () => {
    const children = [
      <div key="1">Div</div>,
      <section key="2">Section</section>,
    ]
    expect(includesChildren(children, "span")).toBeFalsy()
  })
})

describe("omitChildren", () => {
  test("should omit children of specified type", () => {
    const children = [
      <div key="1">Div</div>,
      <span key="2">Span</span>,
      <section key="3">Section</section>,
    ]
    const omittedChildren = omitChildren(children, "span")
    expect(omittedChildren).toHaveLength(2)
    expect(omittedChildren.some((child) => child.type === "span")).toBeFalsy()
  })

  test("should omit children of specified types", () => {
    const children = [
      <div key="1">Div</div>,
      <span key="2">Span</span>,
      <section key="3">Section</section>,
    ]
    const omittedChildren = omitChildren(children, "span", "div")
    expect(omittedChildren).toHaveLength(1)
    expect(omittedChildren.some((child) => child.type === "span")).toBeFalsy()
    expect(omittedChildren.some((child) => child.type === "div")).toBeFalsy()
  })
})

describe("pickChildren", () => {
  test("should pick children of specified type", () => {
    const children = [
      <div key="1">Div</div>,
      <span key="2">Span</span>,
      <section key="3">Section</section>,
    ]
    const pickedChildren = pickChildren(children, "span")
    expect(pickedChildren).toHaveLength(1)
    expect(pickedChildren[0]?.type).toBe("span")
  })

  test("should pick children of specified types", () => {
    const children = [
      <div key="1">Div</div>,
      <span key="2">Span</span>,
      <section key="3">Section</section>,
    ]
    const pickedChildren = pickChildren(children, "span", "div")
    expect(pickedChildren).toHaveLength(2)
    expect(pickedChildren.some((child) => child.type === "span")).toBeTruthy()
    expect(pickedChildren.some((child) => child.type === "div")).toBeTruthy()
  })
})

describe("isSomeDisplayName", () => {
  test("should return false when either argument is undefined", () => {
    expect(isSomeDisplayName(undefined, "test")).toBeFalsy()
    expect(isSomeDisplayName("test", undefined)).toBeFalsy()
  })

  test("should match by displayName", () => {
    const a = { displayName: "MyComponent" }
    const b = { displayName: "MyComponent" }
    expect(isSomeDisplayName(a, b)).toBeTruthy()
  })

  test("should match by name", () => {
    const a = { name: "MyComponent" }
    const b = { name: "MyComponent" }
    expect(isSomeDisplayName(a, b)).toBeTruthy()
  })

  test("should match array includes", () => {
    expect(isSomeDisplayName(["div", "span"], "span")).toBeTruthy()
    expect(isSomeDisplayName(["div", "span"], "section")).toBeFalsy()
  })

  test("should match array with displayName", () => {
    const b = { displayName: "span" }
    expect(isSomeDisplayName(["span"], b)).toBeTruthy()
  })
})

describe("isSomeElement", () => {
  test("should return false when either argument is undefined", () => {
    expect(isSomeElement(undefined, "test")).toBeFalsy()
  })

  test("should return true when both are the same", () => {
    expect(isSomeElement("div", "div")).toBeTruthy()
  })
})

describe("findChild", () => {
  test("should find child of specified type", () => {
    const children = [<div key="1">Div</div>, <span key="2">Span</span>]
    const found = findChild(children, "span")
    expect(found?.type).toBe("span")
  })

  test("should return undefined if not found", () => {
    const children = [<div key="1">Div</div>]
    const found = findChild(children, "span")
    expect(found).toBeUndefined()
  })
})

describe("splitChildren", () => {
  test("should split children by type", () => {
    const children = [
      <div key="1">Div</div>,
      <span key="2">Span</span>,
      <section key="3">Section</section>,
    ]
    const [rest, spans] = splitChildren(children, "span")
    expect(spans).toHaveLength(1)
    expect(rest as any[]).toHaveLength(2)
  })

  test("should return children as-is when no valid children", () => {
    const result = splitChildren(null, "span")
    expect(result).toStrictEqual([null])
  })
})

describe("wrapOrPassProps", () => {
  test("should return null for undefined", () => {
    const Component = ({ children }: { children?: React.ReactNode }) => (
      <div>{children}</div>
    )
    expect(wrapOrPassProps(Component, undefined)).toBeNull()
  })

  test("should wrap valid element as children", () => {
    const Component = ({ children }: { children?: React.ReactNode }) => (
      <div>{children}</div>
    )
    const result = wrapOrPassProps(Component, "hello")
    expect(result).not.toBeNull()
  })

  test("should pass props when nodeOrProps is not a valid element", () => {
    const Component = ({ title }: { title: string }) => <div>{title}</div>
    const result = wrapOrPassProps(Component, { title: "test" } as any)
    expect(result).not.toBeNull()
  })
})

describe("useValidChildren", () => {
  test("should return valid children via hook", () => {
    const children = [
      <div key="1">Valid</div>,
      "String",
      null,
      <span key="2">Another</span>,
    ]
    const { result } = renderHook(() => useValidChildren(children))
    expect(result.current).toHaveLength(2)
  })
})

describe("isSomeDisplayName (additional)", () => {
  test("should match array with b.name", () => {
    const b = { name: "span" }
    expect(isSomeDisplayName(["span"], b)).toBeTruthy()
  })

  test("should cross-match a.displayName with b.name", () => {
    const a = { displayName: "MyComponent" }
    const b = { name: "MyComponent" }
    expect(isSomeDisplayName(a, b)).toBeTruthy()
  })

  test("should cross-match a.name with b.displayName", () => {
    const a = { name: "MyComponent" }
    const b = { displayName: "MyComponent" }
    expect(isSomeDisplayName(a, b)).toBeTruthy()
  })

  test("should return false when no match", () => {
    const a = { name: "Foo" }
    const b = { name: "Bar" }
    expect(isSomeDisplayName(a, b)).toBeFalsy()
  })
})

describe("isSomeElement (additional)", () => {
  test("should match via _payload.value", () => {
    const a = { _payload: { value: "div" } }
    expect(isSomeElement(a, "div")).toBeTruthy()
  })

  test("should return false when _payload.value does not match", () => {
    const a = { _payload: { value: "span" } }
    expect(isSomeElement(a, "div")).toBeFalsy()
  })

  test("should return false when _payload.value is undefined", () => {
    const a = { _payload: { value: undefined } }
    expect(isSomeElement(a, "div")).toBeFalsy()
  })

  test("should match via isSomeDisplayName when a !== b", () => {
    const CompA = () => null
    CompA.displayName = "MyComp"
    const CompB = () => null
    CompB.displayName = "MyComp"
    expect(isSomeElement(CompA, CompB)).toBeTruthy()
  })
})

describe("useFindChild", () => {
  test("should find child via hook", () => {
    const children = [<div key="1">Div</div>, <span key="2">Span</span>]
    const { result } = renderHook(() => useFindChild(children, "span"))
    expect(result.current?.type).toBe("span")
  })
})

describe("findChildren (additional)", () => {
  test("should return [undefined, ...children] when no match", () => {
    const children = [
      <div key="1">Div</div>,
      <section key="2">Section</section>,
    ]
    const [found, ...rest] = findChildren(children, "span")
    expect(found).toBeUndefined()
    expect(rest).toHaveLength(2)
  })
})

describe("useFindChildren", () => {
  test("should find children via hook", () => {
    const children = [
      <div key="1">Div</div>,
      <span key="2">Span</span>,
      <section key="3">Section</section>,
    ]
    const { result } = renderHook(() => useFindChildren(children, "span"))
    expect(result.current[0]?.type).toBe("span")
  })
})

describe("useIncludesChildren", () => {
  test("should check inclusion via hook", () => {
    const children = [
      <div key="1">
        <span>Inside</span>
      </div>,
    ]
    const { result } = renderHook(() => useIncludesChildren(children, "span"))
    expect(result.current).toBeTruthy()
  })
})

describe("useOmitChildren", () => {
  test("should omit children via hook", () => {
    const children = [
      <div key="1">Div</div>,
      <span key="2">Span</span>,
      <section key="3">Section</section>,
    ]
    const { result } = renderHook(() => useOmitChildren(children, "span"))
    expect(result.current).toHaveLength(2)
    expect(result.current.some((c: any) => c.type === "span")).toBeFalsy()
  })
})

describe("usePickChildren", () => {
  test("should pick children via hook", () => {
    const children = [
      <div key="1">Div</div>,
      <span key="2">Span</span>,
      <section key="3">Section</section>,
    ]
    const { result } = renderHook(() => usePickChildren(children, "span"))
    expect(result.current).toHaveLength(1)
    expect(result.current[0]?.type).toBe("span")
  })
})

describe("splitChildren (additional)", () => {
  test("should handle array types argument", () => {
    const children = [
      <div key="1">Div</div>,
      <span key="2">Span</span>,
      <section key="3">Section</section>,
    ]
    const [rest, picked] = splitChildren(children, ["div", "span"])
    expect(picked).toHaveLength(2)
    expect(rest as any[]).toHaveLength(1)
  })

  test("should return undefined for array types with no match", () => {
    const children = [<div key="1">Div</div>]
    const [rest, picked] = splitChildren(children, ["span", "section"])
    expect(picked).toBeUndefined()
    expect(rest as any[]).toHaveLength(1)
  })

  test("should return undefined for single type with no match", () => {
    const children = [<div key="1">Div</div>]
    const [rest, picked] = splitChildren(children, "article")
    expect(picked).toBeUndefined()
    expect(rest as any[]).toHaveLength(1)
  })
})

describe("useSplitChildren", () => {
  test("should split children via hook", () => {
    const children = [
      <div key="1">Div</div>,
      <span key="2">Span</span>,
      <section key="3">Section</section>,
    ]
    const { result } = renderHook(() => useSplitChildren(children, "span"))
    const [rest, spans] = result.current
    expect(spans).toHaveLength(1)
    expect(rest as any[]).toHaveLength(2)
  })
})
