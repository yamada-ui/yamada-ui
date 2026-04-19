import { describe, expect, test } from "vitest"
import { printSource, printTree } from "./print-view"

describe("printTree", () => {
  test("should print directory listing header and file names", () => {
    printTree("button", [
      { name: "button.tsx", content: "export const Button = () => <button />" },
      { name: "button.style.ts", content: "export const style = {}" },
    ])

    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining("Directory listing for:"),
    )
    expect(console.log).toHaveBeenCalledWith(expect.stringContaining("button"))
    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining("button.tsx"),
    )
    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining("button.style.ts"),
    )
  })

  test("should build nested tree for sources with directory paths", () => {
    printTree("accordion", [
      {
        name: "accordion/accordion.tsx",
        content: "export const Accordion = () => null",
      },
      {
        name: "accordion/accordion-item.tsx",
        content: "export const AccordionItem = () => null",
      },
    ])

    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining("accordion"),
    )
    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining("accordion.tsx"),
    )
    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining("accordion-item.tsx"),
    )
  })

  test("should handle a single file without nested paths", () => {
    printTree("badge", [
      { name: "badge.tsx", content: "export const Badge = () => null" },
    ])

    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining("badge.tsx"),
    )
  })
})

describe("printSource", () => {
  test("should print the file name and content", () => {
    printSource("button.tsx", "export const Button = () => <button />")

    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining("button.tsx"),
    )
    expect(console.log).toHaveBeenCalledWith(
      "export const Button = () => <button />",
    )
  })
})
