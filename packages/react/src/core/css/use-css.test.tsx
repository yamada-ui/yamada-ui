import type { FC } from "react"
import { render, screen } from "@/test"
import { styled } from "../system/factory"
import { useCSS } from "./use-css"

describe("useCSS", () => {
  test("returns styles with theme values", () => {
    const Component: FC<any> = () => {
      const className = useCSS({
        fontSize: "md",
      })

      return <styled.div className={className} data-testid="component" />
    }

    render(<Component />)

    expect(screen.getByTestId("component")).toHaveStyle({
      fontSize: "var(--ui-fontSizes-md)",
    })
  })
})
