import type { FC } from "react"
import { render, screen } from "../../../test"
import { styled } from "../factory"
import { useCSS } from "./use-css"

describe("useCSS", () => {
  test("returns styles with theme values", () => {
    const Component: FC<any> = () => {
      const className = useCSS({
        color: "gray.500",
        display: "block",
        fontSize: "md",
        mx: "4",
      })

      return <styled.div className={className} data-testid="component" />
    }

    render(<Component />)

    expect(screen.getByTestId("component")).toHaveStyle({
      color: "var(--ui-colors-gray-500)",
      display: "block",
      fontSize: "var(--ui-fontSizes-md)",
      marginInlineEnd: "var(--ui-spaces-4)",
      marginInlineStart: "var(--ui-spaces-4)",
    })
  })
})
