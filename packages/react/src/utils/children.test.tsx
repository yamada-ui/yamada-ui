import {
  findChildren,
  getValidChildren,
  includesChildren,
  isValidElement,
  omitChildren,
  pickChildren,
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
