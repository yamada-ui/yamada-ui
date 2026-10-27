import { render, screen } from "#test"
import { createComponent } from "./create-component"

describe.each(["component", "withContext"] as const)("%s", (factory) => {
  test.each([
    {
      className: undefined,
      expected: "custom user",
      styleClassName: "custom",
    },
    {
      className: "explicit",
      expected: "explicit user",
      styleClassName: "custom",
    },
    {
      className: () => "explicit",
      expected: "explicit user",
      styleClassName: "custom",
    },
    {
      className: undefined,
      expected: "ui-special user",
      styleClassName: undefined,
    },
  ])(
    "resolves styleClassName=$styleClassName and className=$className to $expected",
    ({ className, expected, styleClassName }) => {
      const { component, withContext } = createComponent("example", {
        className: styleClassName,
      })
      const options = { name: "special", className }
      const Component =
        factory === "component"
          ? component("div", options)()
          : withContext("div", options)()

      render(<Component className="user" data-testid="component" />)

      expect(screen.getByTestId("component")).toHaveAttribute("class", expected)
    },
  )
})
